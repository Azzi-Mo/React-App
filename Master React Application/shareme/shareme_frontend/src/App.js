import React from "react";
import { Routes, Route, useNavigate } from "react-router-dom";
import Home from "./container/Home";
import Login from "./component/Login";


const App = () => {
  return (
    <Routes>
      <Route path="/*" element={<Home />} />
      <Route path="login" element={<Login />} />
    </Routes>
  );
};

export default App;
