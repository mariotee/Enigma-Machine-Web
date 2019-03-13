import React from 'react'
import styles from './style.module.css'

export default function() {
  return <div className={styles.root}>
    <p>
      Now try copying the encrypted message and paste it anywhere to send it to a friend.
      This same web app can be used to decrypt the message by copy/pasting the sent message
      into the first box.<br/><br/>
      <b>Important: </b>Be sure to also share the exact same settings you used.<br/>
      <i>example: 3 1 3, D A G, UKW-B, AB CD EF GH IJ KL MN OP QR ST</i>
    </p>
  </div>
}