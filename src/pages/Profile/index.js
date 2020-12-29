import React from "react";

import { useAuth0 } from "@auth0/auth0-react";

const Profile = () => {
  const { user } = useAuth0();
  const { name, picture, email } = user;

  return (
    <div>
      <div className="row">
        <pre className="col-12 text-light bg-dark p-4">
          Luke's ID is {user.sub}
        </pre>
      </div>
    </div>
  );
};

export default Profile;
