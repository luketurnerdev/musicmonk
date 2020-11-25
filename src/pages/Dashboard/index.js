import React, { Fragment } from "react";
import ChordGenerator from "./../../Components/ChordGenerator";
import RoutineList from "./../RoutineList";
const Dashboard = props => {
  const {user} = props;
  return (
    <>
      <ChordGenerator />
      <h1>Welcome, {user.nickname} !</h1>
      <RoutineList />
    </>
  );
};

export default Dashboard;
