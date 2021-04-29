import React from "react";

import { Card, StyledButton } from "./AboutCard.styles";
import gitBranch from "../../images/git-branch.svg";

const AboutCard = ({ setIsVisible }) => {
  return (
    <Card>
      <h1 className="heading">HackOverflow</h1>
      <p className="description">
        A 24hr hackathon for budding developers with alot of prizes
      </p>
      <div className="artwork">
        <img src={gitBranch} alt="git-branch" />
      </div>
      <StyledButton onClick={() => setIsVisible(true)}>Register</StyledButton>
    </Card>
  );
};

export default AboutCard;
