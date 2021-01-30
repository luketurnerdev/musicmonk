import React, {useState} from 'react';
import {Button, Typography, Modal} from '@material-ui/core';
import styles from "./styles";
import { withStyles } from '@material-ui/styles';
import RadioButtonUncheckedSharpIcon from '@material-ui/icons/RadioButtonUncheckedSharp';
import CheckCircleOutlineSharpIcon from '@material-ui/icons/CheckCircleOutlineSharp';

const Step = props => {
  const {step, classes} = props;
  const [stepComplete, setStepComplete] = useState(false);

  const completeStep = () => {
    setStepComplete(!stepComplete);
  }
  return (
    <div className={classes.stepContainer}>
      <Typography variant="subtitle2">{step.text}</Typography >
      
      {stepComplete ? 
      <Button onClick ={() => completeStep()}> <CheckCircleOutlineSharpIcon /> </Button>
      :
      <Button onClick ={() => completeStep()}> <RadioButtonUncheckedSharpIcon /></Button>
      }
    </div>
  )
}

const PlayRoutine = props => {
  // initial state: on step 1 of X
  // track current page
  //  current page is NOT first page? show left arrow
  //  current page < final page? show right arrow
  //  current page === last page? show 'mark as complete'
  const {routine, classes, open, setPlayModeStatus} = props; 
  const [currentPage, setCurrentPage] = useState(0);

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
      if (currentPage < routine.steps.length-1 ) {
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
     return <Button variant="contained" onClick={() => goForward()}>Forward</Button>
    }
    const BackButton = () => {
    return <Button variant="contained" onClick={() => goBackward()}>Backward</Button>
   }
  
  return (
    <Modal
        open={open}
      >
    <div className={classes.playModeContainer}>
      {routine && <h1>{routine.title}</h1>}
      {routine && <h1>page index: {currentPage} Text: {routine.steps[currentPage].text}</h1>}
      <MapSteps />
      <Button variant="contained" className={classes.root} onClick={() => completeRoutine(routine.id)}>Mark as complete</Button>
      <Button variant="contained" className={classes.root} onClick={() => setPlayModeStatus(false, null)}>Close</Button>

      
      {routine && currentPage < routine.steps.length-1 && <ForwardButton />}
      {currentPage > 0 && <BackButton />}
      
    </div>
  </Modal>
  )
}

export default withStyles(styles)(PlayRoutine);