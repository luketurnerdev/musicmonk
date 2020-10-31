import React, {useState} from 'react';
import {Button, FormControl, TextField} from '@material-ui/core';

const PlayRoutine = props => {
  const {closePlayMode, routine} = props;
  return (
    <div>
      <h5>Play mode bro</h5>
      <h5>{routine.title}</h5>
      <Button onClick={() => closePlayMode()}>Discard</Button>
    </div>
  )
}

export default PlayRoutine;