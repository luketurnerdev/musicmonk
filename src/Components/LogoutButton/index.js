import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import {Button, Typography} from '@material-ui/core';
import {withStyles} from '@material-ui/styles';
import styles from "./styles";


const LogoutButton = props => {
  const { logout } = useAuth0();
  const {classes} = props;
  return (
    <Button
      style={{'text-decoration': 'none'}}
      className={classes.logoutButton}
      onClick={() =>
        logout({
          returnTo: window.location.origin,
        })
      }
    > <Typography variant="subtitle">Logout</Typography>
      <ExitToAppIcon />
    </Button>
  );
};


export default withStyles(styles)(LogoutButton);