import React, {useState} from 'react';
import {Button, Typography} from '@material-ui/core';
import styles from "./styles";
import { withStyles } from '@material-ui/styles';
import RadioButtonUncheckedSharpIcon from '@material-ui/icons/RadioButtonUncheckedSharp';
import CheckCircleOutlineSharpIcon from '@material-ui/icons/CheckCircleOutlineSharp';

const DeleteRoutine = props => {
  const {deleteRoutine, routine, classes} = props; 

  // const delete = id => {
  //   // Feed in deletion method from props
  //   closePlayMode();
  // }
  
  return (
    <div className={classes.playModeContainer}>
      <h1>{routine.title}</h1>
      {/* <MapSteps /> */}
      {/* <Button variant="contained" className={classes.root} onClick={() => completeRoutine(routine.id)}>Mark as complete</Button> */}
      {/* <Button variant="contained" className={classes.root} onClick={() => closePlayMode()}>Close</Button> */}
    </div>
  )
}

export default withStyles(styles)(DeleteRoutine);