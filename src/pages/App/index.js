import React, {useContext} from "react";
import Loading from "./../../Components/Loading"
import Dashboard from "./../dashboard/index"
import Splash from "../Splash";
import Profile from "./../Profile";

import { Router } from "@reach/router"


const App = props => {
  return (
      <Router>
        <Splash path="/" />
        <Dashboard path="/dashboard" />
        <Profile path="/profile" />
      </Router>
  );
};

export default App;