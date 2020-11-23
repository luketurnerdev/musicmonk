import React from "react"
import App from "./App";
import ReactDOM from "react-dom";
import { Auth0Provider } from "@auth0/auth0-react";


export default function Home() {
  return (
      <Auth0Provider>
        <App />
      </Auth0Provider>
  )
}
