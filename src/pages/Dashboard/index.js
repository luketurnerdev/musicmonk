import React from "react";
import RoutineList from "./../RoutineList";
import {Typography} from '@material-ui/core';
import NavBar from "./../../Components/NavBar";
import {Grid} from "@material-ui/core";
import {withStyles} from "@material-ui/styles";
import styles from "./styles";

const Dashboard = props => {
  const {classes} = props;
  return (
  <>
    <div className={classes.titleBar}>
      <NavBar className={classes.navBarRoot} /> 
      <Typography variant="subtitle" className={classes.title}>
        MusicMonk 
      </Typography>

    </div>
    <Grid container className={classes.dashboardContainer}>

      <Grid item xs={1}>
      </Grid>
      {/* <Grid item xs={11}>
        <RoutineList user={user} />
      </Grid> */}
    </Grid>
  </>
  );
};

export default withStyles(styles)(Dashboard);
