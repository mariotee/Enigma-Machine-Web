import React from 'react';
import ReactDOM from 'react-dom';
import Plugboard from 'components/Plugboard';

const attributes = {
  possible: ["x"],
  board: [
    {"sent": "inel"},
    {"a":"b"},
    {"c":"d"},
    {"e":"f"},
    {"g":"h"},
    {"i":"j"},
    {"k":"l"},
    {"m":"n"},
    {"o":"p"},
    {"q":"r"},
    {"s":"t"},    
  ],
  onChangeKey: () => {},
  onChangeValue: () => {},
}

describe('Plugboard Render Test', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');

    ReactDOM.render(<Plugboard 
      possible={attributes.possible}
      board={attributes.board}
      onChangeKey={attributes.onChangeKey}
      onChangeValue={attributes.onChangeValue}
    />, div);
    ReactDOM.unmountComponentAtNode(div);
  });
})