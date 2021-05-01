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
