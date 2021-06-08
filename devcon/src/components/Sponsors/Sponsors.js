import React from "react";

import {
  SponsorsSection,
  Heading,
  HeadingDiv,
  SubHeading,
  SponsorSectionDiv,
  SponsorTitle,
  SponsorCardSection,
  SponsorImg,
  SponsorImgContainer,
} from "./Sponsors.styles";
import Devfolio from "../../images/devfolio.png";
import celo from "../../images/celo.png";
import tezos from "../../images/tezos.png";
import portis from "../../images/portis.png";
import polygon from "../../images/polygon.png";
import microsoft from "../../images/microsoft.svg";

const Sponsors = () => {
  return (
    <SponsorsSection id="Sponsors">
      <HeadingDiv>
        <Heading>Sponsors</Heading>
        <SubHeading>Our proud Sponsors</SubHeading>
      </HeadingDiv>
      <SponsorSectionDiv>
        <SponsorTitle>Gold Sponsors</SponsorTitle>
        <SponsorCardSection>
          <SponsorImgContainer
            onClick={() => {
              window.open("https://devfolio.co/");
            }}
          >
            <SponsorImg src={Devfolio} alt="Devfolio" />
          </SponsorImgContainer>
        </SponsorCardSection>
      </SponsorSectionDiv>
      <SponsorSectionDiv>
        <SponsorTitle>Silver Sponsors</SponsorTitle>
        <SponsorCardSection>
          <SponsorImgContainer
            onClick={() => {
              window.open("https://celo.org/");
            }}
          >
            <SponsorImg src={celo} alt="Celo" />
          </SponsorImgContainer>
          <SponsorImgContainer
            onClick={() => {
              window.open("https://tezos.com/");
            }}
          >
            <SponsorImg src={tezos} alt="Tezos" />
          </SponsorImgContainer>
          <SponsorImgContainer
            onClick={() => {
              window.open("https://polygon.technology/");
            }}
          >
            <SponsorImg src={polygon} alt="Polygon" />
          </SponsorImgContainer>
          <SponsorImgContainer
            onClick={() => {
              window.open("https://www.portis.io/");
            }}
          >
            <SponsorImg src={portis} alt="Portis" />
          </SponsorImgContainer>
        </SponsorCardSection>
      </SponsorSectionDiv>
      <SponsorSectionDiv>
        <SponsorTitle>Education Partner</SponsorTitle>
        <SponsorCardSection>
          <SponsorImgContainer
            onClick={() => {
              window.open("https://www.microsoft.com/en-in");
            }}
          >
            <SponsorImg src={microsoft} alt="Microsoft" />
          </SponsorImgContainer>
        </SponsorCardSection>
      </SponsorSectionDiv>
    </SponsorsSection>
  );
};

export default Sponsors;
