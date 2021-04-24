import React from "react";
import { StaticImage } from "gatsby-plugin-image";

import { NavAction, NavItem, NavWrapper } from "./Nav.styles";

const Nav = () => {
  return (
    <NavWrapper>
      <StaticImage
        src="../../images/logo.svg"
        alt="devcon"
        loading="eager"
        imgClassName="logo"
        className="logo-container"
      />
      <NavAction>
        <NavItem>Home</NavItem>
        <NavItem>About</NavItem>
        <NavItem>Timeline</NavItem>
        <NavItem>Contact</NavItem>
      </NavAction>
    </NavWrapper>
  );
};

export default Nav;
