import React from 'react';
import startMenuItems from './startOptions.js';
import rotorMenuItems from './rotorOptions.js';

import { withStyles, Grid, InputLabel, Select } from '@material-ui/core';
import style from './style.js';

function RotorMenu({ classes, ...props }) {
  return(
    <Grid className={classes.root} container spacing={24}>
      <Grid item xs={4}>
        <InputLabel>{'Rotor I'}</InputLabel>
        <Select
          className={classes.select}
          name="menu1"
          value={props.choice1}
          onChange={event=>props.onChoiceChange(event.target.name,event.target.value)}
        >
          {rotorMenuItems}
        </Select>
      </Grid>
      <Grid item xs={4}>
        <InputLabel>{'Rotor II'}</InputLabel>
        <Select
          className={classes.select}
          name="menu2"
          value={props.choice2}
          onChange={event=>props.onChoiceChange(event.target.name,event.target.value)}
        >
          {rotorMenuItems}
        </Select>
      </Grid>
      <Grid item xs={4}>
        <InputLabel>{'Rotor III'}</InputLabel>
        <Select
          className={classes.select}
          name="menu3"
          value={props.choice3}
          onChange={event=>props.onChoiceChange(event.target.name,event.target.value)}
        >
          {rotorMenuItems}
        </Select>
      </Grid>
      <br/>
      <Grid item xs={4}>
        <InputLabel>{'Start I'}</InputLabel>
        <Select
          className={classes.select}
          name="start1"
          value={props.start1}
          onChange={event=>props.onChoiceChange(event.target.name,event.target.value)}
        >
          {startMenuItems}
        </Select>
      </Grid>
      <Grid item xs={4}>
        <InputLabel>{'Start II'}</InputLabel>
        <Select
          className={classes.select}
          name="start2"
          value={props.start2}
          onChange={event=>props.onChoiceChange(event.target.name,event.target.value)}
        >
          {startMenuItems}
        </Select>
      </Grid>
      <Grid item xs={4}>
        <InputLabel>{'Start III'}</InputLabel>
        <Select
          className={classes.select}
          name="start3"
          value={props.start3}
          onChange={event=>props.onChoiceChange(event.target.name,event.target.value)}
        >
          {startMenuItems}
        </Select>
      </Grid>
    </Grid>
  )
}

export default withStyles(style)(RotorMenu);