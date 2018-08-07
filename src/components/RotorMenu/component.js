import React from 'react';

import { withStyles, InputLabel, Select, MenuItem } from '@material-ui/core';
import style from './style.js';

function RotorMenu({ classes, ...props }) {
  const rotorMenuItems = [
    <MenuItem value="1">{'I'}</MenuItem>,
    <MenuItem value="2">{'II'}</MenuItem>,
    <MenuItem value="3">{'III'}</MenuItem>,
    <MenuItem value="4">{'IV'}</MenuItem>,
    <MenuItem value="5">{'V'}</MenuItem>,
  ]

  return(
    <div className={classes.root}>
      <InputLabel>{'Rotor I'}</InputLabel>
      <Select className={classes.select} >
        {rotorMenuItems}
      </Select>
      <InputLabel>{'Rotor II'}</InputLabel>
      <Select className={classes.select} >
        {rotorMenuItems}
      </Select>
      <InputLabel>{'Rotor III'}</InputLabel>
      <Select className={classes.select} >
        {rotorMenuItems}
      </Select>
    </div>
  )
}

export default withStyles(style)(RotorMenu);