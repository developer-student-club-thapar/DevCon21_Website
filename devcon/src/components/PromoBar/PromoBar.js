import React from "react";

import { CollegeLogo, Container, StyledLogo } from "./PromoBar.styles";
import dsc from "../../images/DSC-logo-white.png";
import ieee from "../../images/ieee_ncu_sb_white.png";
import ncu from "../../images/ncu_full_color.png";

const PromoBar = () => {
  return (
    <Container>
      <StyledLogo src={dsc} alt="dsc-tiet" />
      <CollegeLogo src={ncu} alt="ncu" />
      <StyledLogo src={ieee} alt="ieee-ncu" />
    </Container>
  );
};

export default PromoBar;
