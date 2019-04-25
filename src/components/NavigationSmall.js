import React from "react";
import { Link } from "react-scroll";

export default function NavigationSmall({ closeButton }) {
  return (
    <div className="NavigationSmall">
      <div className="closeButton">{closeButton}</div>
      <Link
        to="main"
        spy={true}
        smooth={true}
        duration={1000}
        activeClassName="active"
      >
        Main
      </Link>
      <Link
        to="about"
        spy={true}
        smooth={true}
        duration={1000}
        activeClassName="active"
      >
        About
      </Link>
      <Link
        to="projects"
        spy={true}
        smooth={true}
        duration={1000}
        activeClassName="active"
      >
        Projects
      </Link>
      <Link
        to="contacts"
        spy={true}
        smooth={true}
        duration={1000}
        activeClassName="active"
      >
        Contacts
      </Link>
    </div>
  );
}
