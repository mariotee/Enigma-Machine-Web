import Enigma from './Enigma.js';
//for simplicity, same plugboard will be used
import plugboard from 'utils/TestPlugboard.js';
  
it('Enigma stuff', ()=>{
  expect((new Enigma(1,2,3,8,12,22,'A',plugboard))
    .write('hello young padawan'))
    .toBe('jiwxi lhffl hicrzrh');
});