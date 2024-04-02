import ReactDOM from "react-dom/client";
import React from "react";

import { BrowserRouter as Router } from "react-router-dom";
import { Provider } from "react-redux";

import App from "./App";
import { setupStore } from "./features/store";

import { ThemeProvider } from "@emotion/react";
import theme from "./utils/theme";

import "./css/styles.css";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <Router>
      <ThemeProvider theme={theme}>
        <Provider store={setupStore()}>
          <App />
        </Provider>
      </ThemeProvider>
    </Router>
  </React.StrictMode>
);
