import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import { RouterProvider } from "react-router-dom";
import { store } from "./store/store";
import { RouterSetings } from "./core/setingsNavigation";
import { GlobalStyle } from "./core/styles/GlobalStyle";
import { useSwitchTheme } from "./core/hooks/useSwitchTheme";
import { ThemeProvider } from "styled-components";
import reportWebVitals from "./reportWebVitals";

const RootComponent = () => {
  return (
    <ThemeProvider theme={useSwitchTheme()}>
      <GlobalStyle />
      <RouterProvider router={RouterSetings} />
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
