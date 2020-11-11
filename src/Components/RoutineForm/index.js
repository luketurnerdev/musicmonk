import React, {useState, useEffect} from 'react';
import {Button, FormControl, TextField} from '@material-ui/core';
import styles from './styles';
import { withStyles } from '@material-ui/styles';
import StepDisplay from "./../StepDisplay";

const RoutineForm = props => {

  const {defaultRoutine, updateRoutine, closeEditMode, classes} = props;
  console.log(props)
  // const [formData, setFormData] = useState(defaultRoutine || {id: 0, steps: [], title: ''});
  // const [userSteps, setUserSteps] = useState(defaultRoutine.steps || []);
  // const [titleError, setTitleError] = useState('');

  // const handleFormUpdate = (field, value) => {
  //   setFormData({...formData, [field]:value})
  // }

  // const handleSubmit = () => {
  //   let newData = formData;
  //   newData.steps = userSteps;
  //   // Submit to upper
  //   formData.title ? updateRoutine(defaultRoutine.id, newData) : setTitleError('Name is required.');
  // }

  // const addStep = () => {
  //   setUserSteps(steps => [...steps, {id: userSteps.length, text: ''}])
  // }
  // const removeStep = id => {
  //   // The index and id align at first, but then get put out of order when
  //   // a non-last step is deleted.
    
  //   // if the array id matches the step id, set it to null or undefined.
  //   let removedList = userSteps.map(step => {
  //     if (step && step.id !== id) {
  //       return step;
  //     }
  //     else {
  //       return null;
  //     }
  //   })
  //   setUserSteps(removedList);
  // }
  // const editStep = (index, value) => {
  //   let copy = userSteps;
  //   copy[index].text = value;
  //   setUserSteps(copy);
  // }

  // const mapSteps = () => {
  //   return (
  //     userSteps && userSteps.map((step, index) => {
  //       return step ? (
  //         <StepDisplay
  //           step={step}
  //           index={index}
  //           classes={classes}
  //           removeStep={removeStep}
  //           editStep={editStep}
  //         />
  //       )
  //       : null
  //     })
  //   )
  // }
  return (
  <div className={classes.formContainer}>
    <div className={classes.routineForm}>
      <FormControl>
        <TextField
          // error={titleError}
          // helperText={titleError || ""}
          className={classes.routineName}
          label="Routine name"
          defaultValue={defaultRoutine.title || ''}
          // onChange={e => handleFormUpdate('title', e.target.value)}
        />
      </FormControl>
      
      {/* {mapSteps()} */}
      {/* <Button
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
      </Button> */}
    </div>

  </div>
    
  )
}

export default withStyles(styles)(RoutineForm);