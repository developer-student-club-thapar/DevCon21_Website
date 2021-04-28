import React, { useState } from "react";
import { HiOutlineMenuAlt3 } from "react-icons/hi";
import { AnchorLink } from "gatsby-plugin-anchor-links";

import { NavAction, NavItem, NavWrapper } from "./Nav.styles";
import logo from "../../images/logo.png";
import HamburgerMenu from "../HamburgerMenu/HamburgerMenu";

const Nav = () => {
  const [isOpen, setIsOpen] = useState(false);

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
        <NavLink to="/#Schedule" title="Schedule">
          Schedule
        </NavLink>
        <NavLink to="/#Sponsors" title="Sponsors">
          Sponsors
        </NavLink>
        <NavLink to="/#Contact" title="Contact">
          Contact
        </NavLink>
      </NavAction>
      <HiOutlineMenuAlt3
        className="hamburger"
        onClick={() => {
          setIsOpen((prev) => !prev);
        }}
      />
      <HamburgerMenu isOpen={isOpen} setIsOpen={setIsOpen} />
    </NavWrapper>
  );
};

export default Nav;
