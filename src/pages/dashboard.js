import React from "react";
import RoutineList from "./../Components/RoutineList";
import NavBar from "./../Components/NavBar";
import {Typography} from '@material-ui/core';
import {withStyles} from "@material-ui/styles";
import { getProfile, login, isAuthenticated } from "../utils/auth";

const styles = {
  topMargin: {
    color: 'red'
  },
  title: {
    fontSize: '40px',
    textAlign: 'center',
    position: 'absolute',
    left: '50%',
    transform: 'translateX(-50%)',
    paddingTop: '15px',
  },
  titleBar: {
    width: '100%',
    height: '10vh',
  },
};

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
