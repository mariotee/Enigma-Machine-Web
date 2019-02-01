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
    theme: 'light',
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

  componentDidMount() {
    this.setState({
      theme: this.getThemeCookie() || 'light',
    })
  }

  getThemeCookie = () => {
    const key = "theme="
    const decodedCookie = decodeURIComponent(document.cookie)
    var ca = decodedCookie.split(';')
    for(var i = 0; i <ca.length; i++) {
      var c = ca[i];
      while (c.charAt(0) === ' ') {
        c = c.substring(1);
      }
      if (c.indexOf(key) === 0) {
        return c.substring(key.length, c.length);
      }
    }
    return "";
  }

  toggleTheme = () => {  
    this.setState((prevState) => {
      const themeToBe = prevState.theme === 'light' ? 'dark' : 'light'
    const expires = new Date()
    expires.setTime(expires.getTime() + 1000*60*60*24)

    document.cookie = `theme=${themeToBe};expires=${expires.toUTCString()};path=/;`

    return { theme:  themeToBe }
    })
  }

  onMessageWrite = (input,crypto) => {
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
      const pos = prevState.possible
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
    
    const themeStyle = this.state.theme === 'dark'
      ? { backgroundColor: '#333333', color: '#eeeeee'}
      : { backgroundColor: '#eeeeee', color: '#000000'}

    return <div style={{
      ...styles.root,
      ...themeStyle,
    }}>
      <div style={styles.header}>
        <h1 style={styles.title}>Enigma M3 Web</h1>        
      </div>
      <div style={styles.content}>
        <RotorMenu
          theme={this.state.theme}
          rotorChoices={[rotor1,rotor2,rotor3]}
          rotorStarts={[start1,start2,start3]}
          reflektor={reflektor}
          onSelectChange={this.choiceChange}
        />
        <Plugboard
          theme={this.state.theme}
          board={this.state.plugboard}
          possible={this.state.possible}
          onChangeKey={this.plugboardChangeKey}
          onChangeValue={this.plugboardChangeValue}
        />
        <MessageArea
          theme={this.state.theme}
          inputChange={this.onMessageWrite}
          message={this.state.message}
          encoded={this.state.encoded}
          crypto={crypto}
        />                    
        <Instructions theme={this.state.theme}/>
      </div>
      <footer>      
        <button className="anybutton" style={{
          ...styles.themetoggle,
          ...(this.state.theme === 'dark' ? styles.themetoggle._dark : null)
        }}        
        onClick={this.toggleTheme}>
          Toggle {this.state.theme === 'dark' ? 'Light' : 'Dark'} Theme
        </button>
      </footer>
    </div>    
  }
}

export default App;