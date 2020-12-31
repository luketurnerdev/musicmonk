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
  const {closePlayMode, routine, classes, open, setPlayModeStatus} = props; 

  const completeRoutine = id => {
    console.log('completed', id)
    closePlayMode();
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
  
  return (
    <Modal
        open={open}
      >
    <div className={classes.playModeContainer}>
      {routine && <h1>{routine.title}</h1>}
      <MapSteps />
      <Button variant="contained" className={classes.root} onClick={() => completeRoutine(routine.id)}>Mark as complete</Button>
      <Button variant="contained" className={classes.root} onClick={() => setPlayModeStatus(false, null)}>Close</Button>
    </div>
  </Modal>
  )
}

export default withStyles(styles)(PlayRoutine);