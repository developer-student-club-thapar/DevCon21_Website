import styled from "styled-components";
import { md, xs } from "../../theme/breakpoints";

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  padding: 1rem;
  justify-content: space-around;
  background-color: #1c1c1c;
  height: 100px;
  align-items: center;

  ${xs} {
    flex-direction: column;
    height: fit-content;

    img {
      margin: 0 0 1rem 0;
    }
  }
`;

export const StyledLogo = styled.img`
  height: 40px;
  object-fit: contain;

  ${md} {
    height: 30px;
  }
`;
