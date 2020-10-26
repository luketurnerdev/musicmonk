import React, {useState} from 'react';
import {Button, Modal} from '@material-ui/core/'
import fakeData from "./../../fakeData";

// Hit the API / DB, get a list of users routines
// map them out with the title amd a button to play or edit

//When this page first loads, fetch users routines from db (fake for now)
//When the list is updated, fetch it again (useEffect)

//When edit is clicked, open up a modal with userRoutines[id] passed in (the whole object including steps)

const RoutineList = () => {
  const [userRoutines, setUserRoutines] = useState(fakeData);
  const [editModalVisible, setEditModalVisible] = useState(false);
  const [currentlySelectedRoutine, setCurrentlySelectedRoutine] = useState(null);
  // Default value is the existing list
  const enterEditMode = id => {
    // Open modal, set current routine
    setEditModalVisible(true);
    setCurrentlySelectedRoutine(userRoutines[id]);
  }
  
  const handleModalClose = () => {
    console.log('closing?')
    setEditModalVisible(false);
    setCurrentlySelectedRoutine(null);
  }

  const List = () => {
    return (
      userRoutines.map(routine => {
        return (
         <>
           <h1>{routine.title}</h1>
           <h1>{routine.id}</h1>
           <Button variant="contained">Play</Button>
           <Button variant="contained" onClick={() => enterEditMode(routine.id)}>Edit</Button>
         </>
        )
      })
    )
  }
  return (
    <>

     <List />
     <Modal
      open={editModalVisible}
      onClose={handleModalClose}
      aria-labelledby="simple-modal-title"
      aria-describedby="simple-modal-description"
    > 
    <div>
      {currentlySelectedRoutine && <h1>{currentlySelectedRoutine.title}</h1>}
    <Button variant="contained" onClick={() => handleModalClose()}>Close</Button>
    </div>

    
  </Modal>

    </>
  )
}

export default RoutineList;