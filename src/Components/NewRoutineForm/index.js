import React, {useState} from 'react';
import {Button, FormControl, TextField} from '@material-ui/core';
import styles from "./styles";
import { withStyles } from '@material-ui/styles';
import DeleteForeverSharpIcon from '@material-ui/icons/DeleteForeverSharp';

const NewRoutineForm = props => {

  //A new routine must have at least 1 step, a title and an id - add validation later
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
          <div className={classes.step} key={index}>
            <TextField
              variant="outlined"
              defaultValue={step.text}
              onChange={e => editStep(index, e.target.value)}
              />
            <Button className={classes.deleteStepButton} onClick={() => removeStep(index)}>
              <DeleteForeverSharpIcon />
            </Button>
          </div>
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
      <Button onClick={() => addStep()}>Add Step</Button>
      <Button onClick={() => handleSubmit()}>Save</Button>
      <Button onClick={() => discardRoutine()}>Discard</Button>
    </div>
  )
}

export default withStyles(styles)(NewRoutineForm);