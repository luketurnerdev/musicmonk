import React, {useState} from 'react';
import {Button, TextField} from '@material-ui/core';
import DeleteForeverSharpIcon from '@material-ui/icons/DeleteForeverSharp'
import { withStyles } from '@material-ui/styles';
import styles from "./styles";

const StepDisplay = props => {
  const {step, index, classes, removeStep, editStep} = props;
  const [stepError, setStepError] = useState('');
  const handleBlur = text => {
    // if there is no text, set the error message
    console.log(text.length);
    if (text.length === 0) {
      setStepError('Step cannot be empty.');
    } else {
      setStepError('');
    }
    return null;
  }
  return (
    <div className={classes.step}>
    {console.log(stepError)}
      <TextField
        error={stepError}
        helperText={stepError || ""}
        defaultValue={step.text}
        onChange={e => editStep(index, e.target.value)}
        onBlur={() => handleBlur(step.text)}
         />
      <Button className={classes.button} onClick={() => removeStep(index)}>
        <DeleteForeverSharpIcon />
      </Button>
    </div>
  )
}

export default withStyles(styles)(StepDisplay);