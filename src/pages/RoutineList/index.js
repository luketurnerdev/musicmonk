import React, {useState} from 'react';
import {Button, Modal} from '@material-ui/core/'
import fakeData from "./../../fakeData";
import EditModal from "./../../Components/EditModal";
import NewRoutineForm from "./../../Components/NewRoutineForm";

// Hit the API / DB, get a list of users routines
// map them out with the title amd a button to play or edit

//When this page first loads, fetch users routines from db (fake for now)
//When the list is updated, fetch it again (useEffect)

//When edit is clicked, open up a modal with userRoutines[id] passed in (the whole object including steps)

const RoutineList = () => {
  const [userRoutines, setUserRoutines] = useState(fakeData);
  const [currentlySelectedRoutine, setCurrentlySelectedRoutine] = useState(null);
  const [formOpen, setFormOpen] = useState(true);
  // Default value is the existing list
  const saveRoutine = newRoutineData => {
    console.log(newRoutineData);
    setUserRoutines(routines => [...routines, newRoutineData])
    setFormOpen(false);
  }
  
  const discardRoutine = () => {
    setFormOpen(false);
  }

  const List = () => {
    return (
      userRoutines.map(routine => {
        return (
         <div key={routine.id}>
           <h1>{routine.title}</h1>
           {/* <h6>{routine.steps[0]}</h6> */}
           <Button variant="contained">Play</Button>
         </div>
        )
      })
    )
  }
  return (
    <>

     {!formOpen && 
    <>
      <List />
     <Button variant="contained" onClick={() => setFormOpen(true)}>Add new routine</Button>
    </>
     }
      <Modal
        open={formOpen}
      >
       <NewRoutineForm
        saveRoutine={saveRoutine}
        discardRoutine={discardRoutine}
       />
    </Modal>
    </>
  )
}

export default RoutineList;