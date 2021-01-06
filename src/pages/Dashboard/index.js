import React from "react";
import RoutineList from "./../RoutineList";
import NavBar from "./../../Components/NavBar";
import {withStyles} from "@material-ui/styles";
import styles from "./styles";
const Dashboard = props => {
  const {user, classes} = props;
  return (
    <div className={classes.dashboardContainer}>
      <NavBar className={classes.navBarRoot} />
      {/* <h1>Welcome, {user.nickname} !</h1> */}
      <RoutineList user={user} />
    </div>
  );
};

export default withStyles(styles)(Dashboard);
