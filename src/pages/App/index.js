import React from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";
import NavBar from "./../../Components/NavBar"
import Loading from "./../../Components/Loading"
import Dashboard from "./../Dashboard";
import Splash from "./../../Components/Splash";
import Profile from "./../Profile";
import ProtectedRoute from "./../../auth/ProtectedRoute";

const App = props => {
  const { user, isLoading } = useAuth0();
  if (isLoading) {
    return <Loading />;
  }

  return (
    <div id="app" className="d-flex flex-column h-100">
      {console.log(process.env.GATSBY_SERVER_URL)}
      <div className="container flex-grow-1">
        <Switch>
          <Route exact path="/">
            {user ? <Redirect to="/dashboard" /> : <Splash />}
          </Route>
          <ProtectedRoute exact path="/dashboard"component={(props) => (<Dashboard {...props} user={user} />)} />
          <ProtectedRoute exact path="/profile" component={Profile} />
        </Switch>
      </div>
    </div>
  );
};

export default App;