import React, {useState, useEffect} from 'react';
import {Button, FormControl, TextField} from '@material-ui/core';
import styles from './styles';
import { withStyles } from '@material-ui/styles';
import StepDisplay from "./../StepDisplay";
import ControlPointSharpIcon from '@material-ui/icons/ControlPointSharp';

const RoutineForm = props => {
  const {defaultRoutine, updateRoutine, discardRoutine, classes, saveNewRoutine, routineCount} = props;
  const [formData, setFormData] = useState(defaultRoutine || {id: routineCount, steps: [], title: ''});
  const [userSteps, setUserSteps] = useState(defaultRoutine && defaultRoutine.steps || []);
  const [titleError, setTitleError] = useState('');
  const [isNewRoutine, setIsNewRoutine] = useState(!defaultRoutine);
  
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
    console.log(userSteps);
    newData.steps = userSteps;
    // only include non-empty steps

    // Only submit if:
      // title is not empty
      // stepErrors is false
      // then choose to update or save new

      if (formData.title) {
        //continue
        return isNewRoutine ? saveNewRoutine(newData) : updateRoutine(defaultRoutine._id, newData)
      }

  }

  const addStep = () => {
    console.log('clickityclack')
    console.log(userSteps)
    setUserSteps(steps => [...steps, {id: userSteps.length, text: ''}])
  }
  const removeStep = id => {
    
    // if the array id matches the step id, set it to null or undefined.
    // let stepToRemove = userSteps.filter(s => s.id === id);
    // console.log("id selected : ", id);
    // console.log(userSteps.splice(userSteps[id],1));
    let updatedList = userSteps.map(step => {
      if (step && step.id !== id) {
        return step;
      }
      else {
        return null;
      }
    })

    setUserSteps(updatedList);
  }
  const editStep = (index, value) => {
    let copy = userSteps;
    copy[index].text = value;
    setUserSteps(copy);
  }

  const mapSteps = () => {
    return (
      <>
        <div className={classes.stepList}>
          {userSteps && userSteps.map((step, index) => {
            return step ? (
              <StepDisplay
                step={step}
                index={index}
                classes={classes}
                removeStep={removeStep}
                editStep={editStep}
              />
            )
            : null
          })}
      </div>

      <Button
          variant="contained"
          className={classes.addButton}
          onClick={() => addStep()}>
            <ControlPointSharpIcon />
        </Button>

    </>

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
    <div className={classes.exitButtons}>
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

  </div>
    
  )
}

export default withStyles(styles)(RoutineForm);