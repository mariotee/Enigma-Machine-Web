import Enigma from './Enigma.js';
//for simplicity, same plugboard will be used
import plugboard from 'utils/TestPlugboard.js';

describe('Enigma Write Test', ()=>{
  it('Passes If All LowerCase Converts Correctly', ()=>{
    expect((new Enigma(1,2,3,8,12,22,'A',plugboard))
      .write('hello young padawan'))
      .toBe('jiwxi lhffl hicrzrh');
  });

  it('Passes If All MixCase Converts Correctly', ()=>{
    expect((new Enigma(1,2,3,8,12,22,'A',plugboard))
      .write('Hello Young Padawan'))
      .toBe('jiwxi lhffl hicrzrh');
  });

  it('Passes If All MixCase And Special Char Converts Correctly', ()=>{
    expect((new Enigma(1,2,3,8,12,22,'A',plugboard))
      .write('Hello @Young_Padawan!'))
      .toBe('jiwxi @lhffl_hicrzrh!');
  });
})
