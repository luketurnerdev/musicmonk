import {Link} from '@reach/router';
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

          <Link
            to="/"
            className={classes.navItem}
          >
              <Paper elevation={3}>
                <Typography variant="subtitle">Home</Typography>
              </Paper>
          </Link>

          <Link
            to="/profile"
            className={classes.navItem}
          >
              <Paper elevation={3}>
                <Typography variant="subtitle">Profile</Typography>
              </Paper>
          </Link>
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
