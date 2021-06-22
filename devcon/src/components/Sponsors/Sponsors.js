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
import taskade from "../../images/taskade.png";
import codingBlocks from "../../images/cblogo.png";
import axure from "../../images/Axure_Logo.png";
import miro from "../../images/miro.png";
import streamyard from "../../images/streamyard.png";
import codeforcause from "../../images/cfc.png";
import sketch from "../../images/sketch.png";

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
          <SponsorImgContainer
            onClick={() => {
              window.open("https://www.taskade.com/");
            }}
          >
            <SponsorImg src={taskade} alt="Taskade" />
          </SponsorImgContainer>
          <SponsorImgContainer
            onClick={() => {
              window.open("https://codingblocks.com/");
            }}
          >
            <SponsorImg src={codingBlocks} alt="Coding Blocks" />
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
          <SponsorImgContainer
            onClick={() => {
              window.open("https://www.axure.com/");
            }}
          >
            <SponsorImg src={axure} alt="Axure" />
          </SponsorImgContainer>
          <SponsorImgContainer
            onClick={() => {
              window.open("https://miro.com/");
            }}
          >
            <SponsorImg src={miro} alt="Miro" />
          </SponsorImgContainer>
        </SponsorCardSection>
      </SponsorSectionDiv>
      <SponsorSectionDiv>
        <SponsorTitle>Bronze Sponsors</SponsorTitle>
        <SponsorCardSection>
          <SponsorImgContainer
            onClick={() => {
              window.open("https://www.sketch.com/");
            }}
          >
            <SponsorImg src={sketch} alt="Sketch" />
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
      <SponsorSectionDiv>
        <SponsorTitle>Community Partner</SponsorTitle>
        <SponsorCardSection>
          <SponsorImgContainer
            onClick={() => {
              window.open("https://codeforcause.org/");
            }}
          >
            <SponsorImg src={codeforcause} alt="Code For Cause" />
          </SponsorImgContainer>
        </SponsorCardSection>
      </SponsorSectionDiv>
      <SponsorSectionDiv>
        <SponsorTitle>Streaming Partner</SponsorTitle>
        <SponsorCardSection>
          <SponsorImgContainer
            onClick={() => {
              window.open("https://streamyard.com/");
            }}
          >
            <SponsorImg src={streamyard} alt="StreamYard" />
          </SponsorImgContainer>
        </SponsorCardSection>
      </SponsorSectionDiv>
    </SponsorsSection>
  );
};

export default Sponsors;
