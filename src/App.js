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
    reflektor: 'B',
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
    const { menu1,menu2,menu3,
      start1,start2,start3,
      reflektor } = this.state;
    const crypto = new Enigma(menu1,menu2,menu3,
      start1,start2,start3,
      reflektor,plugboard);

    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Enigma M3 Web</h1>
        </header>
        <div className="App-content">
          <h2>Settings</h2>
          <Grid container>
            <Grid item xs={12}>
              <RotorMenu
                choice1={menu1} choice2={menu2} choice3={menu3}
                start1={start1} start2={start2} start3={start3}
                reflektor={reflektor}
                onChoiceChange={this.choiceChange}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <h3 className="App-input-header">Your Message</h3>
              <textarea className="App-input"
                autoComplete="off"
                rows={8}
                value={this.state.message} 
                onChange={event=>this.inputChange(event,crypto)}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <h3 className="App-input-header">Encrypted Message</h3>
              <textarea className="App-input"
                autoComplete="off"
                rows={8}
                value={this.state.encoded}
              />
            </Grid>
            <Grid item xs={12}>
              <p className="App-directions">
                Now try copying the encrypted message and paste it anywhere to send it to a friend.
                This same web app can be used to decrypt the message by copy/pasting the sent message
                into the first box.<br/><br/>
                <b>Important: </b>Be sure to also share the exact same settings you used.<br/>
                <i>example: 3 1 3, D A G, UKW-B</i>
              </p>
            </Grid>
          </Grid>
        </div>
      </div>
    )
  }
}

export default App;