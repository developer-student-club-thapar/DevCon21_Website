import React from "react";

import { CardAlt, StyledButtonAlt } from "./AboutCardAlt.styles";
import user from "../../images/user.svg";

const AboutCardAlt = ({ setIsVisible }) => {
  return (
    <CardAlt>
      <h1 className="heading">Designique</h1>
      <p className="description">
        Compete among some amazing developers and build a portfolio website
        using your creativity and designing.
      </p>
      <div className="artwork">
        <img src={user} alt="user" />
      </div>
      <StyledButtonAlt
        onClick={() => {
          setIsVisible(true);
        }}
      >
        Register
      </StyledButtonAlt>
    </CardAlt>
  );
};

export default AboutCardAlt;
