import React, { Fragment } from "react";
import ChordGenerator from "./../../Components/ChordGenerator";
import RoutineList from "./../RoutineList";
import SignupForm from "../../Components/SignupForm";
const Dashboard = props => {
  const {user} = props;
  return (
    <>
    <h1>hi</h1>
      {/* <ChordGenerator /> */}
      <h1>Welcome, {user.nickname} !</h1>
      <RoutineList user={user} />
      {/* <SignupForm /> */}
    </>
  );
};

export default Dashboard;
