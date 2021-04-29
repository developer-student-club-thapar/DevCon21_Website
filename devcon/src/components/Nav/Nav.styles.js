import styled from "styled-components";

import { md } from "../../theme/breakpoints";
import { ActionButton } from "../Hero/Hero.styles";

export const NavWrapper = styled.div`
  display: flex;
  flex-direction: ${(props) => (props.isScroll ? "column" : "row")};
  padding: ${(props) => (props.isScroll ? "2rem" : "1rem")};
  justify-content: ${(props) => (props.isScroll ? "stretch" : "space-between")};
  position: sticky;
  top: 0;
  background: ${(props) => (props.isScroll ? "transparent" : "#18191F")};
  z-index: 2000;
  transition: all 0.1s ease-in;

  .logo-container {
    width: ${(props) => (props.isScroll ? "134px" : "60px")};
    height: ${(props) => (props.isScroll ? "134px" : "60px")};
    align-self: flex-start;
    ${md} {
      width: 4rem;
      height: 4rem;
    }
  }

  .logo {
    width: ${(props) => (props.isScroll ? "134px" : "60px")};
    height: ${(props) => (props.isScroll ? "134px" : "60px")};
    object-fit: contain;

    ${md} {
      width: 4rem;
      height: 4rem;
    }
  }

  .hamburger {
    display: none;
    ${md} {
      display: block;
      font-size: 1.5rem;
      margin: auto 0 auto auto;
    }
  }

  ${md} {
    flex-direction: row;
    padding: 1rem;
    align-items: center;
  }
`;

export const NavAction = styled.div`
  display: flex;
  flex-direction: row;
  align-self: center;
  width: fit-content;
  /* margin: auto; */
`;

export const NavItem = styled.div`
  padding: 1.1rem 1rem;
  font-size: ${(props) => (props.isScroll ? "1.5rem" : "1.2rem")};
  line-height: ${(props) => (props.isScroll ? "1.5rem" : "1.2rem")};
  cursor: pointer;
  position: relative;

  &::before {
    position: absolute;
    bottom: 0;
    left: 0;
    width: 0%;
    height: 1px;
    background-color: ${({ theme }) => theme.text};
    content: "";
    transition: width 0.3s linear;
  }

  &:hover::before {
    width: 100%;
  }

  ${md} {
    display: none;
  }
`;

export const RegisterBtn = styled(ActionButton)`
  display: ${(props) => (props.isScroll ? "none" : "flex")};
  width: 120px;
  padding: 0.8rem 1rem;
  height: fit-content;
  align-self: center;
  align-items: center;
  justify-content: center;

  ${md} {
    display: none;
  }
`;
