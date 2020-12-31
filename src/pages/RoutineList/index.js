import React, {useState, useEffect} from 'react';
import {Button, Modal, Grid} from '@material-ui/core/'
import {postNewRoutineToDb, getAllRoutinesForUser} from "./../../api";
import styles from './styles';
import { withStyles } from '@material-ui/styles';
import PlayRoutine from "./../../Components/PlayRoutine";
import DeleteRoutine from "./../../Components/DeleteRoutine";
import RoutineForm from "./../../Components/RoutineForm";
import RoutineDisplay from "./../../Components/RoutineDisplay";

// Hit the API / DB, get a list of users routines
// map them out with the title amd a button to play or edit

//When this page first loads, fetch users routines from db (fake for now)
//When the list is updated, setUserRoutines.
//When edit is clicked, open up a modal with userRoutines[id] passed in (the whole object including steps)

const RoutineList = props => {
  const {user} = props;
  const [userRoutines, setUserRoutines] = useState([]);
  const [currentlySelectedRoutine, setCurrentlySelectedRoutine] = useState(null);
  const [routineFormOpen, setRoutineFormOpen] = useState(false);
  const [playRoutineOpen, setPlayRoutineOpen] = useState(false);
  const [deleteConfirmationOpen, setDeleteConfirmationOpen] = useState(false);

  // Async fetch function for useEffect
  async function getRoutines() {
    const response = await getAllRoutinesForUser(user.sub);
    console.log('Fetching routines from API.');
    console.log('Done: ', response);
    return response;
  }

  // Grab routines on mount
  useEffect(() => { 
    getRoutines().then(resp => {
      setUserRoutines(resp);
    })
  }, [])

  // Grab when form closed
  useEffect(() => {
    getRoutines().then(resp => {
      setUserRoutines(resp);
    })
  }, [routineFormOpen])

  const {classes} = props;
  // Default value is the existing list

  const saveNewRoutine = newRoutineData => {    
    // Save to DB
    postNewRoutineToDb(user.sub, newRoutineData);

    setRoutineFormOpen(false);
    setCurrentlySelectedRoutine(null);
  }

  const updateRoutine = (id, newRoutineData) => {
    // copy the array, modify relevant object, update state
    let routines = userRoutines;
    routines[routines.filter(routine => routine && (routine.id === id))[0].id] = newRoutineData;
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
    setCurrentlySelectedRoutine(routine);
  }
  const closePlayMode = () => {
    setPlayRoutineOpen(false);
  }
  const openDeleteMode = routine => {
    setDeleteConfirmationOpen(true);
    setCurrentlySelectedRoutine(routine);
  }
  const closeDeleteMode = () => {
    setDeleteConfirmationOpen(false);
    setCurrentlySelectedRoutine(null);
  }
  const openRoutineForm = routine => {
    setCurrentlySelectedRoutine(routine);
    setRoutineFormOpen(true);
  }


  const deleteRoutine = id => {
    let removedList = userRoutines.map(routine => {
      if (routine && routine.id !== id) {
        return routine;
      }
      else {
        return null;
      }
    })
    // When we remove from the list, the null.xyz values cannot be read
    setUserRoutines(removedList);
    setDeleteConfirmationOpen(false);
    setCurrentlySelectedRoutine(null);
  }


  const List = () => {
    return (
      userRoutines.map(routine => {
        return routine && (
        <RoutineDisplay
          routine={routine}
          classes={classes}
          key={routine.id}
          openDeleteMode={openDeleteMode}
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
          routineCount={userRoutines.length}
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

      <PlayRoutine
        open={playRoutineOpen}
        routine={currentlySelectedRoutine}
        closePlayMode={closePlayMode}
      />

      <DeleteRoutine 
         routine={currentlySelectedRoutine}
         deleteRoutine={deleteRoutine} 
         closeDeleteMode={closeDeleteMode}
         open={deleteConfirmationOpen}
      />
    </>
  )
}

export default withStyles(styles)(RoutineList);