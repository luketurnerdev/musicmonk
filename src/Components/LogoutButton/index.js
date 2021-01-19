import React from "react";
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import {Button, Typography} from '@material-ui/core';
import {withStyles} from '@material-ui/styles';
import styles from "./styles";
import {logout} from "../../utils/auth"


const LogoutButton = props => {
  const {classes} = props;
  return (
    <Button
      style={{'text-decoration': 'none'}}
      className={classes.logoutButton}
      onClick={() => logout()}
    > <Typography variant="subtitle">Logout</Typography>
      <ExitToAppIcon />
    </Button>
  );
};


export default withStyles(styles)(LogoutButton);