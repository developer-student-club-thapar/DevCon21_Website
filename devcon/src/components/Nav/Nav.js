import React from "react";
import { StaticImage } from "gatsby-plugin-image";
import { HiOutlineMenuAlt3 } from "react-icons/hi";

import { NavAction, NavItem, NavWrapper } from "./Nav.styles";
import { AnchorLink } from "gatsby-plugin-anchor-links";

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
      <StaticImage
        src="../../images/logo.png"
        alt="devcon"
        loading="eager"
        imgClassName="logo"
        className="logo-container"
      />
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
