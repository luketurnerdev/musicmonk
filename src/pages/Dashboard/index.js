import React from "react";
import RoutineList from "./../RoutineList";
import NavBar from "./../../Components/NavBar";
import {Grid} from "@material-ui/core";
import {withStyles} from "@material-ui/styles";
import styles from "./styles";
const Dashboard = props => {
  const {user, classes} = props;
  return (
    <Grid container className={classes.dashboardContainer}>
      <Grid item xs={1}>
        <NavBar className={classes.navBarRoot} />
      </Grid>
      <Grid item xs={11}>
        <RoutineList user={user} />
      </Grid>
    </Grid>
  );
};

export default withStyles(styles)(Dashboard);
