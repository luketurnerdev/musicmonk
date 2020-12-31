import React, {useState} from 'react';
import {Button, Modal} from '@material-ui/core';
import styles from "./styles";
import { withStyles } from '@material-ui/styles';

const DeleteRoutine = props => {
  const {deleteRoutine, routine, classes, closeDeleteMode, open} = props; 
  return (
    <Modal
    open={open}
  >
    <div className={classes.playModeContainer}>
      {routine && <h1>Really delete {routine.title} ?</h1>}
      <Button variant="contained" className={classes.root} onClick={() => deleteRoutine(routine.id)}>Confirm</Button>
      <Button variant="contained" className={classes.root} onClick={() => closeDeleteMode()}>Cancel</Button>
    </div>

  </Modal>
  )
}

export default withStyles(styles)(DeleteRoutine);