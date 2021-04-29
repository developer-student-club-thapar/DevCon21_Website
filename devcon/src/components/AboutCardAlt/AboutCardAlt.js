import React from "react";

import { CardAlt, StyledButtonAlt } from "./AboutCardAlt.styles";
import user from "../../images/user.svg";

const AboutCardAlt = ({ setIsVisible }) => {
  return (
    <CardAlt>
      <h1 className="heading">Designique</h1>
      <p className="description">
        A portfolio building competition for 1st and 2nd year students
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
