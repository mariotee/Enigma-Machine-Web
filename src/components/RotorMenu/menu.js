import React from 'react';
import PropTypes from 'prop-types';

import StartOptions from './options/startOptions.js';
import RotorOptions from './options/rotorOptions.js';
import ReflektorOptions from './options/reflektorOptions.js';

function RotorMenu(props) {
  const {rotorChoices,rotorStarts,reflektor} = props;
  const [rotor1,rotor2,rotor3] = rotorChoices;
  const [start1,start2,start3] = rotorStarts;

  return <div>
    <h4>Settings</h4>
    <div className="d-flex justify-content-between">
      <label className="mx-2 w-100">{'Rotor 1'}</label>
      <label className="mx-2 w-100">{'Rotor 2'}</label>
      <label className="mx-2 w-100">{'Rotor 3'}</label>
    </div>
    <div className="d-flex justify-content-between">
      <select
        className="form-control mx-2 text-center"
        name="rotor1"
        value={rotor1}
        onChange={event=>props.onSelectChange(event.target.name,event.target.value)}
      >
        {RotorOptions}
      </select>
      <select
        className="form-control mx-2 text-center"
        name="rotor2"
        value={rotor2}
        onChange={event=>props.onSelectChange(event.target.name,event.target.value)}
      >
        {RotorOptions}
      </select>      
      <select            
        className="form-control mx-2 text-center"        
        name="rotor3"
        value={rotor3}
        onChange={event=>props.onSelectChange(event.target.name,event.target.value)}
      >
        {RotorOptions}
      </select>    
    </div>            
    <div className="d-flex justify-content-between">
      <label className="mx-2 w-100">{'Start 1'}</label>
      <label className="mx-2 w-100">{'Start 2'}</label>
      <label className="mx-2 w-100">{'Start 3'}</label>
    </div>    
    <div className="d-flex justify-content-between">
      <select            
        className="form-control mx-2 text-center"        
        name="start1"
        value={start1}
        onChange={event=>props.onSelectChange(event.target.name,event.target.value)}
      >
        {StartOptions}
      </select>      
      <select            
        className="form-control mx-2 text-center"        
        name="start2"
        value={start2}
        onChange={event=>props.onSelectChange(event.target.name,event.target.value)}
      >
        {StartOptions}
      </select>      
      <select            
        className="form-control mx-2 text-center"        
        name="start3"
        value={start3}
        onChange={event=>props.onSelectChange(event.target.name,event.target.value)}
      >
        {StartOptions}
      </select>
    </div>    
    <label className="mx-2 my-1">{'Reflektor'}</label>
    <select
      className="form-control w-75 mx-auto"      
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