import React from "react";
import {Button} from '@material-ui/core'
import { login } from "../../utils/auth";
const LoginButton = () => {
  return (
    <Button 
        variant="contained" 
        onClick={() => login()}
      >
          Login / Signup
      </Button  >
  );
};

export default LoginButton;