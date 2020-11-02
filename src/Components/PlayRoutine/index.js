import React, {useState} from 'react';
import {Button, Typography} from '@material-ui/core';
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
  const {closePlayMode, routine, classes} = props; 
  const [routineComplete, setRoutineComplete] = useState(false);

  const completeRoutine = id => {
    setRoutineComplete(true);
  }
  const MapSteps = () => {
    return (
      <>
        {routine.steps.map(step => {
          return (
              <Step
                step={step}
                classes={classes}
              />  
          ) 
        })}
      </>
    )
  }
  
  return (
    <div className={classes.playModeContainer}>
      <h1>{routine.title}</h1>
      <MapSteps />
      <Button variant="contained" className={classes.root} onClick={() => completeRoutine(routine.id)}>Mark as complete</Button>
      <Button variant="contained" className={classes.root} onClick={() => closePlayMode()}>Close</Button>
    </div>
  )
}

export default withStyles(styles)(PlayRoutine);