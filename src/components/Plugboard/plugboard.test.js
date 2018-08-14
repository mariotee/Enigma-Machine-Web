import React from 'react';
import ReactDOM from 'react-dom';
import Plugboard from 'components/Plugboard';

const props = {
  
}

describe('Plugboard Render Test', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');

    ReactDOM.render(<Plugboard 
      {...props}
    />, div);
    ReactDOM.unmountComponentAtNode(div);
  });
})