import React from 'react';
import Routine from "./../../Components/Routine";
// Hit the API / DB, get a list of users routines
// map them out with the title amd a button to play or edit

const fakeUsersRoutines = [
  {
  id: 1,
  title: 'Jazz routine',
  content: {

  },
},
  {
  id: 2,
  title: 'Rock routine',
  content: {

  },
}
]
const RoutineList = () => {
  return (
    <>

     {fakeUsersRoutines.map(routine => {
       return <Routine title={routine.title} />
     })}

    </>
  )
}

export default RoutineList;