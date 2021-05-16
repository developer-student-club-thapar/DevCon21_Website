import React, { useContext, useEffect, useState } from "react";

import { ModalContext } from "../../context/ModalContext";
import useCountdownTimer from "../../hooks/useCountdownTimer";
import teaserVideo from "../../images/teaser.mp4";
import {
  ActionBar,
  ActionButton,
  CountdownTimer,
  HeroSection,
  PrimaryTitle,
  SecondaryTitle,
  StyledVideo,
} from "./Hero.styles";

const Hero = () => {
  const { setIsVisible } = useContext(ModalContext);
  const { countdown } = useCountdownTimer();
  const [timeLeft, setTimeLeft] = useState(countdown());

  useEffect(() => {
    const timer = setTimeout(() => {
      setTimeLeft(countdown());
    }, 1000);
    return () => clearTimeout(timer);
  });
  return (
    <HeroSection id="Home">
      <PrimaryTitle>DEVCON</PrimaryTitle>
      <SecondaryTitle>THE CODE AWAKENS</SecondaryTitle>
      <CountdownTimer>
        <div className="container">
          <h3 className="day">{timeLeft.textDay}</h3>
          <h3 className="subtitle">Day</h3>
        </div>
        <div className="container">
          <h3 className="hour">{timeLeft.textHour}</h3>
          <h3 className="subtitle">Hour</h3>
        </div>
        <div className="container">
          <h3 className="minute">{timeLeft.textMinute}</h3>
          <h3 className="subtitle">Minute</h3>
        </div>
        <div className="container">
          <h3 className="second">{timeLeft.textSecond}</h3>
          <h3 className="subtitle">Second</h3>
        </div>
      </CountdownTimer>
      <ActionBar>
        <ActionButton onClick={() => setIsVisible(true)}>Register</ActionButton>
        <ActionButton
          onClick={() => window.open("https://discord.gg/8khTrtWWBT")}
        >
          Discord
        </ActionButton>
      </ActionBar>
      <StyledVideo autoPlay muted loop>
        <source src={teaserVideo} type="video/mp4" />
      </StyledVideo>
    </HeroSection>
  );
};

export default Hero;
