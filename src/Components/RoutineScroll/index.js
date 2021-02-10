import React, {useState, useEffect} from 'react';
import {Button} from '@material-ui/core';

const RoutineScroll = props => {
  const {routines, setPlayModeStatus, setDeleteModeStatus, setFormModeStatus} = props;
  const [currentRoutine, setCurrentRoutine] = useState(0);


  useEffect(() => {
    routines && setCurrentRoutine(routines.length-1);
  }, [])
  const goForward = () => {
    currentRoutine === routines.length-1
      ? setCurrentRoutine(0)
      : setCurrentRoutine(currentRoutine+1)
  }
  const goBack = () => {
    currentRoutine === 0 
      ? setCurrentRoutine(routines.length-1)
      : setCurrentRoutine(currentRoutine-1)
  }
  return (
    <div>
      <Button onClick={() => goBack()}>Back</Button>
      <div>
        {routines[currentRoutine].title}
        Estimated time to complete: xyz
        <Button onClick={() => setPlayModeStatus(true, routines[currentRoutine])}>Play</Button>
        <Button onClick={() => setFormModeStatus(true, routines[currentRoutine])}>Edit</Button>
        <Button onClick={() => setDeleteModeStatus(true, routines[currentRoutine])}>Delete</Button>
      </div>
      <Button onClick={() => goForward()}>Forward</Button>
    </div>
  )
}

export default RoutineScroll;

// Goal 1: Render a component
// that displays the text of the first routine 
//in the array, with a play button, delete and 
//edit button (they dont have to work yet

// Goal 2: implement buttons to scroll left and right,
// making sure that we can go <0 and > length to reset 
// a) implement state for current routine
// b) scroll left and right and alter array index as needed
// c) implement useEffect to select last elemeny by default on load

// Goal 3: get modals working


