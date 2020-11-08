import React, {useState, useEffect} from 'react';
import {Button, FormControl, TextField} from '@material-ui/core';
import styles from './styles';
import DeleteForeverSharpIcon from '@material-ui/icons/DeleteForeverSharp';
import { withStyles } from '@material-ui/styles';

const EditRoutineForm = props => {

  //A new routine must have at least 1 step, a title and an id - add validation later
  const {defaultRoutine, updateRoutine, closeEditMode, classes} = props;
  const [formData, setFormData] = useState(defaultRoutine || {id: 0, steps: [], title: ''});
  const [userSteps, setUserSteps] = useState(defaultRoutine.steps || []);
  const [titleError, setTitleError] = useState('');

  useEffect(() => {
  }, userSteps)
  const handleFormUpdate = (field, value) => {
    setFormData({...formData, [field]:value})
  }

  const handleSubmit = () => {
    let newData = formData;
    newData.steps = userSteps;
    // Submit to upper
    formData.title ? updateRoutine(defaultRoutine.id, newData) : setTitleError('Name is required.');
  }

  const addStep = () => {
    setUserSteps(steps => [...steps, {id: userSteps.length, text: ''}])
  }
  const removeStep = id => {
    // The index and id align at first, but then get put out of order when
    // a non-last step is deleted.
    
    // if the array id matches the step id, set it to null or undefined.
    let removedList = userSteps.map(step => {
      if (step && step.id !== id) {
        return step;
      }
      else {
        return null;
      }
    })
    setUserSteps(removedList);
  }
  const editStep = (index, value) => {
    let copy = userSteps;
    copy[index].text = value;
    setUserSteps(copy);
  }

  const StepDisplay = props => {
    const {step, index} = props;
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
  const mapSteps = () => {
    return (
      userSteps && userSteps.map((step, index) => {
        return step ? (
          <StepDisplay step={step} index={index} />
        )
        : null
      })
    )
  }
  return (
    <div className={classes.newRoutineForm}>
      <FormControl>
        <TextField
          autoFocus={true}
          error={titleError}
          helperText={titleError || ""}
          className={classes.routineName}
          label="Routine name"
          defaultValue={defaultRoutine.title || ''}
          onChange={e => handleFormUpdate('title', e.target.value)}
        />
      </FormControl>
      {mapSteps()}
      <Button
        variant="contained"
        className={classes.button}
        onClick={() => addStep()}>
          Add Step
      </Button>
      <Button
          variant="contained"
          className={classes.button}
          onClick={() => handleSubmit()}>
          Save
      </Button>
      <Button
        variant="contained"
        className={classes.button}
        onClick={() => closeEditMode()}>
          Discard
      </Button>
    </div>
  )
}

export default withStyles(styles)(EditRoutineForm);