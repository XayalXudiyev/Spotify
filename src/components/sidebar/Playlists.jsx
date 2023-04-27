/** @format */

import React from "react";

const Playlists = () => {
  return (
    <div className="mx-6 mt-2 py-2  flex-auto overflow-auto border-t border-white border-opacity-20">
      <ul>
        {new Array(30).fill(
          <li>
            <a
              href=""
              className="text-sm text-link hover:text-white flex h-8 items-center"
            >
                playlist 1
            </a>
          </li>
        )}
      </ul>
    </div>
  );
};

export default Playlists;
