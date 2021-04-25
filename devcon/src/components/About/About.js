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
    <Wrapper>
      <StyledHeading>About</StyledHeading>
      <ActionContainer>
        <ParaContainer>
          <StyledPara>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Interdum
            mauris est sed quisque. Facilisis risus mi sit lectus sed turpis
            ipsum mattis. Mauris dolor ultricies vel rhoncus nullam. Odio
            pharetra hac mattis pharetra et non.
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
