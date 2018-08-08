import React, { Component } from 'react';
import './App.css';
import RotorMenu from 'components/RotorMenu';
import Enigma from 'classes/Enigma';
import Rotor from 'classes/Rotor';
import plugboard from 'utils/TestPlugboard.js';

class App extends Component {
  state = {
    menu1: 1,
    menu2: 2,
    menu3: 3,
    start1: 8,
    start2: 12,
    start3: 22,
    message: '',
    encoded: '',
  }

  inputChange = (event,crypto) => {
    this.setState({
      message: event.target.value,
      encoded: crypto.write(event.target.value),
    })
  }

  render() {
    const {menu1,menu2,menu3,start1,start2,start3} = this.state;
    const crypto = new Enigma(menu1,menu2,menu3,start1,start2,start3,'A',plugboard)
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Enigma M3 Web</h1>
        </header>
        <RotorMenu/>
        <input value={this.state.message} onChange={event=>this.inputChange(event,crypto)}/>
        <input value={this.state.encoded}/>
      </div>
    );
  }
}

export default App;
