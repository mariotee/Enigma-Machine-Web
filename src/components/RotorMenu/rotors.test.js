import React from 'react';
import ReactDOM from 'react-dom';
import RotorMenu from 'components/RotorMenu';

const props = {
  rotorChoices: [1,3,3],
  rotorStarts: [1,20,5],
  reflektor: 'A',
  onChoiceChange: () => {console.log('lol')}
}

describe('Rotor Menu Render Test', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');

    ReactDOM.render(<RotorMenu 
      {...props}
    />, div);
    ReactDOM.unmountComponentAtNode(div);
  });
})