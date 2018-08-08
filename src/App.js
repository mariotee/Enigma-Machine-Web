import React, { Component } from 'react';
import './App.css';
import RotorMenu from 'components/RotorMenu';
import Enigma from 'classes/Enigma';
import plugboard from 'utils/TestPlugboard.js';

class App extends Component {
  state = {
    menu1: 1,
    menu2: 1,
    menu3: 1,
    start1: 1,
    start2: 1,
    start3: 1,
    message: '',
    encoded: '',
  }

  inputChange = (event,crypto) => {
    this.setState({
      message: event.target.value,
      encoded: crypto.write(event.target.value),
    })
  }

  choiceChange = (key,value) => {
    this.setState({
      [key]: value,
      message: '',
      encoded: '',
    })
  }

  render() {
    const {menu1,menu2,menu3,start1,start2,start3} = this.state;
    const crypto = new Enigma(menu1,menu2,menu3,start1,start2,start3,'A',plugboard);

    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Enigma M3 Web</h1>
        </header>
        <RotorMenu 
          choice1={menu1} choice2={menu2} choice3={menu3}
          onChoiceChange={this.choiceChange}
          start1={start1} start2={start2} start3={start3}
        />
        <h5>message</h5>
        <textarea style={{resize: 'none', margin: '8px'}} rows={8} cols={64} value={this.state.message} onChange={event=>this.inputChange(event,crypto)}/>
        <h5>encrypted</h5>
        <textarea style={{resize: 'none', margin: '8px'}} rows={8} cols={64} value={this.state.encoded}/>
        <p style={{margin: '16px 25%'}}>
          Now try copy pasting the encrypted message and send it to a friend. be sure to tell them
          the settings you used to get this encryption
        </p>
      </div>
    );
  }
}

export default App;
