import styled from "styled-components";

import { md, xs } from "../../theme/breakpoints";

export const FooterWrapper = styled.div`
  display: flex;
  flex-direction: row;
  margin: 2rem 0;
  justify-content: space-between;

  ${md},
  ${xs} {
    flex-direction: column;
  }
`;

export const Heading = styled.h1`
  font-weight: 800;
  font-size: 120px;
  line-height: 145px;
  color: white;
  margin: 0 0 1rem 0;

  ${md} {
    font-size: 6rem;
    padding: 1rem;
  }

  ${xs} {
    font-size: 3rem;
    line-height: 4rem;
    padding: 1rem;
  }
`;

export const Email = styled.h3`
  font-size: 2.2rem;
  line-height: 3rem;
  font-weight: normal;
  margin-bottom: 0;
  margin-top: ${(props) => props.marginTop};
  padding: 0 1rem;

  ${md} {
    padding: 0 2rem;
    margin-top: 0;
  }

  ${xs} {
    font-size: 1.2rem;
    padding: 0 1rem;
    margin-top: 0;
  }
`;

export const CopyrightText = styled.p`
  font-size: 1.2rem;
  line-height: 1.4rem;
  font-weight: normal;
  margin: 4rem 0;
  padding: 0 1rem;

  ${md} {
    padding: 0 2rem;
    margin: 2rem 0;
  }

  ${xs} {
    padding: 0 1rem;
    font-size: 0.8rem;
    margin: 2rem 0;
  }
`;

export const UnderlineHyperLink = styled.a`
  text-decoration: underline;
  color: ${({ theme }) => theme.text};
  cursor: pointer;
`;

export const PrimarySection = styled.div`
  display: flex;
  flex-direction: column;
  width: fit-content;
`;

export const SecondarySection = styled(PrimarySection)`
  justify-content: space-evenly;

  ${md},
  ${xs} {
    flex-direction: row;
    width: 100%;
  }
`;

export const SocialLinks = styled.div`
  background-color: #c4c4c4;
  cursor: pointer;
  border-radius: 50%;
  width: 68px;
  height: 68px;
  display: flex;
  align-items: center;
  justify-content: center;

  svg {
    font-size: 1.6rem;
  }

  &:hover {
    background-color: #5bc0e8;
  }
`;
