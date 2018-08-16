import React from 'react';

import { Grid } from '@material-ui/core';

import './App.css';
import RotorMenu from 'components/RotorMenu';
import Enigma from 'classes/Enigma';
import plugboard from 'utils/TestPlugboard.js';

const DECIMAL = 10;

class App extends React.Component {
  state = {
    rotor1: 1,
    rotor2: 2,
    rotor3: 3,
    start1: 0,
    start2: 0,
    start3: 0,
    reflektor: 'B',
    //plugboard: {},
    message: '',
    encoded: '',
  }

  inputChange = (input,crypto) => {
    this.setState({
      message: input,
      encoded: crypto.write(input),
    })
  }

  choiceChange = (key,value) => {
    if( /[0-9]/.test(value) ) {
      value = parseInt(value,DECIMAL);
    }

    this.setState({
      [key]: value,
      message: '',
      encoded: '',
    })
  }

  render() {
    const { rotor1,rotor2,rotor3,start1,start2,start3,reflektor } = this.state;

    for( let thing in this.state ) {
      console.log(`${typeof this.state[thing]}: ${this.state[thing]}`)
    }
    
    const crypto = new Enigma(rotor1,rotor2,rotor3,start1,start2,start3,'B',plugboard);

    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Enigma M3 Web</h1>
        </header>
        <div className="App-content">
          <Grid container>
            <Grid item xs={12}>
              <RotorMenu
                rotorChoices={[rotor1,rotor2,rotor3]}
                rotorStarts={[start1,start2,start3]}
                reflektor={reflektor}
                onSelectChange={this.choiceChange}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <h3 className="App-input-header">Message Input</h3>
              <textarea className="App-input"
                autoComplete="off"
                rows={8}
                value={this.state.message} 
                onChange={event=>this.inputChange(event.target.value,crypto)}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <h3 className="App-input-header">Message Output</h3>
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