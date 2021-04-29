import { AnchorLink } from "gatsby-plugin-anchor-links";
import React from "react";
import { GrClose } from "react-icons/gr";

import {
  LogoSection,
  Menu,
  MenuItem,
  MenuSection,
} from "./HamburgerMenu.styles";

const HamburgerMenu = ({ isOpen, setIsOpen }) => {
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
      <MenuItem
        onClick={() => {
          setIsOpen(false);
        }}
      >
        {children}
      </MenuItem>
    </AnchorLink>
  );

  return (
    <Menu isOpen={isOpen}>
      <LogoSection>
        <h4 className="heading">DEVCON</h4>
        <GrClose
          className="close"
          onClick={() => {
            setIsOpen(false);
          }}
        />
      </LogoSection>
      <MenuSection>
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
      </MenuSection>
    </Menu>
  );
};

export default HamburgerMenu;
