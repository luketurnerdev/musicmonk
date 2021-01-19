import React from "react";
import RoutineList from "./../RoutineList";
import {Typography} from '@material-ui/core';
import NavBar from "./../../Components/NavBar";
import {Grid} from "@material-ui/core";
import {withStyles} from "@material-ui/styles";
import { login, logout, isAuthenticated, getProfile } from "../../utils/auth"
import styles from "./styles";

const Dashboard = props => {
  const user = getProfile();
  const {classes} = props;
  return (
  <>
    <div>
      <NavBar /> 
      <Typography variant="subtitle">
        MusicMonk 
      </Typography>

    </div>
    <Grid container>

      <Grid item xs={1}>
      </Grid>
      <Grid item xs={11}>
        <RoutineList user={user} />
      </Grid>
    </Grid>
  </>
  );
};

export default withStyles(styles)(Dashboard);
