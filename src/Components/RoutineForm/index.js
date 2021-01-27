import React, {useState, useEffect} from 'react';
import {Button, FormControl, TextField, Typography} from '@material-ui/core';
import styles from './styles';
import { withStyles } from '@material-ui/styles';
import StepDisplay from "./../StepDisplay";
import ControlPointSharpIcon from '@material-ui/icons/ControlPointSharp';

const RoutineForm = props => {
  const {defaultRoutine, updateRoutine, setFormModeStatus, classes, saveNewRoutine, routineCount, saving} = props;
  const [formData, setFormData] = useState(defaultRoutine || {id: routineCount, steps: [], title: ''});
  const [userSteps, setUserSteps] = useState(defaultRoutine ? defaultRoutine.steps : []);
  const [titleError, setTitleError] = useState('');
  const [stepError, setStepError] = useState('');
  const [exampleTitle, setExampleTitle] = useState('');

  useEffect(() => {
    pickRandomTitle()
  }, [])

  // If there is no default routine (ie edit mode), treat this as a new one
  const isNewRoutine = !defaultRoutine;
  
  const checkTextLength = (length, type) => {
    if (length === 0) {
      type === "title" ? setTitleError('Name is required.') : setStepError('Step cannot be empty.')
    } else {
      type === "title" ? setTitleError('') : setStepError('')
    }
    return null;
  }

  const handleFormUpdate = (field, value) => {
    // perform check here for exceeding 0 chars
    checkTextLength(value.length, 'title');
    setFormData({...formData, [field]:value})
  }
  
  const handleSubmit = () => {
    let newData = formData;
    newData.steps = userSteps;

    // Only submit if routine contains 1) Title 2) At least one step 3) No empty steps
    console.log(titleError, stepError, newData.steps.length)
    if (!titleError && newData.steps.length >= 1 && !stepError) {
      return isNewRoutine ? saveNewRoutine(newData) : updateRoutine(defaultRoutine._id, newData)
    }

  }

  const addStep = () => {
    setUserSteps(steps => [...steps, {id: userSteps.length, text: ''}])
  }
  const removeStep = id => {
    
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
                checkTextLength={checkTextLength}
                stepError={stepError}
              />
            )
            : null
          })}
      </div>

        
      <Button
          variant="contained"
          className={classes.addButton}
          onClick={() => addStep()}>
            <Typography variant="subtitle">Add new step</Typography>
            <ControlPointSharpIcon />
        </Button>

    </>

    )

  }

  const pickRandomTitle = () => {
    const examples = 
    [
      'E.g., My Daily Guitar Routine',
      'E.g., Piano Gig Practice',
      'E.g., Guitar Shredding Workout',
      'E.g., Jazz Chord Routine',
      'E.g., Sweep Picking Practice'
    ];
    setExampleTitle(examples[Math.floor(Math.random() * examples.length)]);
  }
  return (
  <div className={classes.formContainer}>
    <div className={classes.routineForm}>
      <FormControl>
        <TextField
          autoFocus={true}
          error={titleError}
          helperText={titleError || ""}
          className={classes.routineName}
          label="Routine Name"
          placeholder={exampleTitle}
          defaultValue={(defaultRoutine && defaultRoutine.title) || ''}
          onChange={e => handleFormUpdate('title', e.target.value)}
          onBlur={e => checkTextLength(e.target.value.length)}
        />
      </FormControl>
      
      {mapSteps()}
      <div className={classes.exitButtons}>
        <Button
            variant="contained"
            className={classes.button}
            onClick={() => handleSubmit()}>
            {saving ? "Saving..." : "Save Routine"}
        </Button>
        <Button
          variant="contained"
          className={classes.button}
          onClick={() => setFormModeStatus(false, null)}>
            Discard
        </Button>
      </div>

    </div>

  </div>
    
  )
}

export default withStyles(styles)(RoutineForm);