import React, {useState} from 'react';
import {Button, Typography, Modal, Grid} from '@material-ui/core';
import styles from "./styles";
import { withStyles } from '@material-ui/styles';
import ArrowForwardIcon from '@material-ui/icons/ArrowForward';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import Timer from "./../Timer";
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
    // TODO replace with time prop
    time.setSeconds(time.getSeconds() + 60); 

    return (
      <>
      <Grid container className={classes.stepContainer} alignContent="center" alignItems="center">
        <Grid item xs={4} className={classes.gridItem}>
         {currentPage > 0 && <BackButton />}       
        </Grid>
        <Grid item xs={4} className={classes.gridItem}>
          <Typography variant="subtitle2">{step.text}</Typography >
        </Grid>
        <Grid item xs={4} className={classes.gridItem}>
          {currentPage < lastStepIndex && <ForwardButton />}
        </Grid>
          <Timer expiryTimestamp={time} timeLimit={60}/>
      </Grid>

      </>

    )
  }

  const completeRoutine = id => {
    // TODO contribute to some kind of completion tracking here later
    setPlayModeStatus(false, null);
  }
  const MapSteps = () => {
    return (
      <>
        {routine.steps.map(step => {
          return step && (
              <Step
                key={step.id}
                step={step}
                classes={classes}
              />  
          ) 
        })}
      </>
    )
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
      <h1>{routine.title}</h1>
      <Step
        key={routine.steps[currentPage]}
        step={routine.steps[currentPage]}
        classes={classes}
      />  
      
      {currentPage === lastStepIndex && 
        <Button variant="contained" className={classes.root} onClick={() => completeRoutine(routine.id)}>Mark as complete</Button>
      }
      <Button variant="contained" onClick={() => goForward()}>Skip Step</Button>
      <Button variant="contained" className={classes.root} onClick={() => setPlayModeStatus(false, null)}>Close</Button>
    </div>
  </Modal>
  )
}

export default withStyles(styles)(PlayRoutine);