import React from 'react'
import styles from './style.js'

export default class Plugboard extends React.Component
{  
  state = {
    possible: [
      'u','v','w','x','y','z'
    ],
    choices: [
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
    ]
  }

  selectChangeKey = (value, num) => {
    console.log(this.state.possible)
    this.setState((prevState) => {
      let key = Object.keys(prevState.choices[num-1])[0]
      let pos = prevState.possible
      pos = pos.filter(x => x !== value)
      pos.push(key)
      const val = prevState.choices[num-1][key]
      const arr = prevState.choices
      key = value
      arr[num-1] = { [key]: val }            
      console.log(pos)
      return {
        choices: arr,        
        possible: pos,
      }
    })
  }

  selectChangeValue = (value, num) => {    
    this.setState((prevState) => {
      const val = value
      const arr = prevState.choices
      const key = Object.keys(arr[num-1])[0]
      arr[num-1] = { [key]: val }
      
      return {
        choices: arr
      }
    })
  }

  render() {
    const getPossible = () => {
      return this.state.possible.map((element, index) => {
        return <option key={index}>
          {element}
        </option>
      })
    }

    const renderPair = (num, options, value1, value2) => {
      return <div>
        Pair {num}:
        <select onChange={(e) => this.selectChangeKey(e.target.value, num)}>
          <option>{value1}</option>
          {options}
        </select>
        <select onChange={(e) => this.selectChangeValue(e.target.value, num)}>
          <option>{value2}</option>
          {options}
        </select>
      </div>
    }

    return <div style={styles.root}>
      Plugboard
      {renderPair(1, getPossible(), Object.keys(this.state.choices[0])[0], this.state.choices[0][Object.keys(this.state.choices[0])[0]])}
      {renderPair(2, getPossible(), Object.keys(this.state.choices[1])[0], this.state.choices[1][Object.keys(this.state.choices[1])[0]])}
      {renderPair(3, getPossible(), Object.keys(this.state.choices[2])[0], this.state.choices[2][Object.keys(this.state.choices[2])[0]])}
      {renderPair(4, getPossible(), Object.keys(this.state.choices[3])[0], this.state.choices[3][Object.keys(this.state.choices[3])[0]])}
      {renderPair(5, getPossible(), Object.keys(this.state.choices[4])[0], this.state.choices[4][Object.keys(this.state.choices[4])[0]])}
      {renderPair(6, getPossible(), Object.keys(this.state.choices[5])[0], this.state.choices[5][Object.keys(this.state.choices[5])[0]])}
      {renderPair(7, getPossible(), Object.keys(this.state.choices[6])[0], this.state.choices[6][Object.keys(this.state.choices[6])[0]])}
      {renderPair(8, getPossible(), Object.keys(this.state.choices[7])[0], this.state.choices[7][Object.keys(this.state.choices[7])[0]])}
      {renderPair(9, getPossible(), Object.keys(this.state.choices[8])[0], this.state.choices[8][Object.keys(this.state.choices[8])[0]])}
      {renderPair(10, getPossible(), Object.keys(this.state.choices[9])[0], this.state.choices[9][Object.keys(this.state.choices[9])[0]])}
    </div>
  }
}