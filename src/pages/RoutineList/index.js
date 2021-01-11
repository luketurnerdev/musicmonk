import React, {useState, useEffect, useCallback} from 'react';
import {Button} from '@material-ui/core/'
import {postNewRoutineToDb, getAllRoutinesForUser, deleteOneRoutineFromDb, editOneRoutineInDb} from "./../../api";
import styles from './styles';
import { withStyles } from '@material-ui/styles';
import PlayRoutine from "./../../Components/PlayRoutine";
import DeleteRoutine from "./../../Components/DeleteRoutine";
import RoutineDisplay from "./../../Components/RoutineDisplay";
import FormModal from './../../Components/Form';

//When this page first loads, fetch users routines from db (fake for now)
//When the list is updated (ie, POST, PUT OR DELETE is called), setUserRoutines.

const RoutineList = props => {
  const {classes, user} = props;
  const [userRoutines, setUserRoutines] = useState([]);
  const [currentlySelectedRoutine, setCurrentlySelectedRoutine] = useState(null);
  const [routineFormOpen, setRoutineFormOpen] = useState(null);
  const [playRoutineOpen, setPlayRoutineOpen] = useState(false);
  const [deleteConfirmationOpen, setDeleteConfirmationOpen] = useState(false);
  const [fetching, setFetching] = useState(false);
  const [saving, setSaving] = useState(false);

  // Async fetch function for useEffect
  const getRoutines = useCallback(async () => {
    setFetching(true);
    const response = await getAllRoutinesForUser(user.sub);
    console.log('Fetching routines from API.');
    console.log('Done: ', response);
    setFetching(false);
    return response;
  }, [])

  //SIDE EFFECTS

  // On mount
  useEffect(() => { 
    getRoutines().then(resp => {
      setUserRoutines(resp);
    })
  }, [])

  // When routine form closed
  useEffect(() => {
    getRoutines().then(resp => {
      setUserRoutines(resp);
    })
  }, [routineFormOpen])
  
  // When delete is confirmed
  useEffect(() => {
    getRoutines().then(resp => {
      setUserRoutines(resp);
    })
  }, [deleteConfirmationOpen, getRoutines])

  // API CALLS AND SUBSQUENT STATE CHANGES

  const saveNewRoutine = async newRoutineData => {   
    setSaving(true); 

    await postNewRoutineToDb(user.sub, newRoutineData);
    setSaving(false);

    setRoutineFormOpen(false);
    setCurrentlySelectedRoutine(null);
  }

  const updateRoutine = async (routineId, newData) => {  
    console.log(routineId, newData);
    await editOneRoutineInDb(user.sub, routineId, newData);
    setRoutineFormOpen(false);
    setCurrentlySelectedRoutine(null);
  }

  const deleteRoutine = async (routineId) => {
    await deleteOneRoutineFromDb(user.sub, routineId);
    setDeleteModeStatus(false, null);
  }
  

  // TOGGLE VARIOUS MODES
  const setPlayModeStatus = (open, routine) => {
    setPlayRoutineOpen(open);
    setCurrentlySelectedRoutine(routine);
  }
  const setDeleteModeStatus = (open, routine) => {
    setDeleteConfirmationOpen(open);
    setCurrentlySelectedRoutine(routine);
  }
  const setFormModeStatus = (open, routine) => {
    setRoutineFormOpen(open);
    setCurrentlySelectedRoutine(routine);
  }

  const mapRoutines = () => {
    return userRoutines.map(routine => {
      return <RoutineDisplay
        routine={routine}
        key={routine.id}
        setDeleteModeStatus={setDeleteModeStatus}
        setFormModeStatus={setFormModeStatus}
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

      {/* Various Modals */}

      <FormModal
        open={routineFormOpen}
        setFormModeStatus={setFormModeStatus}
        updateRoutine={updateRoutine}
        saveNewRoutine={saveNewRoutine}
        currentlySelectedRoutine={currentlySelectedRoutine}
        userRoutines={userRoutines}
        saving={saving}
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
      />
    </>
  )
}

export default withStyles(styles)(RoutineList);