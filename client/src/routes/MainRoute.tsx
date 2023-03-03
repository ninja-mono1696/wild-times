import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "../pages/homePage/Home";
import Achievement from "../pages/Achievement/Achievement";

const MainRoute = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/leaderboard" element={<Achievement />}></Route>
    </Routes>
  );
};

export default MainRoute;
