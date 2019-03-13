import React from 'react';
import PropTypes from 'prop-types';

import styles from './style.module.css';

import StartOptions from './options/startOptions.js';
import RotorOptions from './options/rotorOptions.js';
import ReflektorOptions from './options/reflektorOptions.js';

function RotorMenu(props) {
  const {rotorChoices,rotorStarts,reflektor} = props;
  const [rotor1,rotor2,rotor3] = rotorChoices;
  const [start1,start2,start3] = rotorStarts;

  return <div className={styles.root}>
    <h3>Settings</h3>
    <div className={styles.labelsRoot}>
      <label className={styles.label}>{'Rotor 1'}</label>
      <label className={styles.label}>{'Rotor 2'}</label>
      <label className={styles.label}>{'Rotor 3'}</label>
    </div>    
    <div className={styles.selectRoot}>
      <select            
        className={styles.select}
        dark={props.theme === "dark" ? "true" : "false"}
        name="rotor1"
        value={rotor1}
        onChange={event=>props.onSelectChange(event.target.name,event.target.value)}
      >
        {RotorOptions}
      </select>      
      <select            
        className={styles.select}
        dark={props.theme === "dark" ? "true" : "false"}
        name="rotor2"
        value={rotor2}
        onChange={event=>props.onSelectChange(event.target.name,event.target.value)}
      >
        {RotorOptions}
      </select>      
      <select            
        className={styles.select}
        dark={props.theme === "dark" ? "true" : "false"}
        name="rotor3"
        value={rotor3}
        onChange={event=>props.onSelectChange(event.target.name,event.target.value)}
      >
        {RotorOptions}
      </select>    
    </div>            
    <div className={styles.labelsRoot}>
      <label className={styles.label}>{'Start 1'}</label>
      <label className={styles.label}>{'Start 2'}</label>
      <label className={styles.label}>{'Start 3'}</label>
    </div>    
    <div className={styles.selectRoot}>
      <select            
        className={styles.select}
        dark={props.theme === "dark" ? "true" : "false"}
        name="start1"
        value={start1}
        onChange={event=>props.onSelectChange(event.target.name,event.target.value)}
      >
        {StartOptions}
      </select>      
      <select            
        className={styles.select}
        dark={props.theme === "dark" ? "true" : "false"}
        name="start2"
        value={start2}
        onChange={event=>props.onSelectChange(event.target.name,event.target.value)}
      >
        {StartOptions}
      </select>      
      <select            
        className={styles.select}
        dark={props.theme === "dark" ? "true" : "false"}
        name="start3"
        value={start3}
        onChange={event=>props.onSelectChange(event.target.name,event.target.value)}
      >
        {StartOptions}
      </select>
    </div>    
    <label className={styles.reflektorLabel}>{'Reflektor'}</label>
    <select
      className={styles.reflektorSelect}
      dark={props.theme === "dark" ? "true" : "false"}
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