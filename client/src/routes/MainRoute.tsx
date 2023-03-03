import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "../pages/homePage/Home";
import Leaderboard from "../pages/Achievement/Leaderboard";
import Games from "../pages/Games/Games";
import Result from "../pages/resultPage/Result";

const MainRoute = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/leaderboard" element={<Leaderboard />}></Route>
      <Route path="/game" element={<Games/>} />
      <Route path="/result" element={<Result/>}/>
    </Routes>
  );
};

export default MainRoute;
