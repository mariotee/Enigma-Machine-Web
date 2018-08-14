import PropTypes from 'prop-types';

import Rotor from './Rotor';

const ASCII = 97;
const ALPHA = 26;

const reflektorB = {
  'a':'y', 'b':'r', 'c':'u', 'd':'h', 'e':'q', 'f':'s', 'g':'l',
  'h':'d', 'i':'p', 'j':'x', 'k':'n', 'l':'g', 'm':'o', 'n':'k',
  'o':'m', 'p':'i', 'q':'e', 'r':'b', 's':'f', 't':'z', 'u':'c', 
  'v':'w', 'w':'v', 'x':'j', 'y':'a', 'z':'t',
}
const reflektorC = {
  'a':'f', 'b':'v', 'c':'p', 'd':'j', 'e':'i', 'f':'a', 'g':'o',
  'h':'y', 'i':'e', 'j':'d', 'k':'r', 'l':'z', 'm':'x', 'n':'w',
  'o':'g', 'p':'c', 'q':'t', 'r':'k', 's':'u', 't':'q', 'u':'s',
  'v':'b', 'w':'n', 'x':'m', 'y':'h', 'z':'l',
}

export default class Enigma
{
  static propTypes = {
    rotorType1: PropTypes.number.isRequired,
    start1: PropTypes.number.isRequired,      
    rotorType2: PropTypes.number.isRequired,
    start2: PropTypes.number.isRequired,    
    rotorType3: PropTypes.number.isRequired,
    start3: PropTypes.number.isRequired,
    plugboard: PropTypes.object.isRequired,
  }

  constructor(rotorType1, rotorType2, rotorType3,
    start1, start2, start3,
    reflektor, plugboard) {
    this.rotor1 = new Rotor(rotorType1,start1);
    this.rotor2 = new Rotor(rotorType2,start2);
    this.rotor3 = new Rotor(rotorType3,start3);
    this.plugboard = plugboard;

    switch(reflektor) {
      case 'B': this.reflektor = reflektorB;
        break;
      case 'C': this.reflektor = reflektorC;
        break;
      default: this.reflektor = reflektorB;
    }
  }

  write( message ) {
    let encoded = message.toLowerCase().split('');

    for( let index in encoded ) {
      let rotorFlag1 = false;
      let rotorFlag2 = false;

      const rotor3TurnChar = this.rotor3.getTurnover();
      const rotor3currentChar = String.fromCharCode(this.rotor3.getCurrentPosition() + ASCII);
      const rotor2TurnChar = this.rotor2.getTurnover();
      const rotor2currentChar = String.fromCharCode(this.rotor2.getCurrentPosition() + ASCII);

      if( rotor3TurnChar === rotor3currentChar ) {
        rotorFlag1 = true;
      }

      let input = encoded[index];
      const regexp = /^[a-z]+$/;
      
      if( regexp.test(input) ) {
        //initial swap
        input = this.plugboard[input] ? this.plugboard[input] : input;
        //forward
        input = this.__writeRotorForward(this.rotor3,input);
        input = this.__writeRotorForward(this.rotor2,input);
        input = this.__writeRotorForward(this.rotor1,input);
        //reflektor
        input = this.reflektor[input];
        //backward
        input = this.__writeRotorReverse(this.rotor1,input);
        input = this.__writeRotorReverse(this.rotor2,input);
        input = this.__writeRotorReverse(this.rotor3,input);
        //final swap
        input = this.plugboard[input] ? this.plugboard[input] : input;
        //write
        encoded[index] = input;
        //rotor step
        this.rotor3.rotorStep();
        if( rotorFlag1 ) {
            this.rotor2.rotorStep();
        }
        //check for double step
        if( rotor2TurnChar === rotor2currentChar ) {
            rotorFlag2 = true;
        }
        if(rotorFlag2) {
            this.rotor1.rotorStep();
        }
      }
    }

    return encoded.join('');
  }

  __writeRotorForward( rotor, char ) {
    const position = rotor.getCurrentPosition();
    const codeIndex = char.charCodeAt(0);
    const index = (codeIndex - ASCII + position) % ALPHA;
    let output = rotor.getChar(index).charCodeAt(0);
    output = (output - position < ASCII)
      ? output - (position - ALPHA) 
      : output - position;
    
    return String.fromCharCode(output);
  }

  __writeRotorReverse( rotor, char ) {
    const position = rotor.getCurrentPosition();
    const codeIndex = char.charCodeAt(0);
    const newChar = ((codeIndex + position) > (ASCII - 1 + ALPHA))
      ? String.fromCharCode(codeIndex + (position - ALPHA)) 
      : String.fromCharCode(codeIndex + position);
    const index = rotor.findIndex(newChar);
    let output = (index - position < 0 ) 
      ? index - (position - ALPHA) + ASCII 
      : index - position + ASCII;

    return String.fromCharCode(output);
  }
}