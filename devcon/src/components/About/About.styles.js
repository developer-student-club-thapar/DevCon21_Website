import styled from "styled-components";

import { md, sm, xs } from "../../theme/breakpoints";

// styles
export const Wrapper = styled.div`
  display: flex;
  align-items: stretch;
  flex-direction: column;
  align-self: center;
  justify-content: center;
  margin: 1rem 0;
  ${md} {
    padding: 1.2rem;
  }
`;
export const StyledHeading = styled.h2`
  font-weight: 800;
  font-size: 120px;
  line-height: 145px;
  color: white;
  margin: 2rem 0 1rem 0;

  ${md} {
    font-size: 6rem;
  }

  ${xs} {
    font-size: 3rem;
    line-height: 4rem;
  }
`;

export const ActionContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;

  ${md},
  ${sm},
  ${xs} {
    flex-direction: column;
  }
`;

export const ParaContainer = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 80%;

  @media only screen and (max-width: 1640px) {
    max-width: 95%;
  }

  ${md} {
    max-width: 100%;
  }
`;

export const StyledPara = styled.p`
  font-weight: normal;
  font-size: 2rem;
  line-height: 2.25rem;
  color: white;
  position: relative;

  ${md} {
    font-size: 1.4rem;
  }

  ${xs} {
    font-size: 1rem;
    line-height: 1.5rem;
  }
`;

export const CardContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin: 2rem 0;
  height: 600px;

  ${md},
  ${sm},
  ${xs} {
    flex-direction: column;
    height: fit-content;
    align-items: center;
    justify-content: center;
  }
`;

export const SideAction = styled.div`
  align-self: center;
  display: flex;
  flex-direction: column;
  margin-left: 1.5rem;
  ${md},
  ${sm},
  ${xs} {
    flex-direction: row;
    margin-left: 0rem;
  }
`;

export const StyledPolygon = styled.img`
  margin: 1rem;
`;
