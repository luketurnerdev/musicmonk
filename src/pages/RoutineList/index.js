import React, {useState, useEffect} from 'react';
import {Button, Modal, Grid} from '@material-ui/core/'
import {postNewRoutineToDb, getAllRoutinesForUser, deleteOneRoutineFromDb, editOneRoutineInDb} from "./../../api";
import styles from './styles';
import { withStyles } from '@material-ui/styles';
import PlayRoutine from "./../../Components/PlayRoutine";
import DeleteRoutine from "./../../Components/DeleteRoutine";
import Form from "./../../Components/Form";
import RoutineForm from "./../../Components/RoutineForm";
import RoutineDisplay from "./../../Components/RoutineDisplay";
import FormModal from './../../Components/Form';

//When this page first loads, fetch users routines from db (fake for now)
//When the list is updated (ie, POST, PUT OR DELETE is called), setUserRoutines.

const RoutineList = props => {
  const {user} = props;
  const [userRoutines, setUserRoutines] = useState([]);
  const [currentlySelectedRoutine, setCurrentlySelectedRoutine] = useState(null);
  const [routineFormOpen, setRoutineFormOpen] = useState(null);
  const [playRoutineOpen, setPlayRoutineOpen] = useState(false);
  const [deleteConfirmationOpen, setDeleteConfirmationOpen] = useState(false);
  const [fetching, setFetching] = useState(false);
  const [submitting, setSubmitting] = useState(false);

  // Async fetch function for useEffect
  async function getRoutines() {
    setFetching(true);
    const response = await getAllRoutinesForUser(user.sub);
    console.log('Fetching routines from API.');
    console.log('Done: ', response);
    setFetching(false);
    return response;
  }

  // Grab routines on mount
  useEffect(() => { 
    getRoutines().then(resp => {
      setUserRoutines(resp);
    })
  }, [])

  // Grab when delete form closed
  useEffect(() => {
    getRoutines().then(resp => {
      setUserRoutines(resp);
    })
  }, [routineFormOpen])
  useEffect(() => {
    getRoutines().then(resp => {
      setUserRoutines(resp);
    })
  }, [deleteConfirmationOpen])

  const {classes} = props;
  // Default value is the existing list

  const saveNewRoutine = newRoutineData => {    
    // Save to DB
    postNewRoutineToDb(user.sub, newRoutineData);
    setRoutineFormOpen(false);
    setCurrentlySelectedRoutine(null);
  }

  const updateRoutine = (routineId, newData) => {
    
    console.log(routineId, newData);
    editOneRoutineInDb(user.sub, routineId, newData);
    setRoutineFormOpen(false);
    setCurrentlySelectedRoutine(null);
  }
  

  const setPlayModeStatus = (open, routine) => {
    setPlayRoutineOpen(open);
    setCurrentlySelectedRoutine(routine);
  }
  const setDeleteModeStatus = (open, routine) => {
    setDeleteConfirmationOpen(open);
    setCurrentlySelectedRoutine(routine);
  }
  const discardRoutine = () => {
    setRoutineFormOpen(false);
    setCurrentlySelectedRoutine(null);
  }

  const openRoutineForm = routine => {
    setCurrentlySelectedRoutine(routine);
    setRoutineFormOpen(true);
  }

  const deleteRoutine = async (routineId) => {
    await deleteOneRoutineFromDb(user.sub, routineId);
    setDeleteModeStatus(false, null);
    getRoutines();
    // form closes, api fetches. routine is still being deleted.
  }


  const mapRoutines = () => {
    return userRoutines.map(routine => {
      return <RoutineDisplay
        routine={routine}
        classes={classes}
        key={routine.id}
        setDeleteModeStatus={setDeleteModeStatus}
        openRoutineForm={openRoutineForm}
        setPlayModeStatus={setPlayModeStatus}
      />
    })
  }
  const List = () => {
    return (userRoutines.length ? mapRoutines() : <h1>None found</h1>)
  }

  return (
    <>
    <div className={classes.routineListContainer}>
    {fetching 
      ? <h1>Loading...</h1> 
      : <List />
    }
     <Button variant="contained" onClick={() => setRoutineFormOpen(true)}>Add new routine</Button>
    </div>

      <FormModal
        open={routineFormOpen}
        discardRoutine={discardRoutine}
        updateRoutine={updateRoutine}
        saveNewRoutine={saveNewRoutine}
        currentlySelectedRoutine={currentlySelectedRoutine}
        userRoutines={userRoutines}
      />

      <PlayRoutine
        open={playRoutineOpen}
        routine={currentlySelectedRoutine}
        setPlayModeStatus={setPlayModeStatus}
      />

      <DeleteRoutine 
         routine={currentlySelectedRoutine}
         deleteRoutine={deleteRoutine} 
         setDeleteModeStatus={setDeleteModeStatus}
         open={deleteConfirmationOpen}
         setSubmitting={setSubmitting}
      />
    </>
  )
}

export default withStyles(styles)(RoutineList);