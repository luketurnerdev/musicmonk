import React from "react";
import { Route, Switch } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";

import NavBar from "./../../Components/NavBar"
import Loading from "./../../Components/Loading"
import Dashboard from "./../Dashboard";
import Profile from "./../Profile";
import ProtectedRoute from "./../../auth/ProtectedRoute";

const App = props => {
  const { user, isLoading } = useAuth0();

  if (isLoading) {
    return <Loading />;
  }

  return (
    <div id="app" className="d-flex flex-column h-100">
      <h1>MusicMonk (header)</h1>
      <NavBar />
      <div className="container flex-grow-1">
        <Switch>
          <ProtectedRoute path="/profile" component={Profile} />
          <Route 
            path="/dashboard"
            render={(props) => (
              <Dashboard {...props} user={user} />
            )}
          />
        </Switch>
      </div>
    </div>
  );
};

export default App;