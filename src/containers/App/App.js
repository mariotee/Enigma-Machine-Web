import React from 'react'

import RotorMenu from 'components/RotorMenu'
import MessageArea from 'components/MessageArea'
import Instructions from 'components/Instructions'
import Plugboard from 'components/Plugboard'
import Enigma from 'classes/Enigma'
import plugboard from 'utils/TestPlugboard.js'

import styles from './style.js'

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
    
    const crypto = new Enigma(rotor1,rotor2,rotor3,start1,start2,start3,'B',plugboard);

    return (
      <div style={styles.root}>
        <header style={styles.header}>
          <h1 style={styles.title}>Enigma M3 Web</h1>
        </header>
        <div style={styles.content}>
          <RotorMenu
            rotorChoices={[rotor1,rotor2,rotor3]}
            rotorStarts={[start1,start2,start3]}
            reflektor={reflektor}
            onSelectChange={this.choiceChange}
          />
          <MessageArea
            inputChange={this.inputChange}
            message={this.state.message}
            encoded={this.state.encoded}
            crypto={crypto}
          />
          <Instructions/>
          <Plugboard/>
        </div>
      </div>
    )
  }
}

export default App;