import React, { useContext } from "react";

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
import { ModalContext } from "../../context/ModalContext";

const About = () => {
  const { setIsVisible } = useContext(ModalContext);

  return (
    <Wrapper id="About">
      <StyledHeading>About</StyledHeading>
      <ActionContainer>
        <ParaContainer>
          <StyledPara>
            DevCon 2021 is open for anyone to join, and caters to everyone
            interested in Design and Development of software organized by IEEE
            NCU. The theme of the events is Design and Development, focusing on
            both, the visual aspect of our product software, as well as
            efficiency in our programs.
            <br />
            <br />
            We have webinars, workshops, tutorials, lectures and speeches by
            some very competent and successful individuals in the industry
            planned. We are expecting to cater to a group of hundreds of young
            developers who aim to grow and prosper with us over the course of
            these events.
          </StyledPara>

          <CardContainer>
            <AboutCard setIsVisible={setIsVisible} />
            <AboutCardAlt setIsVisible={setIsVisible} />
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
