/** @format */

import React from "react";
import { AiFillHome } from "react-icons/ai";
import { FaSearch } from "react-icons/fa";
import { BiLibrary } from "react-icons/bi";

const Menu = () => {
  return (
    <nav className="px-2">
      <ul className="flex flex-col ">
        <li>
          <a
            href="#"
            className="flex items-center h-10 gap-x-4  text-sm font-semibold text-white rounded  hover:text-white px-4 bg-active"
          >
            {" "}
            <AiFillHome className=" hover:to-white" />
            Ana Sayfa
          </a>
        </li>
        <li>
          <a
            href="#"
            className="flex items-center h-10 gap-x-4  text-sm font-semibold text-link rounded  hover:text-white px-4"
          >
            <FaSearch className=" hover:to-white"  />
            Ara
          </a>
        </li>
        <li>
          <a
            href="#"
            className="flex items-center h-10 gap-x-4  text-sm font-semibold text-link rounded  hover:text-white px-4"
          >
            <BiLibrary className=" hover:to-white"  />
            Kitaplığın{" "}
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default Menu;
