import React, {useState} from 'react';
import {Button, TextField, Select, InputLabel, FormControl, MenuItem} from '@material-ui/core';
import DeleteForeverSharpIcon from '@material-ui/icons/DeleteForeverSharp'
import { withStyles } from '@material-ui/styles';
import styles from "./styles";
import CloseIcon from '@material-ui/icons/Close';

const StepDisplay = props => {
  const {step, index, removeStep, editStep, setEmptySteps} = props;
  const [stepError, setStepError] = useState('');
  const [stepText, setStepText] = useState('')
  const [stepTimer, setStepTimer] = useState(0);

  // TODO update currentStep properly after deletion re-orders the array
  // psudeo
  // 1) track state when new step added
  // 2) track state when step deleted (from above)
  // keep a separate count that reflects the 'true' numbers (skips deleted step)

  const [currentStep, setCurrentStep] = useState(index+1);
  const [checked, setChecked] = useState(false);

  const TimerOption = () => {

    const [stepTimer, setStepTimer] = useState(0);

    const TimerField = () => {

      return(
        <div style={styles.timerOption}>
          <FormControl style={styles.formControlRoot}>
            <InputLabel
              style={styles.inputLabel}
             id="demo-simple-select-label">Set Timer Amount</InputLabel>
            <Select
              labelId="timerdigit"
              id="timerdigit"
              onChange={e => setStepTimer(e.target.value)}
              fullWidth={true}
            >
              <MenuItem value={10}>1 Minute</MenuItem>
              <MenuItem value={20}>2 Minutes</MenuItem>
              <MenuItem value={30}>3 Minutes</MenuItem>
              <MenuItem value={30}>5 Minutes</MenuItem>
              <MenuItem value={30}>10 Minutes</MenuItem>
              <MenuItem value={30}>15 Minutes</MenuItem>
              <MenuItem value={30}>20 Minutes</MenuItem>
              <MenuItem value={30}>25 Minutes</MenuItem>
              <MenuItem value={30}>30 Minutes</MenuItem>
            </Select>
      </FormControl>

  
        <Button onClick={() => setChecked(false)} style={styles.deleteButton}>
            <CloseIcon />
          </Button>
        </div>
      )
    }

    // Conditional render
    return checked ? <TimerField /> : <Button onClick={() => setChecked(true)}>Add timer </Button>;
  }

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
        fullWidth={true}
        defaultValue={step.text}
        onChange={e => {
          setStepText(e.target.value)
          // checkStepLength(e.target.value.length)
        }}
        // onBlur={e => checkStepLength(e.target.value.length)}
         />
         <TimerOption />
      <Button style={styles.button} color="primary" onClick={() => removeStep(index)}>
        <DeleteForeverSharpIcon style={styles.deleteStepButton} />
      </Button>
    </div>
  )
}

export default withStyles(styles)(StepDisplay);