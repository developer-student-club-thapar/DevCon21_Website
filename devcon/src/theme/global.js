import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
  *,
  *::after,
  *::before {
    box-sizing: border-box;
  }
  body {
    background: ${({ theme }) => theme.body};
    background-repeat: no-repeat;
    color: ${({ theme }) => theme.text};
    margin: 0;
    padding: 0;
    font-family: "Inter", sans-serif;
    overflow-x: hidden;
  }
  `;
