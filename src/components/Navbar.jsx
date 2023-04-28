/** @format */

import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "../views/Home";
import Library from "../views/Library";
import Search from "../views/Search";
import Auth from "./navbar/Auth";
import Navigation from "./navbar/Navigation";

const Navbar = () => {
  return (
    <nav className="h-[3.75rem] flex items-center justify-between px-8 ">
      <Navigation />
      <Routes>
        <Route path="/search" element={<Search />} />
        <Route path="/library" element={<Library />} />
      </Routes>
      <Auth />
    </nav>
  );
};

export default Navbar;
