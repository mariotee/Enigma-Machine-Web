import Rotor from './Rotor.js';

describe('Rotor Methods Test', () => {
  const wiring = 3;
  const start = 5;

  it('Passes If Current Position Returns Correct', () => {
    expect((new Rotor(wiring,start))
      .getCurrentPosition())
      .toBe(start);
  });

  it('Passes If Turnover Returns Correct', () => {
    expect((new Rotor(wiring,start))
      .getTurnover())
      .toBe('v');
  });

  it('Passes If Rotor Step Increments', () => {
    const rotor = new Rotor(wiring,start);

    rotor.rotorStep();

    expect(rotor.getCurrentPosition()).toBe(start + 1);
  });

  it('Passes If Letters Array Is Of Length 26', () => {
    expect(new Rotor(wiring,start).__letters.length).toBe(26);
  });
})
