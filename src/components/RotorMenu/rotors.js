import React from 'react';
import PropTypes from 'prop-types';

import { withStyles, Grid, InputLabel, Select } from '@material-ui/core';
import style from './style.js';

import StartOptions from './startOptions.js';
import RotorOptions from './rotorOptions.js';
import ReflektorOptions from './reflektorOptions.js';

function RotorMenu({ classes, ...props }) {
  const {rotorChoices,rotorStarts,reflektor} = props;
  const [choice1,choice2,choice3] = rotorChoices;
  const [start1,start2,start3] = rotorStarts;

  return(
    <div>
      <h2>Settings</h2>
      <Grid container>
        <Grid item xs={4}>
          <InputLabel>{'Rotor 1'}</InputLabel>
          <Select native
            className={classes.select}
            name="menu1"
            value={choice1}
            onChange={event=>props.onChoiceChange(event.target.name,event.target.value)}
          >
            {RotorOptions}
          </Select>
        </Grid>
        <Grid item xs={4}>
          <InputLabel>{'Rotor 2'}</InputLabel>
          <Select native
            className={classes.select}
            name="menu2"
            value={choice2}
            onChange={event=>props.onChoiceChange(event.target.name,event.target.value)}
          >
            {RotorOptions}
          </Select>
        </Grid>
        <Grid item xs={4}>
          <InputLabel>{'Rotor 3'}</InputLabel>
          <Select native
            className={classes.select}
            name="menu3"
            value={choice3}
            onChange={event=>props.onChoiceChange(event.target.name,event.target.value)}
          >
            {RotorOptions}
          </Select>
        </Grid>
        <br/>
        <Grid item xs={4}>
          <InputLabel>{'Start 1'}</InputLabel>
          <Select native
            className={classes.select}
            name="start1"
            value={start1}
            onChange={event=>props.onChoiceChange(event.target.name,event.target.value)}
          >
            {StartOptions}
          </Select>
        </Grid>
        <Grid item xs={4}>
          <InputLabel>{'Start 2'}</InputLabel>
          <Select native
            className={classes.select}
            name="start2"
            value={start2}
            onChange={event=>props.onChoiceChange(event.target.name,event.target.value)}
          >
            {StartOptions}
          </Select>
        </Grid>
        <Grid item xs={4}>
          <InputLabel>{'Start 3'}</InputLabel>
          <Select native
            className={classes.select}
            name="start3"
            value={start3}
            onChange={event=>props.onChoiceChange(event.target.name,event.target.value)}
          >
            {StartOptions}
          </Select>
        </Grid>
        <Grid item xs={12}>
          <InputLabel>{'Reflektor'}</InputLabel>
          <Select native
            className={classes.reflektor}
            name="reflektor"
            value={reflektor}
            onChange={event=>props.onChoiceChange(event.target.name,event.target.value)}
          >
            {ReflektorOptions}
          </Select>
        </Grid>
      </Grid>
    </div>
  )
}

RotorMenu.propTypes = {
  rotorChoices: PropTypes.arrayOf(PropTypes.number).isRequired,
  rotorStarts: PropTypes.arrayOf(PropTypes.number).isRequired,
  reflektor: PropTypes.string.isRequired,
  onChoiceChange: PropTypes.func.isRequired,
}

export default withStyles(style)(RotorMenu);