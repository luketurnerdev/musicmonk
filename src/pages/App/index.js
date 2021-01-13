import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import Loading from "./../../Components/Loading"
import Dashboard from "./../dashboard";
import Splash from "../Splash";
import Profile from "./../Profile";
import ProtectedRoute from "./../../auth/ProtectedRoute";
import { Router, Link } from "@reach/router"


const App = props => {

  return (
    <Router>
      <Splash path="/" />

    </Router>
  );
};

export default App;