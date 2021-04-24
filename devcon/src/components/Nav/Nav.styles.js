import styled from "styled-components";

import { md } from "../../theme/breakpoints";

export const NavWrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding: 2rem;

  .logo-container {
    align-self: flex-start;
    ${md} {
      width: 4rem;
      height: 4rem;
    }
  }

  .logo {
    width: 134px;
    height: 134px;
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
  margin-top: 1.2rem;
`;

export const NavItem = styled.div`
  padding: 1.1rem 1rem;
  font-size: 1.5rem;
  line-height: 1.5rem;
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
