import React from 'react'

import styles from './style.js'

function PlugboardPair(props) {  
    return <div style={styles.pair}>
      Pair {props.num}
      <div>
        <select
          style={{
            ...styles.select,
            ...(props.theme === 'dark' ? styles.select._dark : null)
          }}
          value={props.pairKey}
          onChange={(e) => props.onChangeKey(e.target.value, props.num)}
        >
          <option>{props.pairKey}</option>
          {props.possible}
        </select>
      </div>
      <div>
        <select 
          style={{
            ...styles.select,
            ...(props.theme === 'dark' ? styles.select._dark : null)
          }}
          value={props.pairValue}
          onChange={(e) => props.onChangeValue(e.target.value, props.num)}
        >
          <option>{props.pairValue}</option>
          {props.possible}
        </select>
      </div>
    </div>  
}

export default PlugboardPair