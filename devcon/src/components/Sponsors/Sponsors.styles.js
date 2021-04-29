import styled from "styled-components";
import { md, xs } from "../../theme/breakpoints";

export const SponsorsSection = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin: 3rem 0;
`;
export const HeadingDiv = styled.div`
  font-weight: 800;
  font-size: 120px;

  color: white;
  margin: 0 0 1rem 0;

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
  margin: 0px 0px;
  font-size: 42px;
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
  font-size: 72px;

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
  margin: 30px 0px;
  ${md} {
    margin-top: 0px;
  }
`;

export const SponsorCardSection = styled.div`
  display: flex;
  flex-wrap: wrap;
  // justify-content: ;
`;
export const Card = styled.div`
  flex: 1 0 25%;
  // width: 352px;
  height: 105px;
  margin: 10px 20px;
  background-color: #c4c4c4;
  border-radius: 24px;
`;
