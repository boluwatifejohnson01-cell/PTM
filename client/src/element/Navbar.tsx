import React, { useEffect } from "react";
import Logo from "../assets/Group 1.png";
import Profile from "../assets/Group 6.png";
import { Link, useLocation } from "react-router-dom";

const Navbar = () => {
  const location = useLocation();
  useEffect(() => {
    console.log(location.pathname);
  });

  const allLinks = () => {
    return location.pathname === "/" ? (
      <>
        {" "}
        <Link
          to="/nuutask"
          className="text-[22px] font-medium text-[#292929] cursor-pointer hover:bg-[#292929] hover:text-[#FFFFFF]"
        >
          New Task
        </Link>
        <Link
          to="/task"
          className="text-[22px] font-medium text-[#292929] cursor-pointer hover:bg-[#292929] hover:text-[#FFFFFF]"
        >
          All Tasks
        </Link>
      </>
    ) : location.pathname === "/task" ? (
      <Link
        to="/nuutask"
        className="text-[22px] font-medium text-[#292929] cursor-pointer hover:bg-[#292929] hover:text-[#FFFFFF]"
      >
        New Task
      </Link>
    ) : location.pathname === "/nuutask" ? (
      <Link
        to="/task"
        className="text-[22px] font-medium text-[#292929] cursor-pointer hover:bg-[#292929] hover:text-[#FFFFFF]"
      >
        All Tasks
      </Link>
    ) : location.pathname === "/edittask" ? (
      <Link
        to="/task"
        className="text-[22px] font-medium text-[#292929] cursor-pointer hover:bg-[#292929] hover:text-[#FFFFFF]"
      >
        All Tasks
      </Link>
    ) : null;
  };
  return (
    <nav className="w-360 mx-auto py-6 px-40 border-b border-[#292929]">
      <div className="flex items-center justify-between">
        <Link to="/" className="flex items-center gap-3">
          <img src={Logo} alt="" />
          <p className="text-[28px] font-semibold text-[#2D0050] ">TaskDuty</p>
        </Link>

        <div className="flex items-center gap-6">
          {allLinks()}
          <img src={Profile} alt="" />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
