import {NavLink} from "react-router-dom";
import {Typography, Paper} from '@material-ui/core';
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

          <NavLink
            to="/"
            exact
            className={classes.navItem}
          >
              <Paper elevation={3}>
                <Typography variant="subtitle">Home</Typography>
              </Paper>
          </NavLink>

          <NavLink
            to="/profile"
            exact
            className={classes.navItem}
          >
              <Paper elevation={3}>
                <Typography variant="subtitle">Profile</Typography>
              </Paper>
          </NavLink>

        
        
      </div>
          <LogoutButton />

    </div>
  )
};

export default withStyles(styles)(DesktopNav);
