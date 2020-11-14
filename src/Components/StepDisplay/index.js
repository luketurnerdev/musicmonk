import React, {useState} from 'react';
import {Button, TextField} from '@material-ui/core';
import DeleteForeverSharpIcon from '@material-ui/icons/DeleteForeverSharp'
import { withStyles } from '@material-ui/styles';
import styles from "./styles";

const StepDisplay = props => {
  const {step, index, classes, removeStep, editStep, setStepErrors} = props;
  const [stepErrorText, setStepErrorText] = useState('');
  console.log(props);


  const checkTextLength = length => {
    if (length === 0) {
      setStepErrorText('Step cannot be empty.');
      // Tell upper state about error
      setStepErrors(true);
    } else {
      setStepErrorText('');
      setStepErrors(false);
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
        fullWidth={true}
        error={stepErrorText}
        helperText={stepErrorText || ""}
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