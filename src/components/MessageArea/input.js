import React from 'react'
import styles from './style.js'

export default function(props) {  
  return <div style={styles.root}>
    <textarea
      style={{
        ...styles.input,
        ...(props.theme === 'dark' ? styles.input._dark : null),
      }}
      placeholder="your message"
      autoComplete="off"
      rows={8}
      value={props.message} 
      onChange={event=>props.inputChange(event.target.value,props.crypto)}
    />                  
    <textarea
      style={{
        ...styles.input,
        ...(props.theme === 'dark' ? styles.input._dark : null),
      }}
      readOnly={true}
      placeholder="encoded message"
      autoComplete="off"
      rows={8}
      value={props.encoded}      
    />
  </div>
}