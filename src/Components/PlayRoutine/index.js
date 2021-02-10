import React, {useState} from 'react';
import {Button, Typography, Modal, Grid, Paper} from '@material-ui/core';
import styles from "./styles";
import { withStyles } from '@material-ui/styles';
import ArrowForwardIcon from '@material-ui/icons/ArrowForward';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import Timer from "./../Timer";
import CheckIcon from '@material-ui/icons/Check';
const PlayRoutine = props => {

  // initial state: on step 1 of X
  // track current page
  //  current page is NOT first page? show left arrow
  //  current page < final page? show right arrow
  //  current page === last page? show 'mark as complete'
  const {routine, classes, open, setPlayModeStatus} = props; 
  const [currentPage, setCurrentPage] = useState(0);
  const lastStepIndex = routine ? routine.steps.length-1 : null;

  const Step = props => {
    const {step, classes, routine} = props;
    const [stepComplete, setStepComplete] = useState(false);
    // routine prop may now contain timer as an integer of seconds.
    // e.g., step.timer should have a value of 0 (no timer) or the amount of seconds (eg 60)
    const completeStep = () => {
      setStepComplete(!stepComplete);
    }

    const time = new Date();
    time.setSeconds(time.getSeconds() + (step.timer || 60)); 

    return (
      <>
      <Grid container className={classes.stepContainer} alignContent="center" alignItems="center">
        <Grid item xs={4} className={classes.gridItem}>
         {currentPage > 0 && <BackButton />}       
        </Grid>
        <Grid item xs={4} className={classes.gridItem}>
          <Paper className={classes.title}>
            <Typography variant="subtitle2">{step.text}</Typography >
          </Paper>
        </Grid>
        <Grid item xs={4} className={classes.gridItem}>
          {currentPage < lastStepIndex && <ForwardButton />}
        </Grid>
          {step.timer && step.timer !== 0 && <Timer expiryTimestamp={time} timeLimit={step.timer || 30}/>}
        <div className={classes.buttons}>
            <Button variant="contained" color="primary" className={classes.button} onClick={() => goForward()}>Skip Step</Button>
            <Button variant="contained" style={{backgroundColor: 'red'}} className={classes.button} onClick={() => setPlayModeStatus(false, null)}>Close</Button>
        </div>
      </Grid>

    </>
    )
  }

  const completeRoutine = id => {
    // TODO contribute to some kind of completion tracking here later
    setPlayModeStatus(false, null);
  }

  const goForward = () => {
      if (currentPage < lastStepIndex ) {
       return setCurrentPage(currentPage+1)
      }
      else {
        console.log('tried to go forwards from last page')
      }
    }

  const goBackward = () => {
      return setCurrentPage(currentPage-1)
   }
    
   const ForwardButton = () => {
     return <Button variant="contained" onClick={() => goForward()}><ArrowForwardIcon /></Button>
    }
    const BackButton = () => {
    return <Button variant="contained" onClick={() => goBackward()}><ArrowBackIcon /></Button>
   }
  
  return (
    <Modal
        open={open}
      >
    <div className={classes.playModeContainer}>
      <Typography variant="subtitle" style={{margin:'5px'}}>
        {routine.title}
      </Typography>
      
        <Step
          key={routine.steps[currentPage]}
          step={routine.steps[currentPage]}
          classes={classes}
        /> 

      
      {currentPage === lastStepIndex && 
      <div className={classes.completeContainer}>
          <Button 
            variant="contained" 
            className={classes.completeButton} 
            onClick={() => completeRoutine(routine.id)}
          >Mark as complete <CheckIcon />
        </Button>
      </div>
      }
    </div>
      
  </Modal>
  )
}

export default withStyles(styles)(PlayRoutine);