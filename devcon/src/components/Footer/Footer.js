import React from "react";
import { GrInstagram, GrLinkedin, GrFacebook, GrTwitter } from "react-icons/gr";

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
        <Email marginTop={"2rem"}>thedeepanshuweb@ieee.org</Email>
        <Email marginTop={"1rem"}>(+91) 98683 83471/88104 21579</Email>
        <CopyrightText>
          © Rights reserved by{" "}
          <UnderlineHyperLink href="https://ieee.ncuindia.edu/">
            IEEE NCU
          </UnderlineHyperLink>{" "}
          and{" "}
          <UnderlineHyperLink href="https://dsctiet.tech/#/">
            DSC TIET
          </UnderlineHyperLink>
        </CopyrightText>
      </PrimarySection>
      <SecondarySection>
        <SocialLinks
          onClick={() => {
            window.open("https://www.instagram.com/ieee_ncu/");
          }}
        >
          <GrInstagram />
        </SocialLinks>
        <SocialLinks
          onClick={() => {
            window.open("https://www.linkedin.com/company/ieee-ncu/mycompany/");
          }}
        >
          <GrLinkedin />
        </SocialLinks>
        <SocialLinks
          onClick={() => {
            window.open("https://www.facebook.com/ieee.ncu/");
          }}
        >
          <GrFacebook />
        </SocialLinks>
        <SocialLinks
          onClick={() => {
            window.open("https://twitter.com/IeeeNcu");
          }}
        >
          <GrTwitter />
        </SocialLinks>
      </SecondarySection>
    </FooterWrapper>
  );
};

export default Footer;
