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
      <div className={classes.innerItems}>
        <div className={classes.title}>
          {routine && <h5>Really delete {routine.title} ?</h5>}
        </div>
        <div className={classes.buttons}>
          <Button variant="contained" onClick={() => deleteRoutine(routine._id)} 
            style={deleting ? {backgroundColor: 'red'} : {backgroundColor: '#32a893'} }>
            <span>{deleting ? "Deleting..." : "Confirm"}</span>
          </Button>
          <Button variant="contained">Cancel</Button>
        </div>
      </div>
    </Paper>
  </Modal>
  )
}

export default withStyles(styles)(DeleteRoutine);