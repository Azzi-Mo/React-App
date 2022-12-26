import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
// import App from './App';

import "./Componenet/Css Style/MainStyle.css";
import reportWebVitals from "./reportWebVitals";

import MainComponent from "./Componenet/MainComponent";
import { BrowserRouter } from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <MainComponent />
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
