import React from "react";

import { Card, Disabled, StyledButton } from "./AboutCard.styles";
import gitBranch from "../../images/git-branch.svg";

const AboutCard = ({ setIsVisible }) => {
  return (
    <Card>
      <h1 className="heading">HackOverflow</h1>
      <p className="description">
        A 24hr Open Innovation Hackathon.
      </p>
      <div className="artwork">
        <img src={gitBranch} alt="git-branch" />
      </div>
      {/* <StyledButton onClick={() => setIsVisible(true)}>Register</StyledButton> */}
      <Disabled>Registrations Starting Soon</Disabled>
    </Card>
  );
};

export default AboutCard;
