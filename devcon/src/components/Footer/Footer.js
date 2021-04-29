import React from "react";

import {
  CopyrightText,
  Email,
  FooterWrapper,
  Heading,
  PrimarySection,
  SecondarySection,
  SocialLinks,
  UnderlineHyperLink,
} from "./Footer.styles";

const Footer = () => {
  return (
    <FooterWrapper id="Contact">
      <PrimarySection>
        <Heading>Contact Us</Heading>
        <Email marginTop={"2rem"}>kushdaga@hotmail.com</Email>
        <Email marginTop={"1rem"}>(+91) 9205308182</Email>
        <CopyrightText>
          © Rights reserved by{" "}
          <UnderlineHyperLink href="https://dsctiet.tech/#/">
            DSC TIET
          </UnderlineHyperLink>{" "}
          and{" "}
          <UnderlineHyperLink href="https://ieee.ncuindia.edu/">
            IEEE NCU
          </UnderlineHyperLink>
        </CopyrightText>
      </PrimarySection>
      <SecondarySection>
        <SocialLinks />
        <SocialLinks />
        <SocialLinks />
        <SocialLinks />
      </SecondarySection>
    </FooterWrapper>
  );
};

export default Footer;
