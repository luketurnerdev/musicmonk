import React, {useState} from 'react';
import {Button, FormControl, TextField} from '@material-ui/core';

const NewRoutineForm = props => {

  //A new routine must have at least 1 step, a title and an id - add validation later
  const {discardRoutine, saveRoutine, currentIdCount} = props;
  const [formData, setFormData] = useState({id: currentIdCount+1, steps: [], title: ''});
  const [userSteps, setUserSteps] = useState([]);

  const handleFormUpdate = (field, value) => {
    console.log('current id count', currentIdCount);
    setFormData({...formData, [field]:value})
  }

  const handleSubmit = () => {
    let copy = formData;
    copy.steps = userSteps;
    // Submit to upper
    saveRoutine(copy);

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
          <>
            <TextField defaultValue={step.text} onChange={e => editStep(index, e.target.value)} />
            <Button onClick={() => removeStep(index)}>Remove Step</Button>
          </>
        )
      })
    )
  }
  return (
    <div>
      <FormControl>
        <TextField
          label="Routine name"
          onChange={e => handleFormUpdate('title', e.target.value)}
        />
      </FormControl>
      {mapSteps()}
      <Button onClick={() => addStep()}>Add Step</Button>
      <Button onClick={() => handleSubmit()}>Save</Button>
      <Button onClick={() => discardRoutine()}>Discard</Button>
    </div>
  )
}

export default NewRoutineForm;