import React from "react";

import NavItem from "./NavItem";

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light marginBottom marginTop">
      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav">
          <NavItem name="GIS and Geospatial Technologies" section="1" />
          <NavItem name="Surveying and Data Collection" section="2" />
          <NavItem name="Data Visualization and Mapping" section="3" />
          <NavItem name="Software and Apps Development" section="4" />
          <NavItem name="Frontier Technology" section="5" />
          <NavItem name="Research & Training" section="6" />
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
