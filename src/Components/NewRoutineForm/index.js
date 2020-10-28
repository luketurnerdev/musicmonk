import React from 'react';
import {Button} from '@material-ui/core';

const NewRoutineForm = props => {
  const {discardRoutine, saveRoutine} = props;
  return (
    <div>
      <h1>New Routine</h1>
      <Button onClick={() => saveRoutine()}>Save</Button>
      <Button onClick={() => discardRoutine()}>Discard</Button>
    </div>
  )
}

export default NewRoutineForm;