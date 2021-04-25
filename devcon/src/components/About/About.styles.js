import styled from "styled-components";

import { md } from "../../theme/breakpoints";

// styles
export const Wrapper = styled.div`
  display: flex;
  align-items: stretch;
  flex-direction: column;
  align-self: center;
  justify-content: center;
`;
export const StyledHeading = styled.h2`
  font-weight: 800;
  font-size: 120px;
  line-height: 145px;
  color: white;
  margin: 2rem 0 1rem 0;

  ${md} {
  }
`;

export const ActionContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

export const ParaContainer = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 80%;

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
`;

export const CardContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin: 2rem 0;
  height: 600px;
`;

export const SideAction = styled.div`
  align-self: center;
  display: flex;
  flex-direction: column;
`;

export const RoundButton = styled.button`
  background-color: #c4c4c4;
  height: 80px;
  width: 80px;
  border-radius: 50%;
  margin: 1rem;
  cursor: pointer;

  &:focus {
    outline: none;
  }
`;
