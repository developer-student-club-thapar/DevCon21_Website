import React, { useContext, useState } from "react";
import { HiOutlineMenuAlt3 } from "react-icons/hi";
import { AnchorLink } from "gatsby-plugin-anchor-links";
import { useInView } from "react-intersection-observer";

import { NavAction, NavItem, NavWrapper, RegisterBtn } from "./Nav.styles";
import logo from "../../images/logo.png";
import HamburgerMenu from "../HamburgerMenu/HamburgerMenu";
import { ModalContext } from "../../context/ModalContext";

const Nav = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { setIsVisible } = useContext(ModalContext);
  const { ref, inView } = useInView({
    initialInView: true,
  });

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
      <NavItem isScroll={inView}>{children}</NavItem>
    </AnchorLink>
  );
  return (
    <>
      <div ref={ref}></div>
      <NavWrapper isScroll={inView}>
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
        <RegisterBtn isScroll={inView} onClick={() => setIsVisible(true)}>
          Register
        </RegisterBtn>
        <HiOutlineMenuAlt3
          className="hamburger"
          onClick={() => {
            setIsOpen((prev) => !prev);
          }}
        />
        <HamburgerMenu isOpen={isOpen} setIsOpen={setIsOpen} />
      </NavWrapper>
    </>
  );
};

export default Nav;
