import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "../pages/homePage/Home";

const MainRoute = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
    </Routes>
  );
};

export default MainRoute;
