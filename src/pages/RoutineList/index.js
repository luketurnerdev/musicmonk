import React, {useState} from 'react';
import Button from '@material-ui/core/Button'
import fakeData from "./../../fakeData";
// Hit the API / DB, get a list of users routines
// map them out with the title amd a button to play or edit

//When this page first loads, fetch users routines from db (fake for now)
//When the list is updated, fetch it again (useEffect)

//When edit is clicked, open up a modal with userRoutines[id] passed in (the whole object including steps)

const RoutineList = () => {
  const [userRoutines, setUserRoutines] = useState(fakeData);
  // Default value is the existing list
  const enterEditMode = id => {
    console.log(id);
    console.log(userRoutines[id]);
  }
  return (
    <>

     {userRoutines.map(routine => {
       return (
        <>

          <h1>{routine.title}</h1>
          <h1>{routine.id}</h1>
          <Button variant="contained">Play</Button>
          <Button variant="contained" onClick={() => enterEditMode(routine.id)}>Edit</Button>

        </>
       )
     })}

    </>
  )
}

export default RoutineList;