import React, {useState} from 'react';
import {Button, FormControl, TextField} from '@material-ui/core';
import styles from './styles';
import DeleteForeverSharpIcon from '@material-ui/icons/DeleteForeverSharp';
import { withStyles } from '@material-ui/styles';

const EditRoutineForm = props => {

  //A new routine must have at least 1 step, a title and an id - add validation later
  const {defaultRoutine, updateRoutine, closeEditMode, classes} = props;
  const [formData, setFormData] = useState(defaultRoutine || {id: 0, steps: [], title: ''});
  const [userSteps, setUserSteps] = useState(defaultRoutine.steps || []);

  const handleFormUpdate = (field, value) => {
    setFormData({...formData, [field]:value})
  }

  const handleSubmit = () => {
    let newData = formData;
    newData.steps = userSteps;
    // Submit to upper
    updateRoutine(defaultRoutine.id, newData);
    closeEditMode();
  }

  const addStep = () => {
    setUserSteps(steps => [...steps, {id: userSteps.length, text: ''}])
  }
  const removeStep = id => {
    setUserSteps(userSteps.filter(step => step.id !== id));
  }
  const editStep = (index, value) => {
    let copy = userSteps;
    copy[index].text = value;
    setUserSteps(copy);
  }

  const mapSteps = () => {
    return (
      userSteps && userSteps.map((step, index) => {
        return (
          <div className={classes.step}>
            <TextField defaultValue={step.text} onChange={e => editStep(index, e.target.value)} />
            <Button className={classes.deleteStepButton} onClick={() => removeStep(index)}>
              <DeleteForeverSharpIcon />
            </Button>
          </div>
        )
      })
    )
  }
  return (
    <div className={classes.newRoutineForm}>
      <FormControl>
        <TextField
          className={classes.routineName}
          label="Routine name"
          defaultValue={defaultRoutine.title || ''}
          onChange={e => handleFormUpdate('title', e.target.value)}
        />
      </FormControl>
      {mapSteps()}
      <Button onClick={() => addStep()}>Add Step</Button>
      <Button onClick={() => handleSubmit()}>Save</Button>
      <Button onClick={() => closeEditMode()}>Discard</Button>
    </div>
  )
}

export default withStyles(styles)(EditRoutineForm);