import styled from "styled-components";

import { md } from "../theme/breakpoints";

export const IndexWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0 12rem;
  min-height: 100vh;
  overflow-x: hidden;

  ${md} {
    margin: 0;
  }
`;
