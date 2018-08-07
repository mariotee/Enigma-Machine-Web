import React from 'react';

import { withStyles, InputLabel, Select, MenuItem } from '@material-ui/core';
import style from './style.js';

function RotorMenu({ classes, ...props }) {
  const rotorMenuItems = [
    <MenuItem key={0} value="1">{'I'}</MenuItem>,
    <MenuItem key={1} value="2">{'II'}</MenuItem>,
    <MenuItem key={2} value="3">{'III'}</MenuItem>,
    <MenuItem key={3} value="4">{'IV'}</MenuItem>,
    <MenuItem key={4} value="5">{'V'}</MenuItem>,
  ]

  return(
    <div className={classes.root}>
      <InputLabel>{'Rotor I'}</InputLabel>
      <Select className={classes.select} value="I">
        {rotorMenuItems}
      </Select>
      <InputLabel>{'Rotor II'}</InputLabel>
      <Select className={classes.select} value="I">
        {rotorMenuItems}
      </Select>
      <InputLabel>{'Rotor III'}</InputLabel>
      <Select className={classes.select} value="I">
        {rotorMenuItems}
      </Select>
    </div>
  )
}

export default withStyles(style)(RotorMenu);