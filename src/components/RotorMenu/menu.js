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
    <div style={styles.labelsRoot}>
      <label style={styles.label}>{'Rotor 1'}</label>
      <label style={styles.label}>{'Rotor 2'}</label>
      <label style={styles.label}>{'Rotor 3'}</label>
    </div>    
    <div style={styles.selectRoot}>
      <select            
        style={{
          ...styles.select,
          ...(props.theme === 'dark' ? styles.select._dark : null),
        }}
        name="rotor1"
        value={rotor1}
        onChange={event=>props.onSelectChange(event.target.name,event.target.value)}
      >
        {RotorOptions}
      </select>      
      <select            
        style={{
          ...styles.select,
          ...(props.theme === 'dark' ? styles.select._dark : null),
        }}
        name="rotor2"
        value={rotor2}
        onChange={event=>props.onSelectChange(event.target.name,event.target.value)}
      >
        {RotorOptions}
      </select>      
      <select            
        style={{
          ...styles.select,
          ...(props.theme === 'dark' ? styles.select._dark : null),
        }}
        name="rotor3"
        value={rotor3}
        onChange={event=>props.onSelectChange(event.target.name,event.target.value)}
      >
        {RotorOptions}
      </select>    
    </div>            
    <div style={styles.labelsRoot}>
      <label style={styles.label}>{'Start 1'}</label>
      <label style={styles.label}>{'Start 2'}</label>
      <label style={styles.label}>{'Start 3'}</label>
    </div>    
    <div style={styles.selectRoot}>
      <select            
        style={{
          ...styles.select,
          ...(props.theme === 'dark' ? styles.select._dark : null),
        }}
        name="start1"
        value={start1}
        onChange={event=>props.onSelectChange(event.target.name,event.target.value)}
      >
        {StartOptions}
      </select>      
      <select            
        style={{
          ...styles.select,
          ...(props.theme === 'dark' ? styles.select._dark : null),
        }}
        name="start2"
        value={start2}
        onChange={event=>props.onSelectChange(event.target.name,event.target.value)}
      >
        {StartOptions}
      </select>      
      <select            
        style={{
          ...styles.select,
          ...(props.theme === 'dark' ? styles.select._dark : null),
        }}
        name="start3"
        value={start3}
        onChange={event=>props.onSelectChange(event.target.name,event.target.value)}
      >
        {StartOptions}
      </select>
    </div>    
    <label style={styles.reflektorLabel}>{'Reflektor'}</label>
    <select            
      style={{
        ...styles.reflektorSelect,
        ...(props.theme === 'dark' ? styles.reflektorSelect._dark : null),
      }}
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