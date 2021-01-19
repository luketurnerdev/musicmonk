import React, {useContext} from "react";
import { useAuth0 } from "@auth0/auth0-react";
import Loading from "./../../Components/Loading"
import Dashboard from "./../dashboard";
import Splash from "../Splash";
import Profile from "./../Profile";
import ProtectedRoute from "./../../auth/ProtectedRoute";
import { Router, Link } from "@reach/router"
import UserContext from "../../context/userContext";


const App = props => {
  const user = useContext(UserContext)
  return (
      <Router>
        <Splash path="/" />
        <Dashboard path="/dashboard" />
      </Router>
  );
};

export default App;