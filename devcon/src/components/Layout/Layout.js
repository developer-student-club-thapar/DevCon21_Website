import React from "react";
import { ThemeProvider } from "styled-components";

import { GlobalStyles } from "../../theme/global";
import { darkTheme } from "../../theme/theme";
import Nav from "../Nav/Nav";
import { Main } from "./Layout.styles";
import { Helmet } from "react-helmet";
import ModalContextProvider from "../../context/ModalContext";

const Layout = ({ children }) => {
  return (
    <ThemeProvider theme={darkTheme}>
      <ModalContextProvider>
        <GlobalStyles />
        <Helmet>
          <title>DevCon</title>
          <link
            rel="stylesheet"
            type="text/css"
            charset="UTF-8"
            href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css"
          />
          <link
            rel="stylesheet"
            type="text/css"
            href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css"
          />
        </Helmet>
        <Nav />
        <Main>{children}</Main>
      </ModalContextProvider>
    </ThemeProvider>
  );
};

export default Layout;
