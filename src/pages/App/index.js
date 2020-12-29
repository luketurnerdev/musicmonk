import React from "react";
import { Route, Switch } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";

import NavBar from "./../../Components/NavBar"
import Loading from "./../../Components/Loading"
import RoutineForm from "./../../Components/RoutineForm"
import RoutineList from "./../RoutineList";
import Dashboard from "./../Dashboard";
import Home from "./../../Components/Home";
import AuthenticationButton from "../../Components/AuthenticationButton";
import Profile from "./../Profile";
import ProtectedRoute from "./../../auth/ProtectedRoute";

const App = props => {
  const { user, isLoading } = useAuth0();

  if (isLoading) {
    return <Loading />;
  }

  return (
    <div id="app" className="d-flex flex-column h-100">
      <NavBar />
      <h1>MusicMonk</h1>
      <div className="container flex-grow-1">
        <Switch>
          <Route exact path="/" component={Home}/>
          <ProtectedRoute exact path="/dashboard"component={(props) => (<Dashboard {...props} user={user} />)} />
          <ProtectedRoute exact path="/profile" component={Profile} />
        </Switch>
      </div>
    </div>
  );
};

export default App;