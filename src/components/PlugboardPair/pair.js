import React from 'react'

import styles from './style.module.css'

function PlugboardPair(props) {  
    return <div className={styles.pair}>
      Pair {props.num}
      <div>
        <select
          className={styles.select}
          dark={props.theme === "dark" ? "true" : "false"}
          value={props.pairKey}
          onChange={(e) => props.onChangeKey(e.target.value, props.num)}
        >
          <option>{props.pairKey}</option>
          {props.possible}
        </select>
      </div>
      <div>
        <select 
          className={styles.select}
          dark={props.theme === "dark" ? "true" : "false"}
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