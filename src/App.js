import React from 'react';

import { Grid } from '@material-ui/core';

import './App.css';
import RotorMenu from 'components/RotorMenu';
import Enigma from 'classes/Enigma';
import plugboard from 'utils/TestPlugboard.js';

class App extends React.Component {
  state = {
    menu1: 1,
    menu2: 2,
    menu3: 3,
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
        <h2>Settings</h2>
        <Grid container spacing={24}>
          <Grid item xs={12}>
            <RotorMenu
              choice1={menu1} choice2={menu2} choice3={menu3}
              start1={start1} start2={start2} start3={start3}
              onChoiceChange={this.choiceChange}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <h5 className="App-input-header">Your Message</h5>
            <textarea className="App-input"
              autoComplete="off"
              rows={8}
              value={this.state.message} 
              onChange={event=>this.inputChange(event,crypto)}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <h5 className="App-input-header">Encrypted Message</h5>
            <textarea className="App-input"
              autoComplete="off"
              rows={8}
              value={this.state.encoded}
            />
          </Grid>
          <Grid item xs={12}>
            <p style={{margin: '16px 25%'}}>
            Now try copy pasting the encrypted message and send it to a friend. be sure to tell them
            the settings you used to get this encryption
            </p>
          </Grid>
        </Grid>
      </div>
    );
  }
}

export default App;