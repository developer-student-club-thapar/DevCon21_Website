import styled from "styled-components";

export const NavWrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding: 2rem;

  .logo-container {
    align-self: flex-start;
  }

  .logo {
    width: 134px;
    height: 134px;
    object-fit: contain;
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
`;
