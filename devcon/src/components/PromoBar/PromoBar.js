import React from "react";

import { CollegeLogo, Container, StyledLogo, StyledLogo2 } from "./PromoBar.styles";
import dsc from "../../images/DSC-logo-white.png";
import ieee from "../../images/ieee_ncu_sb_white.png";
import ncu from "../../images/ncu_full_color.png";

const PromoBar = () => {
  return (
    <Container>
      <StyledLogo src={ieee} alt="ieee-ncu" />
      <CollegeLogo src={ncu} alt="ncu" />
      <StyledLogo2 src={dsc} alt="dsc-tiet" />
    </Container>
  );
};

export default PromoBar;
