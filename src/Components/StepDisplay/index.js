import React, {useState, useEffect} from 'react';
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

  const updateStepValues = () => {
    let values = {text: stepText, timer: stepTimer};
    editStep(index, values);
  }

  useEffect(() => {
    updateStepValues();
  }, [stepText, stepTimer])

  // TODO update currentStep properly after deletion re-orders the array
  // psudeo
  // 1) track state when new step added
  // 2) track state when step deleted (from above)
  // keep a separate count that reflects the 'true' numbers (skips deleted step)

  const [currentStep, setCurrentStep] = useState(index+1);
  const [checked, setChecked] = useState(false);

  const TimerOption = () => {

    const TimerField = () => {

      return(
        <div style={styles.formControlRoot}>
            <InputLabel
              style={styles.inputLabel}
              id="demo-simple-select-label">
                Set Timer Amount
              </InputLabel>
            <Select
              labelId="timerdigit"
              id="timerdigit"
              value={stepTimer}
              onChange={e => {
                setStepTimer(e.target.value)
              }}
              fullWidth={true}
            >
              <MenuItem value={60}>1 Minute</MenuItem>
              <MenuItem value={120}>2 Minutes</MenuItem>
              <MenuItem value={180}>3 Minutes</MenuItem>
              <MenuItem value={300}>5 Minutes</MenuItem>
              <MenuItem value={600}>10 Minutes</MenuItem>
              <MenuItem value={900}>15 Minutes</MenuItem>
              <MenuItem value={1200}>20 Minutes</MenuItem>
              <MenuItem value={1500}>25 Minutes</MenuItem>
              <MenuItem value={1800}>30 Minutes</MenuItem>
            </Select>

  
        <Button onClick={() => {
           setChecked(false)
           setStepTimer(0);
        }} 
        style={styles.deleteButton}>
            <CloseIcon />
          </Button>
        </div>
      )
    }

    // Conditional render
    return checked ? <TimerField /> : <Button style={styles.addTimer} onClick={() => setChecked(true)}>Add timer </Button>;
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
    <>
    <div style={styles.step}>
      <TextField
        label={`Step ${currentStep}`}
        error={stepError}
        helperText={stepError || ""}
        placeholder={stepName()}
        fullWidth={true}
        defaultValue={step.text}
        onChange={e => {
          checkStepLength(e.target.value.length);
          setStepText(e.target.value)
        }}
        onBlur={e => checkStepLength(e.target.value.length)}
         />
         <TimerOption />
    </div>

    <Button style={styles.deleteStepButton} color="secondary" variant="outlined" onClick={() => removeStep(index)}>
        Delete Step
        <DeleteForeverSharpIcon  />
    </Button>
    </>
  )
}

export default withStyles(styles)(StepDisplay);