import styled, { createGlobalStyle, css } from "styled-components";

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
    background: ${({ theme }) => theme.color.primary_color};
    font-family: 'Rajdhani', 'Arial', sans-serif;
    font-size: 16px;
    color: ${({ theme }) => theme.color.light};
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

export const Main = styled.main`
  width: calc(100% - ${({ theme }) => theme.size.width_nav});
  margin-left: ${({ theme }) => theme.size.width_nav};
  color: ${({ theme }) => theme.color.light};
  transition: width 0.3s, margin-left 0.3s;

  ${({ $toggleNav }) =>
    $toggleNav &&
    css`
      width: 100%;
      margin-left: 0;
    `}

  @media (max-width: ${({ theme }) => theme.media.hidden_nav}) {
    width: 100%;
    margin-left: 0;
  }
`;

export const Content = styled.section`
  padding: 10px 20px;
`;
