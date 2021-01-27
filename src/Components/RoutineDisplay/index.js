import React from 'react';
import {Button, Grid, Typography, Paper} from '@material-ui/core/'
import PlayCircleOutlineSharpIcon from '@material-ui/icons/PlayCircleOutlineSharp';
import DeleteForeverSharpIcon from '@material-ui/icons/DeleteForeverSharp';
import EditOutlinedIcon from '@material-ui/icons/EditOutlined';
import styles from './styles';
import { withStyles } from '@material-ui/styles';

const RoutineDisplay = props => {
  const {routine, classes, setDeleteModeStatus, setFormModeStatus, setPlayModeStatus} = props;
  
  const PlayBox = () => {
    return (
    <Paper variant="outlined" elevation={2} className={classes.playBox}>
      <Grid container>
       <Grid item xs={6} className={classes.playGridItem}>
        <Button
            variant="contained"
            color="primary"
            onClick={() => setPlayModeStatus(true, routine)}
            className={classes.startButton}
          >
              <PlayCircleOutlineSharpIcon className={classes.startButton}/>
          </Button>
       </Grid>
       <Grid item xs={6} className={classes.playGridItem}>
          <Typography variant="subtitle" className={classes.routineTitle}>
            {routine.title}
          </Typography>
       </Grid>
      </Grid>
    </Paper >
    )
  }
  return (
  <div key={routine.id} className={classes.routineDisplay}>
    <Grid container >
      <Grid item xs={8}>
          <PlayBox />
      </Grid>
      <Grid item xs={2} className={classes.gridItem}>
          <Button
          variant="contained"
          color="primary"
          onClick={() => setFormModeStatus(true, routine)}
          className={classes.editButton}
        >
            <EditOutlinedIcon />
        </Button>
      </Grid>
      <Grid item xs={2} className={classes.gridItem}>
          <Button
          variant="contained"
          color="secondary"
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

export default withStyles(styles)(RoutineDisplay);