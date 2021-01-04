import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import {Button} from '@material-ui/core';

const LogoutButton = () => {
  const { logout } = useAuth0();
  return (
    <Button
      style={{'text-decoration': 'none'}}
      className="btn btn-danger btn-block"
      onClick={() =>
        logout({
          returnTo: window.location.origin,
        })
      }
    >
      <ExitToAppIcon />
    </Button>
  );
};

export default LogoutButton;