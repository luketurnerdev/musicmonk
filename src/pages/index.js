import React from "react"
import ReactDOM from "react-dom"
import App from "./App";
import {BrowserRouter as Router} from "react-router-dom";
import Auth0ProviderWithHistory from "./../auth/Auth0ProviderWithHistory";


export default function Home() {
  return (
    <Router>
    <Auth0ProviderWithHistory>
      <App />
    </Auth0ProviderWithHistory>
  </Router>
  );
};