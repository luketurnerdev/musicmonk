import {NavLink} from "react-router-dom";
import {Grid, Typography, Paper} from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';
import styles from "./styles";
import {withStyles} from '@material-ui/styles';
import LogoutButton from './../LogoutButton';
import React from "react";

const DesktopNav = props => {
  const {classes} = props;
  return (
    <div className={classes.desktopNavContainer}>
      <Typography variant="subtitle" className={classes.title}>
        MusicMonk 
      </Typography>
      <div className={classes.navList}>
        <Paper elevation={2} className={classes.navItem}>
          Home
        </Paper>
        <Paper elevation={2} className={classes.navItem}>
          Profile
        </Paper>
      </div>

      <Paper elevation={2} className={classes.logoutButton}>
          Logout
      </Paper>
    </div>
  )
};

export default withStyles(styles)(DesktopNav);
