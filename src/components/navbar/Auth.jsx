/** @format */

import React from "react";
import { Menu } from "@headlessui/react";
import Logo from "./img/profile.jpg";
import { BsFillCaretDownFill } from "react-icons/bs";
import { FiExternalLink } from "react-icons/fi";

const Auth = () => {
  return (
    <Menu as="nav" className={"relative"}>
      {({ open }) => (
        <>
          <Menu.Button
            className={
              "flex items-center h-8 rounded-3xl pr-2 bg-black hover:bg-active"
            }
          >
            <img
              src={Logo}
              alt=""
              className={`w-8 h-8 rounded-full p-px mr-2    
              ${open ? "bg-active" : "bg-black"}`}
            />
            <span className="text-sm font-semibold mr-2">Khayal Khudiyev</span>
            <span className={open && "rotate-180   "}>
              <BsFillCaretDownFill size={16} name="downDir" />
            </span>
          </Menu.Button>

          <Menu.Items
            className={
              "absolute top-full right-0 w-48  bg-active p-1 translate-y-2"
            }
          >
            <Menu.Item>
              {({ active }) => (
                  <a
                    className={` h-10 flex items-center px-2 text-sm rounded justify-between  ${
                      active && "bg-white bg-opacity-20"
                    }`}
                    href="#"
                  >
                    Account
                  <span className="flex items-center justify-center pr-3">
                    <FiExternalLink />
                  </span>
                  </a>
              )}
            </Menu.Item>
            <Menu.Item>
              {({ active }) => (
                <a
                  className={` h-10 flex items-center px-2 text-sm rounded  ${
                    active && "bg-white bg-opacity-20"
                  }`}
                  href="#"
                >
                  Profile
                </a>
              )}
            </Menu.Item>
            <Menu.Item>
              {({ active }) => (
                <a
                  className={` h-10 flex items-center px-2 text-sm rounded  ${
                    active && "bg-white bg-opacity-20"
                  }`}
                  href="#"
                >
                  Log out
                </a>
              )}
            </Menu.Item>
          </Menu.Items>
        </>
      )}
    </Menu>
  );
};

export default Auth;
