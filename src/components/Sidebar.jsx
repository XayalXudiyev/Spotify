/** @format */

import React from "react";
import Logo from "../img/logo.svg";
import Menu from "./sidebar/Menu";
import Playlists from "./sidebar/Playlists";

const Sidebar = () => {
  return (
    <aside className="w-60 pt-6 flex flex-col  flex-shrink-0  bg-black ">
      <a href="" className="mb-7 px-6">
        <img src={Logo} alt="" className="h-10" />
      </a>
      <Menu />
      <Playlists />
    </aside>
  );
};

export default Sidebar;
