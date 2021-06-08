import styled from "styled-components";
import { md, sm, xs } from "../../theme/breakpoints";

export const SponsorsSection = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin: 3rem 0;
  padding: 1.2rem;
`;
export const HeadingDiv = styled.div`
  font-weight: 800;
  font-size: 120px;

  color: white;
  margin: 0 0 1.5rem 0;

  ${md} {
    font-size: 6rem;
    padding: 0px 10px;
  }

  ${xs} {
    font-size: 3rem;
    line-height: 3rem;
  }
`;

export const Heading = styled.h1`
  color: white;
  margin: 0px 0px;
  font-size: 120px;
  ${md} {
    font-size: 6rem;
  }

  ${xs} {
    font-size: 3rem;
  }
`;
export const SubHeading = styled.h6`
  color: #b5b5b5;
  margin: 1.5rem 0px;
  font-size: 38px;
  ${md} {
    font-size: 2rem;
    // padding: 1rem;
  }

  ${xs} {
    font-size: 1.5rem;
    // line-height: 4rem;
    // padding: 1rem;
  }
`;

export const SponsorTitle = styled.h6`
  color: white;
  margin: 10px 0px 30px 0px;
  font-size: 70px;

  ${md} {
    font-size: 3rem;
    padding: 0px 10px;
  }

  ${xs} {
    font-size: 2rem;
    // line-height: 4rem;
  }
`;

export const SponsorSectionDiv = styled.div`
  margin: 0px 0px 3rem 0px;

  ${md} {
    margin-top: 0px;
  }
`;

export const SponsorCardSection = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;

  ${xs} {
    justify-content: center;
  }
`;

export const SponsorImgContainer = styled.div`
  border: 2px solid #fff;
  border-radius: 10px;
  padding: 1.5rem;
  cursor: pointer;

  ${xs} {
    margin-bottom: 1rem;
  }
`;

export const SponsorImg = styled.img`
  height: 70px;
  object-fit: contain;
  margin: 1rem 1rem;

  ${sm} {
    height: 3rem;
  }
`;
