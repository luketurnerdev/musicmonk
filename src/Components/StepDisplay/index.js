import React, {useState, useEffect} from 'react';
import {Button, TextField, Select, InputLabel, MenuItem, FormControl} from '@material-ui/core';
import DeleteIcon from '@material-ui/icons/Delete';
import { withStyles } from '@material-ui/styles';
import styles from "./styles";
import CloseIcon from '@material-ui/icons/Close';
import useBreakpoint from "./../../hooks/useBreakpoint";


const StepDisplay = props => {
  const mobile = useBreakpoint() === 'sm' ? true : false;
  const {step, index, removeStep, editStep, setEmptySteps, classes} = props;
  const [stepError, setStepError] = useState('');
  const [stepText, setStepText] = useState(step.text || '')
  const [stepTimer, setStepTimer] = useState(step.timer || 0);
  const [currentStep, setCurrentStep] = useState(index+1);
  const [checked, setChecked] = useState(true);

  const updateStepValues = () => {
    let values = {text: stepText, timer: stepTimer};
    editStep(index, values);
  }

  useEffect(() => {
    updateStepValues();
  }, [stepText, stepTimer, updateStepValues])

  // TODO update currentStep properly after deletion re-orders the array
  // psudeo
  // 1) track state when new step added
  // 2) track state when step deleted (from above)
  // keep a separate count that reflects the 'true' numbers (skips deleted step)


  const TimerOption = () => {

    const TimerField = () => {

      return(
        <div>
          <FormControl className={classes.formControlRoot}>
            <InputLabel className={classes.timerInputLabel}>Timer Amount</InputLabel>
            <Select
              className={classes.timerSelect}
              labelId="Timer amount"
              id="timerdigit"
              value={stepTimer !=0 ? stepTimer : "Timer Amount"}
              onChange={e => {
                setStepTimer(e.target.value)
              }}
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
        className={classes.deleteButton}>
            <CloseIcon />
          </Button>
          </FormControl>
        </div>
      )
    }

    // Conditional render
    return checked ? <TimerField /> : <Button className={classes.addTimer} onClick={() => setChecked(true)}>Add timer </Button>;
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
    <div className={mobile ? classes.stepMobile : classes.step}>
      <TextField
        InputLabelProps={{className:classes.textInputLabel}}
        InputProps={{className:classes.textInputLabel}}
        label={`Enter step text (required):`}
        error={stepError}
        helperText={stepError || ""}
        placeholder={stepName()}
        fullWidth={!mobile}
        defaultValue={step.text}
        onChange={e => {
          checkStepLength(e.target.value.length);
          setStepText(e.target.value)
        }}
        onBlur={e => checkStepLength(e.target.value.length)}
         />
         <TimerOption />
    </div>

    <Button className={classes.deleteStepButton} color="secondary" variant="contained" onClick={() => removeStep(index)}>
        Delete Step
        <DeleteIcon  />
    </Button>
    </>
  )
}

export default withStyles(styles)(StepDisplay);