import React from "react";
import { ThemeProvider } from "styled-components";

import { GlobalStyles } from "../../theme/global";
import { darkTheme } from "../../theme/theme";
import { Main } from "./Layout.styles";

const Layout = ({ children }) => {
  return (
    <ThemeProvider theme={darkTheme}>
      <GlobalStyles />
      <Main>{children}</Main>
    </ThemeProvider>
  );
};

export default Layout;
