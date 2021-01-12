import React from 'react';
import {Button, Modal, Grid} from '@material-ui/core';
import styles from "./styles";
import { withStyles } from '@material-ui/styles';

const DeleteRoutine = props => {
  const {deleteRoutine, routine, classes, setDeleteModeStatus, open, deleting} = props; 
  return (
    <Modal
    open={open}
  >
      <Grid container direction="column" className={classes.deleteModal}>
        <Grid item xs={8} className={classes.title}>
          {routine && <h1>Really delete {routine.title} ?</h1>}
        </Grid>
        <Grid item xs={4} className={classes.buttons}>
          <Button variant="contained" onClick={() => deleteRoutine(routine._id)}>
            {deleting? "Deleting..." : "Confirm"}
          </Button>
        <Button variant="contained" onClick={() => setDeleteModeStatus(false, null)}>Cancel</Button>
        </Grid>
      </Grid>
  </Modal>
  )
}

export default withStyles(styles)(DeleteRoutine);