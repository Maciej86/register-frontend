import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  html {
    height: 100%;
    box-sizing: border-box;
  }
  
  *,
  ::after,
  ::before {
    box-sizing: inherit;
  }
  
  body {
    height: 100%;
    margin: 0;
    font-family: 'Rajdhani', 'Arial', sans-serif;
    font-size: 16px;
    word-break: break-word;
  }

  button, textarea, input {
    font-family: 'Rajdhani', sans-serif;
    font-size: 16px;
}
  
  #root {
    height: 100%;
  }
`;
