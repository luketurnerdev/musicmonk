import React, {useState, useEffect} from 'react';
import {Button, FormControl, TextField, Typography, Paper} from '@material-ui/core';
import styles from './styles';
import { withStyles } from '@material-ui/styles';
import StepDisplay from "./../StepDisplay";
import ControlPointSharpIcon from '@material-ui/icons/ControlPointSharp';
import useBreakpoint from "./../../hooks/useBreakpoint";

const RoutineForm = props => {
  const mobile = useBreakpoint() === 'sm' ? true : false;
  const {defaultRoutine, updateRoutine, setFormModeStatus, classes, saveNewRoutine, routineCount, saving} = props;
  const [formData, setFormData] = useState(defaultRoutine || {id: routineCount, steps: [], title: ''});
  const [userSteps, setUserSteps] = useState(defaultRoutine ? defaultRoutine.steps : []);

  //Validation state
  const [titleError, setTitleError] = useState('');
  const [exampleTitle, setExampleTitle] = useState('');
  const [emptySteps, setEmptySteps] = useState(false);
  const [pageError, setPageError] = useState('');

  useEffect(() => {
    pickRandomTitle()
  }, [])

  useEffect(() => {
    emptySteps ? setPageError('One or more steps are empty!') : setPageError('');
  }, [emptySteps])

  // If there is no default routine (ie edit mode), treat this as a new one
  const isNewRoutine = !defaultRoutine;
  
  const checkTextLength = length => {
    length === 0 ? setTitleError('Name is required.') : setTitleError('');
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
    userSteps.length === 0 ? setPageError('At least one step is required.') : setPageError('');

    // Only submit if routine contains 1) Title 2) At least one step 3) No empty steps
    if (!titleError && newData.steps.length >= 1 && !emptySteps) {
      return isNewRoutine ? saveNewRoutine(newData) : updateRoutine(defaultRoutine._id, newData)
    }

  }

  const addStep = () => {
    setPageError('');
    setEmptySteps(true);
    setUserSteps(steps => [...steps, {id: userSteps.length, text: ''}])
  }
  const removeStep = id => {
    setEmptySteps(false);
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
  const editStep = (index, values) => {
    console.log(values);
    console.log(`submitting`);
    let copy = userSteps;
    copy[index].text = values.text;
    copy[index].timer = values.timer;

    console.log(copy)
    setUserSteps(copy);
  }

  const mapSteps = () => {
    return (
      <>
        <div className={mobile ? classes.stepListMobile : classes.stepList}>
          {userSteps && userSteps.map((step, index) => {
            return step ? (
              <StepDisplay
                key={index}
                step={step}
                index={index}
                classes={classes}
                removeStep={removeStep}
                editStep={editStep}
                checkTextLength={checkTextLength}
                setEmptySteps={setEmptySteps}
              />
            )
            : null
          })}
      </div>

        
      <Button
          variant="contained"
          className={classes.addButton}
          color="primary"
          onClick={() => addStep()}>
            <Typography variant="subtitle">New step</Typography>
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

  const buttonColor = pageError ? '#FFFFFF' : '#32a893';

  
  return (
  <div className={classes.formContainer}>
    <div className={classes.routineForm}>
      <FormControl>
        <TextField
          InputLabelProps={{
            className: classes.routineLabel
          }}
          InputProps={{className: classes.inputText}}
          className={mobile ? classes.routineNameMobile : classes.routineName}
          error={titleError}
          helperText={titleError || ""}
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
            disabled={pageError}
            className={mobile? classes.buttonMobile : classes.button}
            style={saving ? {backgroundColor:'#16e312'} : {backgroundColor: buttonColor}}
            onClick={() => handleSubmit()}>
            {saving ? "Saving..." : "Save"}
        </Button>
        <Button
          variant="contained"
          className={mobile? classes.buttonMobile : classes.button}
          color="secondary"
          onClick={() => setFormModeStatus(false, null)}>
            Discard
        </Button>
      </div>

    </div>

  </div>
    
  )
}

export default withStyles(styles)(RoutineForm);