import React, {useState} from 'react';
import {Button, FormControl, TextField} from '@material-ui/core';
import styles from "./styles";
import { withStyles } from '@material-ui/styles';
import StepDisplay from "./../StepDisplay";

const NewRoutineForm = props => {

  const {discardRoutine, saveRoutine, currentIdCount, classes} = props;
  const [formData, setFormData] = useState({id: currentIdCount+1, steps: [], title: ''});
  const [userSteps, setUserSteps] = useState([]);
  const [titleError, setTitleError] = useState('');

  const handleFormUpdate = (field, value) => {
    setFormData({...formData, [field]:value})
  }

  const handleSubmit = () => {
    let copy = formData;
    copy.steps = userSteps;
    formData.title ? saveRoutine(copy) : setTitleError('Name is required.');
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
      userSteps && userSteps.map((step, index) => {
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
          onChange={e => handleFormUpdate('title', e.target.value)}
          InputProps={{
            style: styles.input
        }}
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
  )
}

export default withStyles(styles)(NewRoutineForm);