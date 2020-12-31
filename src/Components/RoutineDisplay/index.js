import React from 'react';
import {Button, Modal, Grid} from '@material-ui/core/'
import PlayCircleOutlineSharpIcon from '@material-ui/icons/PlayCircleOutlineSharp';
import DeleteForeverSharpIcon from '@material-ui/icons/DeleteForeverSharp';
import EditOutlinedIcon from '@material-ui/icons/EditOutlined';

const RoutineDisplay = props => {
  const {routine, classes, setDeleteModeStatus, setPlayModeStatus, openRoutineForm, } = props;
  return (
  <div key={routine.id} className={classes.routineDisplay}>
    <Grid container >
      <Grid item xs={6} className={classes.gridItem}>
        <h1>{routine.title}</h1>
      </Grid>
      <Grid item xs={2} className={classes.gridItem}>
        <Button
        variant="contained"
        onClick={() => setPlayModeStatus(true, routine)}
        className={classes.startButton}
        >
          <PlayCircleOutlineSharpIcon />
      </Button>
    </Grid>
      <Grid item xs={2} className={classes.gridItem}>
          <Button
          variant="contained"
          onClick={() => openRoutineForm(routine)}
          className={classes.editButton}
        >
            <EditOutlinedIcon />
        </Button>
      </Grid>
      <Grid item xs={2} className={classes.gridItem}>
          <Button
          variant="contained"
          onClick={() => setDeleteModeStatus(true, routine)}
          className={classes.editButton}
        >
            <DeleteForeverSharpIcon />
        </Button>
      </Grid>
    </Grid>
  </div>
  )
}

export default RoutineDisplay;