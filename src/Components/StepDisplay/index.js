import React, {useState} from 'react';
import {Button, TextField} from '@material-ui/core';
import DeleteForeverSharpIcon from '@material-ui/icons/DeleteForeverSharp'
import { withStyles } from '@material-ui/styles';
import styles from "./styles";

const StepDisplay = props => {
  const {step, index, removeStep, editStep, setEmptySteps} = props;
  const [stepError, setStepError] = useState('');

  // TODO update currentStep properly after deletion re-orders the array
  // psudeo
  // 1) track state when new step added
  // 2) track state when step deleted (from above)
  // keep a separate count that reflects the 'true' numbers (skips deleted step)
  const [currentStep, setCurrentStep] = useState(index+1);


  const checkStepLength = length => {
    if (length === 0) {
      setStepError('Step cannot be empty.');
      setEmptySteps(true);
    } else {
      setStepError('');
      setEmptySteps(false);
    }
    return null;
  }

  const stepName = () => {
    // Only render example on first step
    const examples = 
    [
      'E.g., Practice E Minor Scale',
      'E.g., Stretch for 5 minutes',
      'E.g., Do a backflip',
      'E.g., Practice a song',
      'E.g., Practice naming notes on the fretboard for 5 minutes'
    ];
    return index === 0 ? examples[Math.floor(Math.random() * examples.length)] : "";
  }
  return (
    <div style={styles.step}>
      <TextField
        label={`Step ${currentStep}`}
        error={stepError}
        helperText={stepError || ""}
        placeholder={stepName()}
        autoFocus={true}
        fullWidth={true}
        defaultValue={step.text}
        onChange={e => {
          editStep(index, e.target.value)
          checkStepLength(e.target.value.length)
        }}
        onBlur={e => checkStepLength(e.target.value.length)}
         />
      <Button style={styles.button} color="primary" onClick={() => removeStep(index)}>
        <DeleteForeverSharpIcon style={styles.deleteStepButton} />
      </Button>
    </div>
  )
}

export default withStyles(styles)(StepDisplay);