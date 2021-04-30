import React from "react";

import {
  SponsorsSection,
  Heading,
  HeadingDiv,
  SubHeading,
  SponsorSectionDiv,
  SponsorTitle,
  SponsorCardSection,
  // Card,
} from "./Sponsors.styles";

const Sponsors = () => {
  return (
    <SponsorsSection id="Sponsors">
      <HeadingDiv>
        <Heading>Sponsors</Heading>
        <SubHeading>Our proud Sponsors</SubHeading>
      </HeadingDiv>
      <SponsorSectionDiv>
        <SponsorTitle>Title Sponsors</SponsorTitle>
        <SponsorCardSection>
          {/* <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card /> */}
          <SubHeading style={{ margin: "auto" }}>
            To be announced soon
          </SubHeading>
        </SponsorCardSection>
      </SponsorSectionDiv>
      <SponsorSectionDiv>
        <SponsorTitle>Other Sponsors</SponsorTitle>
        <SponsorCardSection>
          {/* <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card /> */}
          <SubHeading style={{ margin: "auto" }}>
            To be announced soon
          </SubHeading>
        </SponsorCardSection>
      </SponsorSectionDiv>
    </SponsorsSection>
  );
};

export default Sponsors;
