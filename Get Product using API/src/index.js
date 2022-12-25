import React from "react";
import ReactDOM from "react-dom/client";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter } from "react-router-dom";

import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap";

import "../node_modules/@fortawesome/fontawesome-free/css/all.css";
import MainApp from "./Component/MainApp";
const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <BrowserRouter>
      <>
       
          <MainApp />
          
      
      </>
    </BrowserRouter>
  </React.StrictMode>
);

reportWebVitals();
