import React from "react";
import ReactDOM from "react-dom";
import "./stylesheets/style.css";
import App from "./Components/App";
import { BrowserRouter } from "react-router-dom";

ReactDOM.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
  document.getElementById("root")
);
