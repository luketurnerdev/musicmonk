import React from 'react';
import RoutineList from "./../RoutineList"
import AuthNav from "./../../Components/AuthNav";
const App = props => {
  // If user is logged in (dashboard)
  return (
    <>
      <AuthNav />
      <RoutineList />
    </>
  )
}
export default App;