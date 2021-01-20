import React from "react";
import RoutineList from "../../Components/RoutineList";
import {Typography} from '@material-ui/core';
import NavBar from "./../../Components/NavBar";
import {withStyles} from "@material-ui/styles";
import { getProfile, login, isAuthenticated } from "../../utils/auth"
import styles from "./styles";

const Dashboard = props => {
  const {classes} = props;
  if (!isAuthenticated()) {
    login();
    return <p>Redirecting to login...</p>;
  }

  const user = getProfile();
  return (
  <>
    <div className={classes.titleBar}>
      <NavBar /> 
      <Typography variant="subtitle" className={classes.title}>
        MusicMonk
      </Typography>

    </div>
    
    <RoutineList user={user} />
  </>
  );
};

export default withStyles(styles)(Dashboard);
