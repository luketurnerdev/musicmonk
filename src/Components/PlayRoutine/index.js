import React, {useState} from 'react';
import {Button, Box} from '@material-ui/core';
import styles from "./styles";
import { withStyles } from '@material-ui/styles';
import RadioButtonUncheckedSharpIcon from '@material-ui/icons/RadioButtonUncheckedSharp';
import CheckCircleOutlineSharpIcon from '@material-ui/icons/CheckCircleOutlineSharp';


const Step = props => {
  const {step, setCompletedSteps, classes} = props;
  const [complete, setComplete] = useState(false);

  const handleClick = id => {
    setComplete(!complete);
  }
  return (
    <div className={classes.step}>
      <h1>{step.text}</h1>
      
      {complete ? 
      <Button onClick ={() => handleClick()}> <CheckCircleOutlineSharpIcon /> </Button>
      :
      <Button onClick ={() => handleClick()}> <RadioButtonUncheckedSharpIcon /></Button>
      }
    </div>
  )
}
const PlayRoutine = props => {
  const {closePlayMode, routine, classes} = props;
  const [completedSteps, setCompletedSteps] = useState([]);

  const MapSteps = () => {
    return (
      <>
        {routine.steps.map(step => {
          return (
              <Step
                step={step}
                setCompletedSteps={setCompletedSteps}
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
      <Button variant="contained" onClick={() => closePlayMode()}>Close</Button>
    </div>
  )
}

export default withStyles(styles)(PlayRoutine);