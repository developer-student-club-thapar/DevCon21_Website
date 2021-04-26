import React from "react";
import { HiOutlineMenuAlt3 } from "react-icons/hi";
import { AnchorLink } from "gatsby-plugin-anchor-links";

import { NavAction, NavItem, NavWrapper } from "./Nav.styles";
import logo from "../../images/logo.png";

const Nav = () => {
  const NavLink = ({ to, title, children }) => (
    <AnchorLink
      gatsbyLinkProps={{
        style: {
          textDecoration: "none",
          color: "inherit",
        },
      }}
      to={to}
      title={title}
    >
      <NavItem>{children}</NavItem>
    </AnchorLink>
  );
  return (
    <NavWrapper>
      <div className="logo-container">
        <img src={logo} alt="devcon" className="logo" />
      </div>
      <NavAction>
        <NavLink to="/#Home" title="Home">
          Home
        </NavLink>
        <NavLink to="/#About" title="About">
          About
        </NavLink>
        <NavLink to="/#Timeline" title="Timeline">
          Timeline
        </NavLink>
        <NavLink to="/#Sponsors" title="Sponsors">
          Sponsors
        </NavLink>
        <NavItem>Contact</NavItem>
      </NavAction>
      <HiOutlineMenuAlt3 className="hamburger" />
    </NavWrapper>
  );
};

export default Nav;
