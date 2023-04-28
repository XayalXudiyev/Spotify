/** @format */

import React from "react";
import { GrFormPrevious, GrFormNext } from "react-icons/gr";
import { useHistory, useLocation, useNavigate } from "react-router-dom";

const Navigation = () => {
  const navigate = useNavigate();


 

  const handleBack = () => {
    navigate(-1);
  };
  const handleForward = () => {
    navigate(+1);
  };
  return (
    <nav className="flex items-center gap-x-4 ">
      <button
        onClick={handleBack}
        className="w-8 h-8   bg-white flex items-center justify-center rounded-full bg-opacity-70"
      >
        <GrFormPrevious size={22} name="prev" />
      </button>
      <button
        onClick={handleForward}
        className="w-8 h-8 flex items-center  bg-white justify-center rounded-full bg-opacity-70"
      >
        <GrFormNext size={22} name="next" />
      </button>
    </nav>
  );
};

export default Navigation;
