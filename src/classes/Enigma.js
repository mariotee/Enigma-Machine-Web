import PropTypes from 'prop-types';

import Rotor from './Rotor';

const reflektorA = {
  'a':'y', 'b':'r', 'c':'u', 'd':'h', 'e':'q', 'f':'s', 'g':'l',
  'h':'d', 'i':'p', 'j':'x', 'k':'n', 'l':'g', 'm':'o', 'n':'k',
  'o':'m', 'p':'i', 'q':'e', 'r':'b', 's':'f', 't':'z', 'u':'c', 
  'v':'w', 'w':'v', 'x':'j', 'y':'a', 'z':'t',
}
const reflektorB = {
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
    this.rotor1 = new Rotor(rotorType1,start1-1);
    this.rotor2 = new Rotor(rotorType2,start2-1);
    this.rotor3 = new Rotor(rotorType3,start3-1);
    this.plugboard = plugboard;

    switch(reflektor) {
      case 'A': this.reflektor = reflektorA;
        break;
      case 'B': this.reflektor = reflektorB;
        break;
      default: this.reflektor = reflektorA;
    }
  }

  write( message ) {
    // let encoded = message.toLowerCase().split('');

    // for( let char of encoded ) {
    //   let rotorFlag1 = false;
    //   let rotorFlag2 = false;

    //   if( this.rotor3.getTurnover() === rotor3.getCurrentPosition) {
    //     rotorFlag1 = true;
    //   }
    //   let input = char;
    //   if( input === ' ') {
        
    //   }
    // }

    return message;
  }

  __writeRotorForward( rotor, char ) {

  }

  __writeRotorReverse( rotor, char ) {

  }
}