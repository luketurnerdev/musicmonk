import React from 'react';
import {Button, TextField} from '@material-ui/core';
import DeleteForeverSharpIcon from '@material-ui/icons/DeleteForeverSharp'
import { withStyles } from '@material-ui/styles';
import styles from "./styles";

const StepDisplay = props => {
  const {step, index, removeStep, editStep} = props;
  console.log(index === 0)
  const stepName = () => {
    // Only render example on first step
    const examples = 
    [
      'E.g., Practice E Minor Scale',
      'E.g., Stretch for 5 minutes',
      'E.g., Alternate Picking Exercises',
      'E.g., Practice a song',
      'E.g., Practice naming notes on the fretboard for 5 minutes'
    ];
    return index === 0 ? examples[Math.floor(Math.random() * examples.length)] : "";
  }
  return (
    <div style={styles.step}>
      <TextField
        label={`Step ${index+1}`}
        placeholder={stepName()}
        autoFocus={true}
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