import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "../pages/homePage/Home";
import Leaderboard from "../pages/Achievement/Leaderboard";

const MainRoute = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/leaderboard" element={<Leaderboard />}></Route>
    </Routes>
  );
};

export default MainRoute;
