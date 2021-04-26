import styled from "styled-components";

import { md } from "../theme/breakpoints";

export const IndexWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0 12rem;
  min-height: 100vh;
  overflow-x: hidden;

  @media only screen and (max-width: 1440px) {
    margin: 0 8rem;
  }

  @media only screen and (max-width: 1340px) {
    margin: 0 1rem;
  }

  ${md} {
    margin: 0;
  }
`;
