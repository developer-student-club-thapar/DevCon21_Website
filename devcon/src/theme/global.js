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

  /* width */
::-webkit-scrollbar {
  width: 10px;
}

/* Track */
::-webkit-scrollbar-track {
  background: #000;

}

/* Handle */
::-webkit-scrollbar-thumb {
  background: #666;
  border-radius: 10px;
}

/* Handle on hover */
::-webkit-scrollbar-thumb:hover {
  background: #555;
}
  `;
