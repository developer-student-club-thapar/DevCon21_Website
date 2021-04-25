import styled from "styled-components";

import { md } from "../../theme/breakpoints";


// styles
export const Wrapper = styled.div`
    display: flex; 
    align-items: left;
    flex-direction: column;
    align-self: center;
    justify-content: center;
`;
export const StyledHeading = styled.h2`
    font-family: Inter;
    font-style: normal;
    font-weight: 800;
    font-size: 120px;
    line-height: 145px;
    color: white;

    ${md} {
 }
`;

export const StyledPara = styled.p`
    font-family: Inter;
    font-style: normal;
    font-weight: normal;
    font-size: 32px;
    line-height: 39px;
    color: white;
`;

export const AboutImage = styled.div`
    /* display: flex;
    flex-direction: row; */
    justify-content: center;
    margin: 2rem 0;
    padding-bottom: 280px;

    .logo1 {
    width: 400px;
    height: 300px;
    border-radius: 8px;
    margin: 10px 20px 10px 20px;
  }
  .logo2{
    width: 400px;
    height: 300px;
    top: 200px;
    border-radius: 8px;
    margin: 10px 150px 10px 10px;
  }
  .logo3{
    width: 60px;
    height: 300px;
    border-radius: 8px;
    margin: 10px 0px 10px 20px;
  }

`;
