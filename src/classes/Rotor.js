const wiring1 = ['e', 'k', 'm', 'f', 'l', 'g', 'd', 'q', 'v', 'z', 'n', 't', 'o',
'w', 'y', 'h', 'x', 'u', 's', 'p', 'a', 'i', 'b', 'r', 'c', 'j'];
const wiring2 = ['a', 'j', 'd', 'k', 's', 'i', 'r', 'u', 'x', 'b', 'l', 'h', 'w',
't', 'm', 'c', 'q', 'g', 'z', 'n', 'p', 'y', 'f', 'v', 'o', 'e'];
const wiring3 = ['b', 'd', 'f', 'h', 'j', 'l', 'c', 'p', 'r', 't', 'x', 'v', 'z',
'n', 'y', 'e', 'i', 'w', 'g', 'a', 'k', 'm', 'u', 's', 'q', 'o'];
const wiring4 = ['e', 's', 'o', 'v', 'p', 'z', 'j', 'a', 'y', 'q', 'u', 'i', 'r',
'h', 'x', 'l', 'n', 'f', 't', 'g', 'k', 'd', 'c', 'm', 'w', 'b'];
const wiring5 = ['v', 'z', 'b', 'r', 'g', 'i', 't', 'y', 'u', 'p', 's', 'd', 'n',
'h', 'l', 'x', 'a', 'w', 'm', 'j', 'q', 'o', 'f', 'e', 'c', 'k'];

export default class Rotor
{
  constructor(wiring,start) {
    this.position = start;
    switch(wiring) {
      case 1: this.letters = wiring1; this.turnover = 'q';
        break;
      case 2: this.letters = wiring2; this.turnover = 'e';
        break;
      case 3: this.letters = wiring3; this.turnover = 'v';
        break;
      case 4: this.letters = wiring4; this.turnover = 'j';
        break;
      case 5: this.letters = wiring5; this.turnover = 'z';
        break;
      default: console.log('error invalid input. using default mapping.');
        this.letters = wiring1;
    }
  }

  getCurrentPosition() { return this.position }
  
  getTurnover() { return this.turnover }
  
  getChar( index ) {
    return this.letters[index] 
  }

  rotorStep() {
    ++this.position;
    if( this.position > 25 ) {
      this.position = 0;
    }
  }

  findIndex( char ) {
    return this.letters.indexOf(char);
  }
}