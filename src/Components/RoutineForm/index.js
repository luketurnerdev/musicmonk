import React, {useState, useEffect} from 'react';
import {Button, FormControl, TextField} from '@material-ui/core';
import styles from './styles';
import { withStyles } from '@material-ui/styles';
import StepDisplay from "./../StepDisplay";

const RoutineForm = props => {
  const {defaultRoutine, updateRoutine, discardRoutine, classes, saveNewRoutine, routineCount} = props;
  const [formData, setFormData] = useState(defaultRoutine || {id: routineCount, steps: [], title: ''});
  const [userSteps, setUserSteps] = useState(defaultRoutine && defaultRoutine.steps || []);
  const [titleError, setTitleError] = useState('');
  const [isNewRoutine, setIsNewRoutine] = useState(!defaultRoutine);
  const [stepErrors, setStepErrors] = useState(false);
  
  const checkTextLength = length => {
    if (length === 0) {
      setTitleError('Name is required.');
    } else {
      setTitleError('');
    }
    return null;
  }
  const handleFormUpdate = (field, value) => {
    // perform check here for exceeding 0 chars
    checkTextLength(value.length);
    setFormData({...formData, [field]:value})
  }
  
  const handleSubmit = () => {
    let newData = formData;
    newData.steps = userSteps;

    // Only submit if:
      // title is not empty
      // stepErrors is false
      // then choose to update or save new

    if (formData.title) {
      //continue
      if (!stepErrors) {
        // check if new or existing
        return isNewRoutine ? saveNewRoutine(newData) : updateRoutine(defaultRoutine.id, newData)
      }
      else {
        return null;
      }
    }
    else {
      setTitleError('Name is required.');
    }
    // if (isNewRoutine) {
    //   // save new function, if no validation errors
    //   formData.title && !stepErrors ? saveNewRoutine(newData) : setTitleError('Name is required.');
    // }
    // else {
    //   // Update existing
    //   formData.title && !stepErrors ? updateRoutine(defaultRoutine.id, newData) : setTitleError('Name is required.');
    // }
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

  const mapSteps = () => {
    return (
    <div className={classes.stepList}>
      {userSteps && userSteps.map((step, index) => {
        return step ? (
          <StepDisplay
            step={step}
            index={index}
            classes={classes}
            removeStep={removeStep}
            editStep={editStep}
            setStepErrors={setStepErrors}
          />
        )
        : null
      })}
  </div>
    )

  }

  const checkForTitleErrors = title => {
    console.log(title.length)
    if (title.length === 0) {
      setTitleError('Name is required.');
    }
  }
  return (
  <div className={classes.formContainer}>
    <div className={classes.routineForm}>
      <FormControl>
        <TextField
          error={titleError}
          helperText={titleError || ""}
          className={classes.routineName}
          label="Routine name"
          defaultValue={(defaultRoutine && defaultRoutine.title) || ''}
          onChange={e => handleFormUpdate('title', e.target.value)}
          onBlur={e => checkForTitleErrors(e.target.value)}
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
        onClick={() => discardRoutine()}>
          Discard
      </Button>
    </div>

  </div>
    
  )
}

export default withStyles(styles)(RoutineForm);