import React from 'react';
import ReactDOM from 'react-dom';
import RotorMenu from 'components/RotorMenu';

const attributes = {
  rotorChoices: [1,3,3],
  rotorStarts: [1,20,5],
  reflektor: 'B',  
  onSelectChange: () => {console.log('lol')}
}

describe('Rotor Menu Render Test', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');

    ReactDOM.render(<RotorMenu 
      rotorChoices={attributes.rotorChoices}
      rotorStarts={attributes.rotorStarts}
      reflektor={attributes.reflektor}
      onSelectChange={attributes.onSelectChange}
    />, div);
    ReactDOM.unmountComponentAtNode(div);
  });
})