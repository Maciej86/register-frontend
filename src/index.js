import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import { store } from "./core/store";
import { App } from "./core/App";
import { GlobalStyle } from "./core/styles/GlobalStyle";
import { ThemeProvider } from "styled-components";
import reportWebVitals from "./reportWebVitals";
import { useSwitchTheme } from "./core/useSwitchTheme";

const RootComponent = () => {
  return (
    <ThemeProvider theme={useSwitchTheme()}>
      <GlobalStyle />
      <App />
    </ThemeProvider>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Provider store={store}>
    <RootComponent />
  </Provider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
