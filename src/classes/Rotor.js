const WIRING1 = ['e', 'k', 'm', 'f', 'l', 'g', 'd', 'q', 'v', 'z', 'n', 't', 'o', 
  'w', 'y', 'h', 'x', 'u', 's', 'p', 'a', 'i', 'b', 'r', 'c', 'j'];
const WIRING2 = ['a', 'j', 'd', 'k', 's', 'i', 'r', 'u', 'x', 'b', 'l', 'h', 'w', 
  't', 'm', 'c', 'q', 'g', 'z', 'n', 'p', 'y', 'f', 'v', 'o', 'e'];
const WIRING3 = ['b', 'd', 'f', 'h', 'j', 'l', 'c', 'p', 'r', 't', 'x', 'v', 'z', 
  'n', 'y', 'e', 'i', 'w', 'g', 'a', 'k', 'm', 'u', 's', 'q', 'o'];
const WIRING4 = ['e', 's', 'o', 'v', 'p', 'z', 'j', 'a', 'y', 'q', 'u', 'i', 'r', 
  'h', 'x', 'l', 'n', 'f', 't', 'g', 'k', 'd', 'c', 'm', 'w', 'b'];
const WIRING5 = ['v', 'z', 'b', 'r', 'g', 'i', 't', 'y', 'u', 'p', 's', 'd', 'n', 
  'h', 'l', 'x', 'a', 'w', 'm', 'j', 'q', 'o', 'f', 'e', 'c', 'k'];

export default class Rotor
{
  constructor(wiring,start) {
    this.__position = start;
    switch(wiring) {
      case 1: this.__letters = WIRING1; this.__turnover = 'q';
        break;
      case 2: this.__letters = WIRING2; this.__turnover = 'e';
        break;
      case 3: this.__letters = WIRING3; this.__turnover = 'v';
        break;
      case 4: this.__letters = WIRING4; this.__turnover = 'j';
        break;
      case 5: this.__letters = WIRING5; this.__turnover = 'z';
        break;
      default: console.error('error invalid Rotor input. using default mapping.');
        this.__letters = WIRING1;
    }
  }

  getCurrentPosition() { return this.__position }
  
  getTurnover() { return this.__turnover }
  
  getChar( index ) { return this.__letters[index] }

  findIndex( char ) { return this.__letters.indexOf(char) }

  rotorStep() {
    ++this.__position;
    if( this.__position > 25 ) { this.__position = 0; }
  }
}