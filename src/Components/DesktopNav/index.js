import {NavLink} from "react-router-dom";
import {Typography, Paper, Button} from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';
import MenuOpenIcon from '@material-ui/icons/MenuOpen';
import styles from "./styles";
import {withStyles} from '@material-ui/styles';
import LogoutButton from './../LogoutButton';
import React, {useState} from "react";
const DesktopNav = props => {
  const {classes} = props;
  const [menuOpen, setMenuOpen] = useState(false);

  const MenuButton = () => {
    return (<Button onClick={() => toggleMenuOpen()}>
            {menuOpen ? <MenuOpenIcon /> : <MenuIcon />}
      </Button>)
  }
  const toggleMenuOpen = () => {
    setMenuOpen(!menuOpen)
  }
  const OpenMenu = () => {
    return <div className={classes.desktopNavContainer}>
      <MenuButton />
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
  }
  return (
    <>
    
    {menuOpen 
    ? <OpenMenu /> 
    : <MenuButton />}
    </>
  )
};

export default withStyles(styles)(DesktopNav);
