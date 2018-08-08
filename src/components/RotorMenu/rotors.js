import React from 'react';
import StartMenuItems from './startOptions.js';
import RotorMenuItems from './rotorOptions.js';
import ReflektorMenuItems from './reflektorOptions.js';

import { withStyles, Grid, InputLabel, Select } from '@material-ui/core';
import style from './style.js';

function RotorMenu({ classes, ...props }) {
  return(
    <Grid container>
      <Grid item xs={4}>
        <InputLabel>{'Rotor 1'}</InputLabel>
        <Select
          className={classes.select}
          name="menu1"
          value={props.choice1}
          onChange={event=>props.onChoiceChange(event.target.name,event.target.value)}
        >
          {RotorMenuItems}
        </Select>
      </Grid>
      <Grid item xs={4}>
        <InputLabel>{'Rotor 2'}</InputLabel>
        <Select
          className={classes.select}
          name="menu2"
          value={props.choice2}
          onChange={event=>props.onChoiceChange(event.target.name,event.target.value)}
        >
          {RotorMenuItems}
        </Select>
      </Grid>
      <Grid item xs={4}>
        <InputLabel>{'Rotor 3'}</InputLabel>
        <Select
          className={classes.select}
          name="menu3"
          value={props.choice3}
          onChange={event=>props.onChoiceChange(event.target.name,event.target.value)}
        >
          {RotorMenuItems}
        </Select>
      </Grid>
      <br/>
      <Grid item xs={4}>
        <InputLabel>{'Start 1'}</InputLabel>
        <Select
          className={classes.select}
          name="start1"
          value={props.start1}
          onChange={event=>props.onChoiceChange(event.target.name,event.target.value)}
        >
          {StartMenuItems}
        </Select>
      </Grid>
      <Grid item xs={4}>
        <InputLabel>{'Start 2'}</InputLabel>
        <Select
          className={classes.select}
          name="start2"
          value={props.start2}
          onChange={event=>props.onChoiceChange(event.target.name,event.target.value)}
        >
          {StartMenuItems}
        </Select>
      </Grid>
      <Grid item xs={4}>
        <InputLabel>{'Start 3'}</InputLabel>
        <Select
          className={classes.select}
          name="start3"
          value={props.start3}
          onChange={event=>props.onChoiceChange(event.target.name,event.target.value)}
        >
          {StartMenuItems}
        </Select>
      </Grid>
      <Grid item xs={12}>
        <InputLabel>{'Reflektor'}</InputLabel>
        <Select
          className={classes.select}
          name="reflektor"
          value={props.reflektor}
          onChange={event=>props.onChoiceChange(event.target.name,event.target.value)}
        >
          {ReflektorMenuItems}
        </Select>
      </Grid>
    </Grid>
  )
}

export default withStyles(style)(RotorMenu);