import React from "react"
import App from "./App";
import { Auth0Provider } from "@auth0/auth0-react";
import { login, logout, isAuthenticated, getProfile } from "./../utils/auth"
import UserContext from "./../context/UserContext";

export default function Home() {
  let user;
  if (!isAuthenticated) {
    user = getProfile();
  }
  else {
    user = "notyet"
  }
  return (
    <UserContext.Provider value={user}>
      <App /> 
    </UserContext.Provider>
  );
};