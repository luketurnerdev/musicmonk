import React, {useState} from 'react';
import {Button, Typography} from '@material-ui/core';
import styles from "./styles";
import { withStyles } from '@material-ui/styles';
import RadioButtonUncheckedSharpIcon from '@material-ui/icons/RadioButtonUncheckedSharp';
import CheckCircleOutlineSharpIcon from '@material-ui/icons/CheckCircleOutlineSharp';

const DeleteRoutine = props => {
  const {deleteRoutine, routine, classes, closeDeleteMode} = props; 

  // const delete = id => {
  //   // Feed in deletion method from props
  //   closePlayMode();
  // }
  
  return (
    <div className={classes.playModeContainer}>
      <h1>Really delete {routine.title} ?</h1>
      <Button variant="contained" className={classes.root} onClick={() => deleteRoutine(routine.id)}>Confirm</Button>
      <Button variant="contained" className={classes.root} onClick={() => closeDeleteMode()}>Cancel</Button>
    </div>
  )
}

export default withStyles(styles)(DeleteRoutine);