import React, {useState} from 'react';
import {Button, Modal} from '@material-ui/core/'
import fakeData from "./../../fakeData";
import NewRoutineForm from "./../../Components/NewRoutineForm";
import PlayRoutine from "./../../Components/PlayRoutine";

// Hit the API / DB, get a list of users routines
// map them out with the title amd a button to play or edit

//When this page first loads, fetch users routines from db (fake for now)
//When the list is updated, fetch it again (useEffect)

//When edit is clicked, open up a modal with userRoutines[id] passed in (the whole object including steps)

const RoutineList = () => {
  const [userRoutines, setUserRoutines] = useState(fakeData);
  const [currentlySelectedRoutine, setCurrentlySelectedRoutine] = useState(null);
  const [newFormOpen, setNewFormOpen] = useState(false);
  const [playRoutineOpen, setPlayRoutineOpen] = useState(false);
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

  const List = () => {
    return (
      userRoutines.map(routine => {
        return (
         <div key={routine.id}>
           <h1>{routine.title}</h1>
            {routine.steps && routine.steps.map(step => {return <h5>{step.text}</h5>})}
           <Button variant="contained" onClick={() => openPlayMode(routine)}>View</Button>
         </div>
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
      <Play />
    </>
  )
}

export default RoutineList;