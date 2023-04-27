/** @format */

import React from "react";
import Logo from "../img/logo.svg";
import Menu from "./sidebar/Menu";

const Sidebar = () => {
  return (
    <aside className="w-60 py-6 flex flex-col  ">
      <a href="" className="mb-5 px-6">
        <img src={Logo} alt="" className="h-10" />
      </a>
      <Menu />
    </aside>
  );
};

export default Sidebar;
