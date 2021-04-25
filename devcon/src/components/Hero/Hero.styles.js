import styled from "styled-components";

import { lg, md, xs } from "../../theme/breakpoints";

export const HeroSection = styled.div`
  display: flex;
  flex-direction: column;
  align-self: center;
  justify-content: center;
  align-items: center;
`;

export const PrimaryTitle = styled.h1`
  font-size: 210px;
  line-height: 254px;
  font-weight: 800;
  margin: 0;
  color: #3dbfe8;

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
`;

export const SecondaryTitle = styled.h3`
  font-size: 52px;
  line-height: 63px;
  font-weight: 500;
  padding: 0 2rem;
  letter-spacing: 0.37em;
  margin: 0;

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
  border: ${({ theme }) => `1px solid ${theme.text}`};
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
  filter: drop-shadow(0px 0px 160px #000000);
  border-radius: 20px;
  width: 1078px;
  object-fit: contain;

  ${lg} {
    margin: 4rem 0;
  }

  ${md} {
    width: 95%;
    filter: drop-shadow(0px 0px 2rem #000000);
  }

  ${xs} {
    width: 80%;
    margin: 2rem 0;
  }
`;
