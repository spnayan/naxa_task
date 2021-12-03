import React from "react";
import { Link } from "react-scroll";

const NavItem = ({ name, section }) => {
  return (
    <>
      <li className="nav-item pointer">
        <Link
          activeClass="active"
          to={section}
          spy={true}
          smooth={true}
          offset={-20}
          duration={50}
        >
          {name}
        </Link>
      </li>
    </>
  );
};

export default NavItem;
