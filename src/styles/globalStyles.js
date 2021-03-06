import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    -webkit-tap-highlight-color: transparent;
    user-select: none;
  }

  html {
    font-size: 10px;
  }

  ::-webkit-scrollbar {
      width: 0;  
      background: transparent; 
  }


  body {
    font-family: 'Inter', sans-serif;
    font-size: 1.6rem;
    background-color: #000;
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
