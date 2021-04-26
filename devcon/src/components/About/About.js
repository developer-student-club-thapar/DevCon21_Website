import React from "react";

import {
  Wrapper,
  StyledHeading,
  StyledPara,
  CardContainer,
  ActionContainer,
  ParaContainer,
  SideAction,
  StyledPolygon,
} from "./About.styles";
import AboutCard from "../AboutCard/AboutCard";
import AboutCardAlt from "../AboutCardAlt/AboutCardAlt";
import Polygon from "../../images/Polygon.svg";

const About = () => {
  return (
    <Wrapper id="About">
      <StyledHeading>About</StyledHeading>
      <ActionContainer>
        <ParaContainer>
          <StyledPara>
            A wide assortment of events all been compiled in a 3 days event, never seen before sessions and a lot more. It is a grand opportunity to learn and network. This event will give students insights into a multitude of technological aspects.
The event provides an opportunity for the attendees to figure out their path of choice by witnessing eminent personalities as keynote speakers from various domains talk and share their experience on the same.

          </StyledPara>

          <CardContainer>
            <AboutCard />
            <AboutCardAlt />
          </CardContainer>
        </ParaContainer>
        <SideAction>
          <StyledPolygon src={Polygon} alt="polygon" />
          <StyledPolygon src={Polygon} alt="polygon" />
          <StyledPolygon src={Polygon} alt="polygon" />
        </SideAction>
      </ActionContainer>
    </Wrapper>
  );
};

export default About;
