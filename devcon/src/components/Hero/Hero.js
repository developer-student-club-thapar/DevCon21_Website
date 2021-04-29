import React, { useState } from "react";

import teaserVideo from "../../images/teaser.mp4";
import Modal from "../Modal/Modal";
import RegisterForm from "../RegisterForm/RegisterForm";
import {
  ActionBar,
  ActionButton,
  HeroSection,
  PrimaryTitle,
  SecondaryTitle,
  StyledVideo,
} from "./Hero.styles";

const Hero = () => {
  const [isVisible, setIsVisible] = useState(false);

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
      <Modal isVisible={isVisible} setIsVisible={setIsVisible}>
        <RegisterForm setIsVisible={setIsVisible} />
      </Modal>
    </HeroSection>
  );
};

export default Hero;
