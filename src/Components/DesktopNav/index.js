import {Link} from '@reach/router';
import {Typography, Paper, Button} from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';
import MenuOpenIcon from '@material-ui/icons/MenuOpen';
import styles from "./styles";
import {withStyles} from '@material-ui/styles';
import LogoutButton from './../LogoutButton';
import React, {useState, useEffect} from "react";

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
          <Button
            onClick={() => setMenuOpen(false)}
            className={classes.navItem}
          >
              <Paper elevation={3} style={{width:'100%'}}>
                <Typography variant="subtitle">Home</Typography>
              </Paper>
          </Button>
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
