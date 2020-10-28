import React, {useState} from 'react';
import {Button, FormControl, TextField} from '@material-ui/core';

const NewRoutineForm = props => {

  //A new routine must have at least 1 step, a title and an id
  const {discardRoutine, saveRoutine} = props;
  const [formData, setFormData] = useState({});
  const [userSteps, setUserSteps] = useState([]);

  const handleFormUpdate = (field, value) => {
    console.log(field, value);
    setFormData({...formData, [field]:value})
  }

  const handleSubmit = () => {

    //Combine steps and title 

    let copy = formData;
    copy[userSteps] = userSteps;

    console.log('copy')
    console.log(copy)
    // Submit to upper
    saveRoutine(copy)

  }

  const addStep = () => {
    setUserSteps(steps => [...steps, [{id: userSteps.length, text: ''}]])
  }
  const editStep = (index, value) => {
    let copy = userSteps;
    copy[index].text = value;
    setUserSteps(copy);
  }

  const mapSteps = () => {
    return (
      userSteps && userSteps.map((step, index) => {
        console.log(step, index)
        return <TextField defaultValue={step.text} onChange={e => editStep(index, e.target.value)} />
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
      <Button onClick={() => handleSubmit()}>Save</Button>
      <Button onClick={() => discardRoutine()}>Discard</Button>
    </div>
  )
}

export default NewRoutineForm;