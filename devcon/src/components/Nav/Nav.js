import React from "react";
import { StaticImage } from "gatsby-plugin-image";
import { HiOutlineMenuAlt3 } from "react-icons/hi";

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
      <HiOutlineMenuAlt3 className="hamburger" />
    </NavWrapper>
  );
};

export default Nav;
