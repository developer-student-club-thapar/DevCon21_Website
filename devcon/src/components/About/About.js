import React from "react";
import { StaticImage } from "gatsby-plugin-image";
import { 
    Wrapper ,
    StyledHeading , 
    StyledPara , 
    AboutImage }
    from "./About.styles";

const AboutPage = () => {
    return (
        <Wrapper>
        <StyledHeading> About </StyledHeading>
        <StyledPara>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor 
        incididunt ut labore et dolore magna aliqua. Sollicitudin ac orci phasellus egestas
        tellus rutrum. Egestas tellus rutrum tellus pellentesque eu tincidunt tortor ali
        quam. Aenean euismod elementum nisi quis eleifend quam adipiscing. Senectus et 
        netus et malesuada fames ac turpis egestas. Amet risus nullam eget felis eget nunc
        lobortis. Nisi quis eleifend quam adipiscing vitae proin. Nulla aliquet enim tortor
        at auctor urna nunc id. Ullamcorper eget nulla facilisi etiam dignissim diam quis
        enim lobortis. Egestas purus viverra accumsan in. Adipiscing at in tellus integer
        feugiat scelerisque varius morbi enim. Feugiat sed lectus vestibulum mattis ullamc
        orper.
        </StyledPara>

        <AboutImage>

            <StaticImage
            src="../../images/test-images/1.jpg"
            alt="dev1"
            loading="eager"
            className="logo1"
            />

            <StaticImage
            src="../../images/test-images/2.jpg"
            alt="dev2"
            loading="eager"
            className="logo2"
            />

            <StaticImage
            src="../../images/test-images/3.jpg"
            alt="dev3"
            loading="eager"
            className="logo3"
            />

        </AboutImage>
        </Wrapper>
    );
}

export default AboutPage
