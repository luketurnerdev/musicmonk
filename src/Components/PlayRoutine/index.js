import React, {useState} from 'react';
import {Button, Box} from '@material-ui/core';
import styles from "./styles";
import { withStyles } from '@material-ui/styles';

const Step = props => {
  const {step, setCompletedSteps, classes} = props;
  const [complete, setComplete] = useState(false);

  const handleClick = id => {
    setComplete(!complete);
    setCompletedSteps(prevList => {
      return prevList.concat(id);
    });
  }
  return (
    <div className>
      <h1>{step.text}</h1>
      <Button className={classes.root}>Hook</Button>
      {complete? <h5>Done</h5> : <h5>Not Done</h5> }
      <Button variant="contained" onClick ={ () => handleClick(step.id)}>Mark as complete</Button>
    </div>
  )
}
const PlayRoutine = props => {
  const {closePlayMode, routine, classes} = props;
  const [completedSteps, setCompletedSteps] = useState([]);

  const MapSteps = () => {
    return (
      <>
      <Button className={classes.root}>Hook</Button>
        {routine.steps.map(step => {
          return (
            <>
              <Step
                step={step}
                setCompletedSteps={setCompletedSteps}
                classes={classes}
              />  
            </>
          ) 
        })}
      </>
    )
  }
  
  return (
    <div className={classes.playModeContainer}>
      <h1>{routine.title}</h1>
      <MapSteps />
      <Button variant="contained" onClick={() => closePlayMode()}>Closesdfjknsdkfjnsdkjfndskjfns</Button>
    </div>
  )
}

export default withStyles(styles)(PlayRoutine);