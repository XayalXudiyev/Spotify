/** @format */

import React from "react";
import { NavLink } from "react-router-dom";
import { BsFillPlayFill } from "react-icons/bs";

const Section = ({ title, more = false, items }) => {
  return (
    <section>


      <header className="flex justify-between mb-4">
        <NavLink to={more} className={"hover:underline"}>
          <h3 className="text-2xl text-white font-semibold  tracking-tight">
            {title}
          </h3>
        </NavLink>
        {more && (
          <NavLink className={"text-xs font-semibold  text-link hover:underline  tracking-wider"} to={more}>
            Show all
          </NavLink>
        )}
      </header>




      <div className="grid grid-cols-5 gap-x-6">
        {items.map((item) => (
          <NavLink key={item.id} to="/"
            className=" flex justify-center flex-col bg-footer  p-4 rounded hover:bg-active group">
            <div className="pt-[100%] relative">
              <img src={item.imgUrl} className="absolute inset-0 object-cover w-full h-full" />
              <button className="w-10 h-10 rounded-full group-hover:flex bg-primary bottom-2 right-2  absolute  items-center justify-center hidden">
                <BsFillPlayFill className="text-white text-xl " size={24} />
              </button>
            </div>
            <h6 className="overflow-hidden overflow-ellipsis whitespace-nowrap text-base font-semibold mt-4">
              {item.title}
            </h6>
            <p className="line-clamp-2 text-link text-sm mt-1 ">{item.desc}</p>
          </NavLink>
        ))}
      </div>
    </section>
  );
};

export default Section;
