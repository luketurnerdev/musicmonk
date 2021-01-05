import React from "react";

import MainNav from "./../MainNav";
import DesktopNav from "./../DesktopNav";
import AuthNav from "./../AuthNav";

const NavBar = () => {
  // Need to do screen size check here TODO
  return (
    <div className="nav-container mb-3">
      <nav className="navbar navbar-expand-md navbar-light bg-light">
        <div className="container">
          <div className="navbar-brand logo" />
            <DesktopNav />
        </div>
      </nav>
    </div>
  );
};

export default NavBar;
