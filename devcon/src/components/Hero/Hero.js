import React, { useContext } from "react";

import { ModalContext } from "../../context/ModalContext";
import teaserVideo from "../../images/teaser.mp4";
import {
  ActionBar,
  ActionButton,
  HeroSection,
  PrimaryTitle,
  SecondaryTitle,
  StyledVideo,
} from "./Hero.styles";

const Hero = () => {
  const { setIsVisible } = useContext(ModalContext);
  return (
    <HeroSection id="Home">
      <PrimaryTitle>DEVCON</PrimaryTitle>
      <SecondaryTitle>THE CODE AWAKENS</SecondaryTitle>
      <ActionBar>
        <ActionButton onClick={() => setIsVisible(true)}>Register</ActionButton>
        <ActionButton>Discord</ActionButton>
      </ActionBar>
      <StyledVideo autoPlay muted loop>
        <source src={teaserVideo} type="video/mp4" />
      </StyledVideo>
    </HeroSection>
  );
};

export default Hero;
