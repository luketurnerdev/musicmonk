import React, {useState} from 'react';
import {Button, FormControl, TextField} from '@material-ui/core';

const NewRoutineForm = props => {
  const {discardRoutine, saveRoutine} = props;
  const [formData, setFormData] = useState({});

  const handleFormUpdate = (field, value) => {
    console.log(field, value);
    setFormData({...formData, [field]:value})
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
      <Button onClick={() => saveRoutine(formData)}>Save</Button>
      <Button onClick={() => discardRoutine()}>Discard</Button>
    </div>
  )
}

export default NewRoutineForm;