import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  html {
    font-size: 10px;
  }

  body {
    font-family: 'Inter', sans-serif;
    background-color: ${({ theme }) => theme.colors.primary}; 
    font-size: 1.6rem;
  }

  a, a:hover, a:focus, a:active {
      text-decoration: none;
      color: inherit;
  }
  
  button, input {
    font-size: inherit;
    color: inherit;
  }

  img {
    display: block;
    width: 100%;
  }
`;
