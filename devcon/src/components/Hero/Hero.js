import React from "react";

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
  return (
    <HeroSection>
      <PrimaryTitle>DEVCON</PrimaryTitle>
      <SecondaryTitle>THE CODE AWAKENS</SecondaryTitle>
      <ActionBar>
        <ActionButton>Register</ActionButton>
        <ActionButton>Discord</ActionButton>
      </ActionBar>
      <StyledVideo autoPlay muted loop>
        <source src={teaserVideo} type="video/mp4" />
      </StyledVideo>
    </HeroSection>
  );
};

export default Hero;
