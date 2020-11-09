import React, {useState} from 'react';
import {Button, TextField} from '@material-ui/core';
import DeleteForeverSharpIcon from '@material-ui/icons/DeleteForeverSharp'
import { withStyles } from '@material-ui/styles';
import styles from "./styles";

const StepDisplay = props => {
  const {step, index, classes, removeStep, editStep} = props;
  const [stepError, setStepError] = useState('');

  const checkTextLength = length => {
    if (length === 0) {
      setStepError('Step cannot be empty.');
    } else {
      setStepError('');
    }
    return null;
  }
  const handleChange = e => {
    // perform check here for exceeding 0 chars
    checkTextLength(e.target.value.length);
    editStep(index, e.target.value);
  }
  const handleBlur = text => {
    // if there is no text, set the error message
    checkTextLength(text.length);
  }
  return (
    <div style={styles.step}>
      <TextField
        error={stepError}
        helperText={stepError || ""}
        defaultValue={step.text}
        onChange={e => handleChange(e)}
        onBlur={() => handleBlur(step.text)}
         />
      <Button style={styles.button} onClick={() => removeStep(index)}>
        <DeleteForeverSharpIcon style={styles.deleteStepButton} />
      </Button>
    </div>
  )
}

export default withStyles(styles)(StepDisplay);