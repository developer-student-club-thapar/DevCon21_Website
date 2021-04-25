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
        <br />
        <br />
        Pellentesque adipiscing commodo elit at imperdiet dui accumsan sit. Enim blandit 
        volutpat maecenas volutpat blandit aliquam etiam erat. Posuere urna nec tincidunt 
        praesent semper feugiat nibh sed. Nibh ipsum consequat nisl vel. Quam pellentesque
        nec nam aliquam sem et tortor consequat. Euismod quis viverra nibh cras pulvinar.
        A diam maecenas sed enim ut sem viverra. Sed viverra ipsum nunc aliquet bibendum 
        enim facilisis gravida. Vel elit scelerisque mauris pellentesque pulvinar pellente
        sque. Porta nibh venenatis cras sed felis eget velit aliquet. Ullamcorper morbi tin
        cidunt ornare massa. Quis vel eros donec ac odio tempor orci dapibus ultrices. Pul
        vinar pellentesque habitant morbi tristique senectus et netus. Nunc mattis enim ut 
        tellus elementum sagittis vitae et.
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
