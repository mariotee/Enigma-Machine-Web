import React from 'react'
import styles from './style.js'

export default function(props) {          
    const getPossible = () => {
      return props.possible.map((element, index) => {
        return <option key={index}>
          {element}
        </option>
      })
    }

    const renderPair = (num, options, value1, value2) => {
      return <div style={styles.pair}>
        Pair {num}
        <div>
          <select style={styles.select} value={value1} onChange={(e) => props.onChangeKey(e.target.value, num)}>
            <option>{value1}</option>
            {options}
          </select>
        </div>
        <div>
          <select style={styles.select} value={value2} onChange={(e) => props.onChangeValue(e.target.value, num)}>
            <option>{value2}</option>
            {options}
          </select>
        </div>
      </div>
    }

    const getKey = (num) => {
      return Object.keys(props.board[num])[0]
    }

    return <div style={styles.root}>
      <div style={styles.title}>Plugboard</div>
      <div style={styles.board}>
        {renderPair(1, getPossible(), getKey(1), props.board[1][getKey(1)])}
        {renderPair(2, getPossible(), getKey(2), props.board[2][getKey(2)])}
        {renderPair(3, getPossible(), getKey(3), props.board[3][getKey(3)])}
        {renderPair(4, getPossible(), getKey(4), props.board[4][getKey(4)])}
        {renderPair(5, getPossible(), getKey(5), props.board[5][getKey(5)])}
      </div>
      <div style={styles.board}>
        {renderPair(6, getPossible(), getKey(6), props.board[6][getKey(6)])}
        {renderPair(7, getPossible(), getKey(7), props.board[7][getKey(7)])}
        {renderPair(8, getPossible(), getKey(8), props.board[8][getKey(8)])}
        {renderPair(9, getPossible(), getKey(9), props.board[9][getKey(9)])}
        {renderPair(10, getPossible(), getKey(10), props.board[10][getKey(10)])}
      </div>          
    </div>  
}