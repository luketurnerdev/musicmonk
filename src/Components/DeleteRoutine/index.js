import React from 'react';
import {Button, Modal, Grid, Paper} from '@material-ui/core';
import styles from "./styles";
import { withStyles } from '@material-ui/styles';

const DeleteRoutine = props => {
  const {deleteRoutine, routine, classes, setDeleteModeStatus, open, deleting} = props; 
  return (
    <Modal
    open={open}
  >
    <Paper variant="elevation" className={classes.deleteModal}>

    </Paper>
  </Modal>
  )
}

export default withStyles(styles)(DeleteRoutine);