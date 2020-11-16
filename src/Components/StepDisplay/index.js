import React, {useState} from 'react';
import {Button, TextField} from '@material-ui/core';
import DeleteForeverSharpIcon from '@material-ui/icons/DeleteForeverSharp'
import { withStyles } from '@material-ui/styles';
import styles from "./styles";

const StepDisplay = props => {
  const {step, index, classes, removeStep, editStep, setStepErrors, stepErrors} = props;
  const [stepErrorText, setStepErrorText] = useState('');

  return (
    <div style={styles.step}>
      <TextField
        fullWidth={true}
        defaultValue={step.text}
        onChange={e => editStep(index, e.target.value)}
         />
      <Button style={styles.button} onClick={() => removeStep(index)}>
        <DeleteForeverSharpIcon style={styles.deleteStepButton} />
      </Button>
    </div>
  )
}

export default withStyles(styles)(StepDisplay);