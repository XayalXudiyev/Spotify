/** @format */

import React from "react";
import { AiFillHome, AiOutlinePlus, AiFillHeart } from "react-icons/ai";
import { FaSearch } from "react-icons/fa";
import { BiLibrary } from "react-icons/bi";
import { NavLink } from "react-router-dom";

const Menu = () => {
  return (
    <nav className="px-2">
      <ul className="flex flex-col ">
        <li>
          <NavLink
            exact
            to="/home"
            className="flex items-center h-10 gap-x-4  text-sm font-semibold rounded text-link  hover:text-white px-4"
          >
            <AiFillHome size={24} />
            Home
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/search"
            className="flex items-center h-10 gap-x-4  text-sm font-semibold  rounded text-link  hover:text-white px-4 "
          >
            <FaSearch className="" size={24} />
            Search
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/library"
            className="flex items-center h-10 gap-x-4  text-sm font-semibold  rounded text-link  hover:text-white px-4 "
          >
            <BiLibrary className="" size={24} />
            Your Library
          </NavLink>
        </li>
      </ul>

      <ul className="mt-6">
        <li>
          <NavLink
            exact
            to="/create-playlist"
            className="flex items-center h-10 gap-x-4  text-sm font-semibold rounded text-link  hover:text-white px-4"
          >
            <AiOutlinePlus
              size={24}
              style={{
                background: "#b3b3b3",
                color: "black",
                padding: "5px",
                borderRadius: "2px",
              }}
            />
            Create Playlist
          </NavLink>
        </li>
        <li>
          <NavLink
            exact
            to="/liked-songs"
            className="flex items-center h-10 gap-x-4  text-sm font-semibold rounded text-link  hover:text-white px-4"
          >
            <AiFillHeart
              style={{
                color: "#b3b3b3",
                padding: "5px",
                background:
                  "linear-gradient(90deg, rgba(75,72,131,1) 0%, rgba(71,71,193,1) 35%, rgba(164,139,139,1) 100%)",
                borderRadius: "2px",
              }}
              size={24}
            />
            Liked Songs
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Menu;
