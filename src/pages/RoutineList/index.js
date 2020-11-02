import React, {useState} from 'react';
import {Button, Modal} from '@material-ui/core/'
import fakeData from "./../../fakeData";
import styles from './styles';
import { withStyles } from '@material-ui/styles';
import NewRoutineForm from "./../../Components/NewRoutineForm";
import EditRoutineForm from "./../../Components/EditRoutineForm";
import PlayRoutine from "./../../Components/PlayRoutine";
import PlayCircleOutlineSharpIcon from '@material-ui/icons/PlayCircleOutlineSharp';
import EditOutlinedIcon from '@material-ui/icons/EditOutlined';

// Hit the API / DB, get a list of users routines
// map them out with the title amd a button to play or edit

//When this page first loads, fetch users routines from db (fake for now)
//When the list is updated, fetch it again (useEffect)

//When edit is clicked, open up a modal with userRoutines[id] passed in (the whole object including steps)

const RoutineList = props => {
  const [userRoutines, setUserRoutines] = useState(fakeData);
  const [currentlySelectedRoutine, setCurrentlySelectedRoutine] = useState(null);
  const [newFormOpen, setNewFormOpen] = useState(false);
  const [editFormOpen, setEditFormOpen] = useState(false);
  const [playRoutineOpen, setPlayRoutineOpen] = useState(false);

  const {classes} = props;
  // Default value is the existing list
  const saveRoutine = newRoutineData => {
    setUserRoutines(routines => [...routines, newRoutineData])
    setNewFormOpen(false);
  }
  
  const discardRoutine = () => {
    setNewFormOpen(false);
  }
  const openPlayMode = routine => {
    setPlayRoutineOpen(true);
    setCurrentlySelectedRoutine(routine)
  }
  const closePlayMode = () => {
    setPlayRoutineOpen(false);
  }
  const closeEditMode = () => {
    setEditFormOpen(false);
  }

  const openEditMode = routine => {
    setCurrentlySelectedRoutine(routine)
    setEditFormOpen(true);
  }

  const RoutineDisplay = props => {
    const {routine, classes} = props;
    return (
    <div key={routine.id} className={classes.routineDisplay}>
      <h1>{routine.title}</h1>
      <Button
        variant="contained"
        onClick={() => openPlayMode(routine)}
        className={classes.startButton}
        >
          <PlayCircleOutlineSharpIcon />
      </Button>
      <Button
        variant="contained"
        onClick={() => openEditMode(routine)}
        className={classes.editButton}
      >
          <EditOutlinedIcon />
      </Button>
    </div>
    )
  }

  const List = () => {
    return (
      userRoutines.map(routine => {
        return (
         <RoutineDisplay routine={routine} classes={classes} />
        )
      })
    )
  }

  const NewForm = () => {
    return (
      <Modal
      open={newFormOpen}
      >
        <NewRoutineForm
          saveRoutine={saveRoutine}
          discardRoutine={discardRoutine}
        />
      </Modal>
    )
  }
  const EditForm = () => {
    return (
      <Modal
        open={editFormOpen}
      >
        <EditRoutineForm
          saveRoutine={saveRoutine}
          closeEditMode={closeEditMode}
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
    <>
      <h5>{currentlySelectedRoutine && currentlySelectedRoutine.title}</h5>
      <List />
     <Button variant="contained" onClick={() => setNewFormOpen(true)}>Add new routine</Button>
    </>
     }
      <NewForm />
      <EditForm />
      <Play />
    </>
  )
}

export default withStyles(styles)(RoutineList);