import React from 'react'

import RotorMenu from 'components/RotorMenu'
import MessageArea from 'components/MessageArea'
import Instructions from 'components/Instructions'
import Plugboard from 'components/Plugboard'
import Enigma from 'classes/Enigma'

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
    plugboard: [
      {'sent':'inel'},
      {'a':'b'},
      {'c':'d'},
      {'e':'f'},
      {'g':'h'},
      {'i':'j'},
      {'k':'l'},
      {'m':'n'},
      {'o':'p'},
      {'q':'r'},
      {'s':'t'},
    ],
    possible: ['u','v','w','x','y','z'],
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

  plugboardChangeKey = (value, index) => {
    this.setState((prevState) => {
      let key = Object.keys(prevState.plugboard[index])[0]
      const pos = prevState.possible
      pos[pos.indexOf(value)] = key
      const val = prevState.plugboard[index][key]
      const arr = prevState.plugboard
      key = value
      arr[index] = { [key]: val }            

      return {
        plugboard: arr,        
        possible: pos,
        message: '',
        encoded: '',
      }
    })
  }

  plugboardChangeValue = (value, index) => {
    this.setState((prevState) => {            
      const arr = prevState.plugboard
      const key = Object.keys(arr[index])[0]
      let val = arr[index][key]
      let pos = prevState.possible
      pos[pos.indexOf(value)] = val
      val = value      
      arr[index] = { [key]: val }
            
      return {
        plugboard: arr,        
        possible: pos,
        message: '',
        encoded: '',
      }
    })
  }

  render() {
    const makePlugboard = (plugboard) => {
      let board = {};
      for(const element of plugboard) {
        const key = Object.keys(element)[0]
        board[key] = element[key]
        board[element[key]] = key
      }

      return board
    }

    const { rotor1,rotor2,rotor3,start1,start2,start3,reflektor,plugboard } = this.state;
    const plugboardInput = makePlugboard(plugboard);
    const crypto = new Enigma(rotor1,rotor2,rotor3,start1,start2,start3,'B',plugboardInput);

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
          <Plugboard
            board={this.state.plugboard}
            possible={this.state.possible}
            onChangeKey={this.plugboardChangeKey}
            onChangeValue={this.plugboardChangeValue}
          />
          <Instructions/>
        </div>
      </div>
    )
  }
}

export default App;