import React, { Fragment } from "react";
import RoutineList from "./../RoutineList";
import NavBar from "./../../Components/NavBar";
const Dashboard = props => {
  const {user} = props;
  return (
    <>
      <NavBar />
      {/* <h1>Welcome, {user.nickname} !</h1> */}
      {/* <RoutineList user={user} /> */}
    </>
  );
};

export default Dashboard;
