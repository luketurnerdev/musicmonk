import React, {useState, useEffect} from 'react';
import {Button, Grid} from '@material-ui/core';
import styles from "./styles";
import {withStyles} from "@material-ui/styles";
import ArrowForwardIcon from '@material-ui/icons/ArrowForward';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import PlayCircleOutlineIcon from '@material-ui/icons/PlayCircleOutline';
import CreateIcon from '@material-ui/icons/Create';
import DeleteIcon from '@material-ui/icons/Delete';


const RoutineScroll = props => {
  const {routines, setPlayModeStatus, setDeleteModeStatus, setFormModeStatus, classes} = props;
  const [currentRoutine, setCurrentRoutine] = useState(0);


  useEffect(() => {
    routines && setCurrentRoutine(routines.length-1);
  }, [])
  const goForward = () => {
    currentRoutine === routines.length-1
      ? setCurrentRoutine(0)
      : setCurrentRoutine(currentRoutine+1)
  }
  const goBack = () => {
    currentRoutine === 0 
      ? setCurrentRoutine(routines.length-1)
      : setCurrentRoutine(currentRoutine-1)
  }

  const MiddleSection = () =>
    <Grid container 
      className={classes.middleGridInner}
    >
      <Grid item xs={4} className={classes.middleGridItems}>
        <div className={classes.routineTitle}>
          <h3>{routines[currentRoutine].title}</h3>
        </div>
      </Grid>
      <Grid item xs={4} className={classes.middleGridItems}>
        <Button onClick={() => setPlayModeStatus(true, routines[currentRoutine])}>
          <PlayCircleOutlineIcon className={classes.playIcon} />
        </Button>
      </Grid>
      <Grid item xs={4} className={classes.middleGridItems}>
      <Button onClick={() => setFormModeStatus(true, routines[currentRoutine])}>
        <CreateIcon style={{border:'1px solid', borderRadius: '10px', fontSize: '50px'}}  />
      </Button>
      <Button onClick={() => setDeleteModeStatus(true, routines[currentRoutine])}>
        <DeleteIcon style={{border:'1px solid', borderRadius: '10px', fontSize: '50px'}} />
      </Button>
      </Grid>
    </Grid>

  return (
    <Grid container className={classes.scrollContainer}>
      <Grid item xs={2} className={classes.smallOuterGrids}>
        <Button onClick={() => goBack()}><ArrowBackIcon /></Button>
      </Grid>
      <Grid item xs={8} className={classes.middleGrid} >
        <MiddleSection />
      </Grid>
      <Grid item xs={2} className={classes.smallOuterGrids}>
        <Button onClick={() => goForward()}><ArrowForwardIcon /></Button>
      </Grid>
    </Grid> 
  )
}

export default withStyles(styles)(RoutineScroll);

// Goal 1: Render a component
// that displays the text of the first routine 
//in the array, with a play button, delete and 
//edit button (they dont have to work yet

// Goal 2: implement buttons to scroll left and right,
// making sure that we can go <0 and > length to reset 
// a) implement state for current routine
// b) scroll left and right and alter array index as needed
// c) implement useEffect to select last elemeny by default on load

// Goal 3: get modals working


