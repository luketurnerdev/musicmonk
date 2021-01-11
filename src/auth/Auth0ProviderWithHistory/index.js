import React from "react";
import { useHistory } from "react-router-dom";
import { navigate } from 'gatsby';
import { Auth0Provider } from "@auth0/auth0-react";

const Auth0ProviderWithHistory = ({ children }) => {
  const history = useHistory();
  const domain = "musicmonk.au.auth0.com";
  const clientId = "RRYnmLrc7nhJ8A0Iiv6TRr4p8yxO5DI7";

  const onRedirectCallback = (appState) => {
    // Use Gatsby's navigate method to replace the url
    navigate(appState?.returnTo || '/#/dashboard', { replace: true });
  };

  return (
    <Auth0Provider
      domain={domain}
      clientId={clientId}
      redirectUri={window.location.origin}
      onRedirectCallback={onRedirectCallback}
    >
      {children}
    </Auth0Provider>
  );
};

export default Auth0ProviderWithHistory;