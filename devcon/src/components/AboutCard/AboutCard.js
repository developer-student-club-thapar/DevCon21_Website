import React, { useEffect } from "react";

import { Card, Disabled, StyledButton } from "./AboutCard.styles";
import gitBranch from "../../images/git-branch.svg";

const AboutCard = ({ setIsVisible }) => {
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://apply.devfolio.co/v2/sdk.js";
    script.async = true;
    script.defer = true;
    document.body.appendChild(script);
    return () => {
      document.body.removeChild(script);
    };
  }, []);
  return (
    <Card>
      <h1 className="heading">HackOverflow</h1>
      <p className="description">A 24hr Open Innovation Hackathon.</p>
      <div className="artwork">
        <img src={gitBranch} alt="git-branch" width="100%" height="auto" />
      </div>
      {/* <StyledButton onClick={() => setIsVisible(true)}>Register</StyledButton> */}
      {/* <Disabled>Registrations Starting Soon</Disabled> */}
      <div
        className="apply-button"
        data-hackathon-slug="devcon-hack"
        data-button-theme="dark"
        style={{ height: "44px", width: "312px", border: "1px solid #737373" }}
      ></div>
    </Card>
  );
};

export default AboutCard;
