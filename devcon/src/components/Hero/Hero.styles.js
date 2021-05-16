import styled from "styled-components";

import { lg, md, xs } from "../../theme/breakpoints";

export const HeroSection = styled.div`
  display: flex;
  flex-direction: column;
  align-self: center;
  justify-content: center;
  align-items: center;
  margin-top: 4rem;

  ${md} {
    margin-top: 1rem;
  }

  ${xs} {
    margin-top: 0.5rem;
  }
`;

export const PrimaryTitle = styled.h1`
  font-size: 210px;
  line-height: 254px;
  font-weight: 800;
  margin: 0;
  /* color: #3dbfe8; */
  background: -webkit-linear-gradient(
    -69deg,
    #006eff 15%,
    #2d80ed 40%,
    #49a7d6 100%
  );
  background-clip: text;
  text-fill-color: transparent;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  animation: shine 5s infinite ease-in-out;
  background-size: 300%;

  ${lg} {
    font-size: 180px;
    line-height: 224px;
  }

  ${md} {
    font-size: 8rem;
    line-height: 10rem;
  }

  ${xs} {
    font-size: 4rem;
    line-height: 5rem;
  }

  @keyframes shine {
    0% {
      background-position: 0 50%;
    }

    50% {
      background-position: 100% 50%;
    }

    100% {
      background-position: 0 50%;
    }
  }
`;

export const SecondaryTitle = styled.h3`
  font-size: 52px;
  line-height: 63px;
  font-weight: 500;
  padding: 0 2rem;
  letter-spacing: 0.37em;
  margin: 0;
  color: #3dbfe8;

  ${lg} {
    font-size: 48px;
    line-height: 56px;
  }

  ${md} {
    font-size: 2rem;
    line-height: 5rem;
  }

  ${xs} {
    font-size: 1rem;
    line-height: 3rem;
  }
`;

export const ActionBar = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  margin: 2rem 0;
`;

export const ActionButton = styled.button`
  padding: 0.8rem 2.2rem;
  border: ${({ theme }) => `2px solid #333333`};
  color: ${({ theme }) => theme.text};
  background-color: transparent;
  border-radius: 6px;
  font-size: 1.1rem;
  line-height: 1.2rem;
  width: 190px;
  overflow: hidden;
  position: relative;
  cursor: pointer;

  &:focus {
    outline: none;
  }

  &::after {
    background: #fff;
    content: "";
    height: 155px;
    left: -75px;
    opacity: 0.2;
    position: absolute;
    top: -50px;
    transform: rotate(35deg);
    transition: all 550ms cubic-bezier(0.19, 1, 0.22, 1);
    width: 50px;
    z-index: -10;
  }

  &:hover::after {
    left: 120%;
    transition: all 550ms cubic-bezier(0.19, 1, 0.22, 1);
  }

  &:last-of-type {
    margin-left: 2rem;
  }

  ${xs} {
    width: 50%;
  }
`;

export const StyledVideo = styled.video`
  margin: 6rem 0;
  box-shadow: rgb(0, 0, 0) 0px 0px 50px;
  border-radius: 20px;
  width: 1208px;

  object-fit: contain;

  ${lg} {
    margin: 4rem 0;
  }

  ${md} {
    width: 95%;
    box-shadow: rgb(0, 0, 0) 0px 0px 50px;
  }

  ${xs} {
    width: 100%;
    border-radius: 0;
    margin: 2rem 0;
  }
`;

export const CountdownTimer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  width: 70%;
  margin: 1rem 0;

  .container {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 0 1rem;
    /* color: #3dbfe8; */
  }

  .day,
  .hour,
  .minute,
  .second {
    font-size: 2.6rem;
    margin-bottom: 0;

    ${xs} {
      font-size: 2rem;
    }
  }

  .subtitle {
    font-size: 1rem;
    text-align: center;
  }
`;
