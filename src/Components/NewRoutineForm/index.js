import React, {useState} from 'react';
import {Button, FormControl, TextField} from '@material-ui/core';

const NewRoutineForm = props => {

  //A new routine must have at least 1 step, a title and an id
  const {discardRoutine, saveRoutine} = props;
  const [formData, setFormData] = useState({});
  const [userSteps, setUserSteps] = useState(['heres step 1','and also step 2']);

  const handleFormUpdate = (field, value) => {
    console.log(field, value);
    setFormData({...formData, [field]:value})
  }

  const addStep = () => {
    setUserSteps(steps => [...steps, ['new step']])
  }

  const mapSteps = () => {
    return (
      userSteps && userSteps.map((step, index) => {
        return <TextField defaultValue={step} />
      })
    )
  }
  return (
    <div>
    {console.log(formData)}
      <FormControl>
        <TextField
          label="Routine name"
          onChange={e => handleFormUpdate('title', e.target.value)}
        />
      </FormControl>
      {mapSteps()}
      <Button onClick={() => addStep()}>Add Step</Button>
      <Button onClick={() => saveRoutine(formData)}>Save</Button>
      <Button onClick={() => discardRoutine()}>Discard</Button>
    </div>
  )
}

export default NewRoutineForm;