import React, {useState} from 'react';
import {Button, Modal, Grid} from '@material-ui/core/'
import fakeData from "./../../fakeData";
import styles from './styles';
import { withStyles } from '@material-ui/styles';
import PlayRoutine from "./../../Components/PlayRoutine";
import PlayCircleOutlineSharpIcon from '@material-ui/icons/PlayCircleOutlineSharp';
import EditOutlinedIcon from '@material-ui/icons/EditOutlined';
import RoutineForm from "./../../Components/RoutineForm";

// Hit the API / DB, get a list of users routines
// map them out with the title amd a button to play or edit

//When this page first loads, fetch users routines from db (fake for now)
//When the list is updated, fetch it again (useEffect)

//When edit is clicked, open up a modal with userRoutines[id] passed in (the whole object including steps)

const RoutineList = props => {
  const [userRoutines, setUserRoutines] = useState(fakeData);
  const [currentlySelectedRoutine, setCurrentlySelectedRoutine] = useState(null);
  const [newFormOpen, setNewFormOpen] = useState(false);
  const [routineFormOpen, setRoutineFormOpen] = useState(false);
  const [playRoutineOpen, setPlayRoutineOpen] = useState(false);

  const {classes} = props;
  // Default value is the existing list
  const saveNewRoutine = newRoutineData => {
    setUserRoutines(routines => [...routines, newRoutineData])
    setRoutineFormOpen(false);
    setCurrentlySelectedRoutine(null);
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

  const RoutineDisplay = props => {
    const {routine, classes} = props;
    return (
    <div key={routine.id} className={classes.routineDisplay}>
      <Grid container >
        <Grid item xs={8} className={classes.gridItem}>
          <h1>{routine.title}</h1>
        </Grid>
        <Grid item xs={2} className={classes.gridItem}>
          <Button
          variant="contained"
          onClick={() => openPlayMode(routine)}
          className={classes.startButton}
          >
            <PlayCircleOutlineSharpIcon />
        </Button>
      </Grid>
        <Grid item xs={2} className={classes.gridItem}>
            <Button
            variant="contained"
            onClick={() => openRoutineForm(routine)}
            className={classes.editButton}
          >
              <EditOutlinedIcon />
          </Button>
        </Grid>
      </Grid>
    </div>
    )
  }

  const List = () => {
    return (
      userRoutines.map(routine => {
        return (
         <RoutineDisplay routine={routine} classes={classes} key={routine.id} />
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
          defaultRoutine={currentlySelectedRoutine}
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
     {!newFormOpen && 
    <div className={classes.routineListContainer}>
      <List />
     <Button variant="contained" onClick={() => setRoutineFormOpen(true)}>Add new routine</Button>
    </div>
     }
      <Form />
      <Play />
    </>
  )
}

export default withStyles(styles)(RoutineList);