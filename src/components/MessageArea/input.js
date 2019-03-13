import React from 'react'
import styles from './style.module.css'

export default function(props) {  
  return <div className={styles.root}>
    <textarea
      className={styles.input}
      dark={props.theme === "dark" ? "true" : "false"}
      placeholder="your message"
      autoComplete="off"
      rows={8}
      value={props.message} 
      onChange={event=>props.inputChange(event.target.value,props.crypto)}
    />
    <textarea
      className={styles.input}
      dark={props.theme === "dark" ? "true" : "false"}
      readOnly={true}
      placeholder="encoded message"
      autoComplete="off"
      rows={8}
      value={props.encoded}      
    />
  </div>
}