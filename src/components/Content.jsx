/** @format */

import React from "react";
import Navbar from "../components/Navbar";
import Home from "../views/Home";
import Search from "../views/Search";
import Library from "../views/Library";
import { Route, Routes } from "react-router-dom";
import CreatePlaylist from "../views/CreatePlaylist";
import LikedSongs from "../views/LikedSongs";

const Content = () => {
  return (
    <main className="flex-auto overflow-auto">
      <Navbar />
      <div className="px-8 py-5">
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/search" element={<Search />} />
          <Route path="/library" element={<Library />} />
          <Route path="/create-playlist" element={<CreatePlaylist />} />
          <Route path="/liked-songs" element={<LikedSongs />} />
        </Routes>
      </div>
    </main>
  );
};

export default Content;
