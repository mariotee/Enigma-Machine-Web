import React from 'react';
import PropTypes from 'prop-types';

import styles from './style.js';

import StartOptions from './startOptions.js';
import RotorOptions from './rotorOptions.js';
import ReflektorOptions from './reflektorOptions.js';

function RotorMenu(props) {
  const {rotorChoices,rotorStarts,reflektor} = props;
  const [rotor1,rotor2,rotor3] = rotorChoices;
  const [start1,start2,start3] = rotorStarts;

  return <div>
    <h3>Settings</h3>
    <label style={styles.label}>{'Rotor 1'}</label>
    <label style={styles.label}>{'Rotor 2'}</label>
    <label style={styles.label}>{'Rotor 3'}</label>
    <br/>
    <select            
      style={styles.select}
      name="rotor1"
      value={rotor1}
      onChange={event=>props.onSelectChange(event.target.name,event.target.value)}
    >
      {RotorOptions}
    </select>      
    <select            
      style={styles.select}
      name="rotor2"
      value={rotor2}
      onChange={event=>props.onSelectChange(event.target.name,event.target.value)}
    >
      {RotorOptions}
    </select>      
    <select            
      style={styles.select}
      name="rotor3"
      value={rotor3}
      onChange={event=>props.onSelectChange(event.target.name,event.target.value)}
    >
      {RotorOptions}
    </select>    
    <br/>    
    <label style={styles.label}>{'Start 1'}</label>
    <label style={styles.label}>{'Start 2'}</label>
    <label style={styles.label}>{'Start 3'}</label>
    <br/>
    <select            
      style={styles.select}
      name="start1"
      value={start1}
      onChange={event=>props.onSelectChange(event.target.name,event.target.value)}
    >
      {StartOptions}
    </select>      
    <select            
      style={styles.select}
      name="start2"
      value={start2}
      onChange={event=>props.onSelectChange(event.target.name,event.target.value)}
    >
      {StartOptions}
    </select>      
    <select            
      style={styles.select}
      name="start3"
      value={start3}
      onChange={event=>props.onSelectChange(event.target.name,event.target.value)}
    >
      {StartOptions}
    </select>
    <br/>
    <label style={styles.reflektor}>{'Reflektor'}</label>
    <select            
      style={styles.reflektor}
      name="reflektor"
      value={reflektor}
      onChange={event=>props.onSelectChange(event.target.name,event.target.value)}
    >
      {ReflektorOptions}
    </select> 
  </div>
}

RotorMenu.propTypes = {
  rotorChoices: PropTypes.arrayOf(PropTypes.number).isRequired,
  rotorStarts: PropTypes.arrayOf(PropTypes.number).isRequired,
  reflektor: PropTypes.string.isRequired,
  onSelectChange: PropTypes.func.isRequired,
}

export default RotorMenu;