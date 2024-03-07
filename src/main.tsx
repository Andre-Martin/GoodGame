import ReactDOM from "react-dom/client";
import React from "react";

import { BrowserRouter as Router } from "react-router-dom";

import App from "./App";
import "./css/sketchy.css";
import "./css/styles.css";

import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <Router>
      <App />
    </Router>
  </React.StrictMode>
);
