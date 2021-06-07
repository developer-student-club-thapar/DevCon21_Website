import styled from "styled-components";

import { lg, md, sm, xs } from "../../theme/breakpoints";
import { StyledButton } from "../AboutCard/AboutCard.styles";

export const CardAlt = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-content: flex-end;
  align-self: center;
  text-align: right;
  padding: 2rem;
  background-color: #fff;
  color: #000;
  border-radius: 12px;
  position: relative;
  overflow: hidden;
  height: 320px;
  width: 45%;
  cursor: pointer;
  transition: all 0.1s ease-in-out;

  .heading {
    font-weight: 900;
    font-size: 2.6rem;
    line-height: 3rem;
    margin-bottom: 0;
  }

  .description {
    width: 80%;
    max-width: 80%;
    color: #737373;
    font-size: 1.1rem;
    line-height: 1.2rem;
    font-weight: 600;
    align-self: flex-end;
  }

  .artwork {
    position: absolute;
    left: -50px;
    top: -80px;
    opacity: 0.2;
  }

  &:hover {
    margin-top: -10px;
  }

  @media only screen and (max-width: 1440px) {
    .description {
      width: 90%;
      max-width: 90%;
    }
  }

  ${lg} {
    margin-left: 1rem;

    /* .artwork {
      top: -110px;
    } */
  }

  ${md},
  ${sm},
  ${xs} {
    max-width: 100%;
    width: 100%;
    margin: 1rem auto;
    /* height: 260px; */

    .heading {
      font-size: 2rem;
      line-height: 2.4rem;
    }

    .description {
      font-size: 1rem;
    }

    .artwork {
      top: -50px;
      left: -100px;
    }
  }
`;

export const StyledButtonAlt = styled(StyledButton)`
  margin-left: auto;
`;
