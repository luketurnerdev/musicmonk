import React from 'react';
import LoginButton from '../../Components/LoginButton';
import {Typography} from '@material-ui/core';
import {withStyles} from '@material-ui/styles';
import styles from './styles';


const Splash = props => {
  const {classes} = props;
  return (
    <div className={classes.loginContainer}>
      <Typography variant="subtitle" className={classes.title}>
        MusicMonk 
      </Typography>
      <div>
        <img src="https://i.imgur.com/NpyE2bl.png" alt="musicmonk-logo" width="300" height="400" />
      </div>

      <LoginButton className={classes.loginButton} />
    </div>
  )
}

export default withStyles(styles)(Splash);