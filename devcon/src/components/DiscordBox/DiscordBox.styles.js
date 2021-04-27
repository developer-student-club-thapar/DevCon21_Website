import styled from "styled-components";
import { md, xs } from "../../theme/breakpoints";

export const Box = styled.div`
  height: 450px;
  width: 100%;
  background-color: ${({ theme }) => theme.text};
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border-radius: 60px;
  margin: 4rem 0;

  h1 {
    color: #000;
    font-weight: 900;
    font-size: 4rem;
    margin: 0;
  }

  h3 {
    color: #000;
    font-weight: 500;
    font-size: 2rem;
    margin: 0;
  }

  .discord-logo {
    height: 100px;
    object-fit: contain;
    margin: 3rem 0 1rem 0;
  }

  ${md} {
    margin: 4rem auto;
    width: 95%;
    height: 400px;

    h1 {
      font-size: 3rem;
    }

    h3 {
      font-size: 1.5rem;
    }
  }

  ${xs} {
    margin: 4rem auto;
    width: 95%;
    height: 350px;

    h1 {
      font-size: 2rem;
    }

    h3 {
      font-size: 1rem;
    }

    .discord-logo {
      height: 4rem;
    }
  }
`;