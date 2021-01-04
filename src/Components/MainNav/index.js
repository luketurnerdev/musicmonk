import {NavLink} from "react-router-dom";
import {Grid, Typography} from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';
import styles from "./styles";
import {withStyles} from '@material-ui/styles';
import LogoutButton from './../LogoutButton';
import React from "react";

const MainNav = props => {
  const {classes} = props;
  return (
    <div className="navbar-nav mr-auto">
      <Grid container direction="row" className={classes.headerGridContainer}>
        <Grid item xs={2} className={classes.menuGrid}>
          <MenuIcon className={classes.menuIcon}/>
        </Grid>
        <Grid item xs={8} className={classes.titleGrid}>
          <NavLink
            to="/"
            exact
            className="nav-link"
            activeClassName="router-link-exact-active"
          >
              <Typography variant="h5" className={classes.title}>MusicMonk</Typography>
          </NavLink>
        </Grid>
        <Grid item xs={2} className={classes.exitGrid}>
          <LogoutButton />
        </Grid>
      </Grid>
    </div>
  )
};

export default withStyles(styles)(MainNav);
