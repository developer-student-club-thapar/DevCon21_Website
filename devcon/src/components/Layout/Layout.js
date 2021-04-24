import React from "react";
import { ThemeProvider } from "styled-components";

import { GlobalStyles } from "../../theme/global";
import { darkTheme } from "../../theme/theme";
import Nav from "../Nav/Nav";
import { Main } from "./Layout.styles";

const Layout = ({ children }) => {
  return (
    <ThemeProvider theme={darkTheme}>
      <GlobalStyles />
      <Nav />
      <Main>{children}</Main>
    </ThemeProvider>
  );
};

export default Layout;
