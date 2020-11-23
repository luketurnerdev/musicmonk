import React, { Fragment } from "react";

import RoutineList from "./../RoutineList";
const Dashboard = props => {
  const {user} = props;
  return (
    <>
      <h1>Welcome, {user.nickname} !</h1>
      <RoutineList />
    </>
  );
};

export default Dashboard;
