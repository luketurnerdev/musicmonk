import React, {useState} from 'react';
import {Button, Modal, Grid} from '@material-ui/core/'
import fakeData from "./../../fakeData";
import styles from './styles';
import { withStyles } from '@material-ui/styles';
import PlayRoutine from "./../../Components/PlayRoutine";
import RoutineForm from "./../../Components/RoutineForm";
import RoutineDisplay from "./../../Components/RoutineDisplay";

// Hit the API / DB, get a list of users routines
// map them out with the title amd a button to play or edit

//When this page first loads, fetch users routines from db (fake for now)
//When the list is updated, setUserRoutines.
//Also need to update the fakeData file.

//When edit is clicked, open up a modal with userRoutines[id] passed in (the whole object including steps)

const RoutineList = props => {
  const [userRoutines, setUserRoutines] = useState(fakeData);
  const [currentlySelectedRoutine, setCurrentlySelectedRoutine] = useState(null);
  const [routineFormOpen, setRoutineFormOpen] = useState(false);
  const [playRoutineOpen, setPlayRoutineOpen] = useState(false);

  const {classes} = props;
  // Default value is the existing list
  const saveNewRoutine = newRoutineData => {
    setUserRoutines(routines => [...routines, newRoutineData])
    setRoutineFormOpen(false);
    setCurrentlySelectedRoutine(null);
    console.log(newRoutineData);
  }
  const updateRoutine = (id, newRoutineData) => {
    // copy the array, modify relevant object, update state
    let routines = userRoutines;
    routines[routines.filter(routine => routine.id === id)[0].id] = newRoutineData;
    setUserRoutines(routines)
    setRoutineFormOpen(false);
    setCurrentlySelectedRoutine(null);
  }
  
  const discardRoutine = () => {
    setRoutineFormOpen(false);
    setCurrentlySelectedRoutine(null);
  }
  const openPlayMode = routine => {
    setPlayRoutineOpen(true);
    setCurrentlySelectedRoutine(routine)
  }
  const closePlayMode = () => {
    setPlayRoutineOpen(false);
  }
  const openRoutineForm = routine => {
    setCurrentlySelectedRoutine(routine)
    setRoutineFormOpen(true);
  }

  const deleteRoutine = id => {
    console.log('deleting', id);
    let removedList = userRoutines.map(routine => {
      if (routine && routine.id !== id) {
        return routine;
      }
      else {
        return null;
      }
    })
    console.log(removedList)
    // When we remove from the list, the null.xyz values cannot be read
    setUserRoutines(removedList);
  }

  const List = () => {
    return (
      userRoutines.map(routine => {
        return routine && (
        <RoutineDisplay
          routine={routine}
          classes={classes}
          key={routine.id}
          deleteRoutine={deleteRoutine}
          openRoutineForm={openRoutineForm}
          openPlayMode={openPlayMode}
          />
        )
      })
    )
  }

  const Form = () => {
    return (
      <Modal
        open={routineFormOpen}
      >
        <RoutineForm
          updateRoutine={updateRoutine}
          saveNewRoutine={saveNewRoutine}
          discardRoutine={discardRoutine}
          defaultRoutine={currentlySelectedRoutine || null}
        />
      </Modal>
    )
  }
  const Play = () => {
    return (
      <Modal
        open={playRoutineOpen}
      >
        <PlayRoutine
          routine={currentlySelectedRoutine}
          closePlayMode={closePlayMode}
        />
      </Modal>
    )
  }
  return (
    <>
    <div className={classes.routineListContainer}>
      <List />
     <Button variant="contained" onClick={() => setRoutineFormOpen(true)}>Add new routine</Button>
    </div>
      <Form />
      <Play />
    </>
  )
}

export default withStyles(styles)(RoutineList);