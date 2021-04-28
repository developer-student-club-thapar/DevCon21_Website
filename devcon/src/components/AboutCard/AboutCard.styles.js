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
  height: 300px;
  cursor: pointer;

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
    top: -100px;
  }

  &:hover {
    margin-top: -10px;
  }

  ${lg},
  ${mdxl} {
    margin-right: 1rem;

    .artwork {
      right: -140px;
      top: -140px;
    }
  }

  ${md},
  ${sm},
  ${xs} {
    max-width: 100%;
    margin: 1rem auto;
    /* height: 280px; */

    .heading {
      font-size: 2rem;
      line-height: 2.4rem;
    }

    .description {
      font-size: 1rem;
    }

    .artwork {
      top: -170px;
      right: -110px;
    }
  }
`;

export const StyledButton = styled.button`
  width: 110px;
  height: 30px;
  border: 1px solid #737373;
  border-radius: 6px;
  background-color: ${({ theme }) => theme.text};
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

  &:hover {
    box-shadow: inset 400px 0 0 0 #000;
    color: ${({ theme }) => theme.text};
  }
`;
