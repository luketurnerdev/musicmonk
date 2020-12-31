import React, {useState, useEffect} from 'react';
import {Button, Modal, Grid} from '@material-ui/core/'
import {postNewRoutineToDb} from "./../../api";
import styles from './styles';
import { withStyles } from '@material-ui/styles';
import PlayRoutine from "./../../Components/PlayRoutine";
import DeleteRoutine from "./../../Components/DeleteRoutine";
import RoutineForm from "./../../Components/RoutineForm";
import RoutineDisplay from "./../../Components/RoutineDisplay";
import axios from 'axios';

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

  // Fetch the user's routines from DB on page load

  const getAllRoutinesForUser = async (userId) => {
      await axios.get(`http://localhost:3000/users/${userId}/routines`)
      .then(resp => {
        console.log(resp.data);
        setUserRoutines(resp.data);
      })
      .catch(err => {
        console.log(err);
      })
  }

  // Grab routines on mount
  useEffect(() => {
    getAllRoutinesForUser(user.sub);
  }, [routineFormOpen])

  // Grab when form closed
  useEffect(() => {
    getAllRoutinesForUser(user.sub);
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
    setCurrentlySelectedRoutine(routine)
  }
  const openDeleteMode = routine => {
    setDeleteConfirmationOpen(true);
    setCurrentlySelectedRoutine(routine)
  }
  const closeDeleteMode = () => {
    setDeleteConfirmationOpen(false);
    setCurrentlySelectedRoutine(null)
  }
  const closePlayMode = () => {
    setPlayRoutineOpen(false);
  }
  const openRoutineForm = routine => {
    setCurrentlySelectedRoutine(routine)
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



  const Delete = () => {
    return (
      <Modal
        open={deleteConfirmationOpen}
      >
        <DeleteRoutine 
         routine={currentlySelectedRoutine}
         deleteRoutine={deleteRoutine} 
         closeDeleteMode={closeDeleteMode}
        />
      </Modal>
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
      <Delete />
      {/* <DeleteConfirmation /> */}
    </>
  )
}

export default withStyles(styles)(RoutineList);