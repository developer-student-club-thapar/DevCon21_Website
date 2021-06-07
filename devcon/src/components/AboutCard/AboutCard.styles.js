import styled from "styled-components";
import { lg, md, mdxl, sm, xs } from "../../theme/breakpoints";

export const Card = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  padding: 2rem;
  background-color: #fff;
  color: #000;
  border-radius: 12px;
  position: relative;
  overflow: hidden;
  height: 320px;
  cursor: pointer;
  width: 45%;

  transition: all 0.1s ease-in-out;

  .heading {
    font-weight: 900;
    font-size: 2.6rem;
    line-height: 3rem;
    margin-bottom: 0;
  }

  .description {
    max-width: 70%;
    color: #737373;
    font-size: 1.1rem;
    line-height: 1.2rem;
    font-weight: 600;
  }

  .artwork {
    position: absolute;
    right: -70px;
    top: 20px;
    opacity: 0.2;
  }

  &:hover {
    margin-top: -10px;
  }

  ${lg},
  ${mdxl} {
    margin-right: 1rem;

    .artwork {
      /* right: -140px; */
      top: -60px;
    }
  }

  ${md},
  ${sm},
  ${xs} {
    max-width: 100%;
    width: 100%;
    margin: 1.5rem auto;
    /* height: 280px; */

    .heading {
      font-size: 2rem;
      line-height: 2.4rem;
    }

    .description {
      font-size: 1rem;
    }

    .artwork {
      top: -50px;
      right: -90px;
    }
  }
`;

export const StyledButton = styled.button`
  width: 312px;
  height: 44px;
  border: 2px solid transparent;
  border-radius: 4px;
  font-size: 20px;
  font-weight: 600;
  font-family: "Nunito Sans", sans-serif;
  background-color: #27333f;
  color: #fff;
  cursor: pointer;
  position: relative;
  overflow: hidden;
  transition: all ease-out 0.3s;

  &:focus {
    outline: none;
  }

  &::before {
    position: absolute;
    width: 0%;
    height: 100%;
    top: 0;
    left: 0;
    background: #000;
  }

  /* &:hover {
    box-shadow: inset 400px 0 0 0 #000;
    color: ${({ theme }) => theme.text};
  } */
`;

export const Disabled = styled(StyledButton)`
  width: fit-content;
  cursor: not-allowed;
`;
