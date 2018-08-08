import React from 'react';

import { withStyles, InputLabel, Select, MenuItem } from '@material-ui/core';
import style from './style.js';

function RotorMenu({ classes, ...props }) {
  const rotorMenuItems = [
    <MenuItem key={0} value={1}>{'I'}</MenuItem>,
    <MenuItem key={1} value={2}>{'II'}</MenuItem>,
    <MenuItem key={2} value={3}>{'III'}</MenuItem>,
    <MenuItem key={3} value={4}>{'IV'}</MenuItem>,
    <MenuItem key={4} value={5}>{'V'}</MenuItem>,
  ]

  const startMenuItems = [
    <MenuItem key={0} value={1}>{'A'}</MenuItem>,
    <MenuItem key={1} value={2}>{'B'}</MenuItem>,
    <MenuItem key={2} value={3}>{'C'}</MenuItem>,
    <MenuItem key={3} value={4}>{'D'}</MenuItem>,
    <MenuItem key={4} value={5}>{'E'}</MenuItem>,
    <MenuItem key={5} value={6}>{'F'}</MenuItem>,
    <MenuItem key={6} value={7}>{'G'}</MenuItem>,
    <MenuItem key={7} value={8}>{'H'}</MenuItem>,
    <MenuItem key={8} value={9}>{'I'}</MenuItem>,
    <MenuItem key={9} value={10}>{'J'}</MenuItem>,
    <MenuItem key={10} value={11}>{'K'}</MenuItem>,
    <MenuItem key={11} value={12}>{'L'}</MenuItem>,
    <MenuItem key={12} value={13}>{'M'}</MenuItem>,
    <MenuItem key={13} value={14}>{'N'}</MenuItem>,
    <MenuItem key={14} value={15}>{'O'}</MenuItem>,
    <MenuItem key={15} value={16}>{'P'}</MenuItem>,
    <MenuItem key={16} value={17}>{'Q'}</MenuItem>,
    <MenuItem key={17} value={18}>{'R'}</MenuItem>,
    <MenuItem key={18} value={19}>{'S'}</MenuItem>,
    <MenuItem key={19} value={20}>{'T'}</MenuItem>,
    <MenuItem key={20} value={21}>{'U'}</MenuItem>,
    <MenuItem key={21} value={22}>{'V'}</MenuItem>,
    <MenuItem key={22} value={23}>{'W'}</MenuItem>,
    <MenuItem key={23} value={24}>{'X'}</MenuItem>,
    <MenuItem key={24} value={25}>{'Y'}</MenuItem>,
    <MenuItem key={25} value={26}>{'Z'}</MenuItem>,
  ]

  return(
    <div className={classes.root}>
      <InputLabel>{'Rotor I'}</InputLabel>
      <Select 
        className={classes.select} 
        value={props.choice1}
        onChange={event=>props.onChoiceChange('menu1',event.target.value)}
      >
        {rotorMenuItems}
      </Select>
      <InputLabel>{'Rotor II'}</InputLabel>
      <Select 
        className={classes.select} 
        value={props.choice2}
        onChange={event=>props.onChoiceChange('menu2',event.target.value)}
      >
        {rotorMenuItems}
      </Select>
      <InputLabel>{'Rotor III'}</InputLabel>
      <Select 
        className={classes.select} 
        value={props.choice3}
        onChange={event=>props.onChoiceChange('menu3',event.target.value)}
      >
        {rotorMenuItems}
      </Select>
      <br/>
      <InputLabel>{'Start I'}</InputLabel>
      <Select 
        className={classes.select} 
        value={props.start1}
        onChange={event=>props.onChoiceChange('start1',event.target.value)}
      >
        {startMenuItems}
      </Select>
      <InputLabel>{'Start II'}</InputLabel>
      <Select 
        className={classes.select} 
        value={props.start2}
        onChange={event=>props.onChoiceChange('start2',event.target.value)}
      >
        {startMenuItems}
      </Select>
      <InputLabel>{'Start III'}</InputLabel>
      <Select 
        className={classes.select} 
        value={props.start3}
        onChange={event=>props.onChoiceChange('start3',event.target.value)}
      >
        {startMenuItems}
      </Select>
    </div>
  )
}

export default withStyles(style)(RotorMenu);