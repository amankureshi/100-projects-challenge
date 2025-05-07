import React from "react";
import { Link } from "react-router-dom";
import { RiHome4Line } from "react-icons/ri";
import { FaRegHeart } from "react-icons/fa";
const Sidebar = () => {
  return (
    <>
      <DesktopSidebar />
      <MobileSidebar />
    </>
  );
};

export default Sidebar;

const DesktopSidebar = () => {
  return (
    <div className="p-3 md:p-10 border-r min-h-screen w-24 md:w-50 hidden sm:block">
      <div className="flex flex-col gap-20 sticky top-10 left-0">
        <div className="w-full">
          <img
            src="rest-logo.png"
            alt="logo"
            className="hidden md:block"
            width={130}
          />
          <img src="spoon.png" alt="logo" className="block md:hidden" />
        </div>
        <div className="flex flex-col items-center md:items-center gap-8">
          <Link to={"/"} className="flex gap-1">
            <RiHome4Line size={"24"} />
            <span className="font-bold hidden md:block">Home</span>
          </Link>
          <Link to={"/favorites"} className="flex gap-1">
            <FaRegHeart size={"20"} />
            <span className="font-bold hidden md:block">Favorites</span>
          </Link>
        </div>
      </div>
    </div>
  );
};

const MobileSidebar = () => {
  return (
    <div className="flex justify-center gap-10 border-t fixed w-full bottom-0 left-0 bg-white z-10 p-1 sm:hidden">
      <Link to={"/"}>
        <RiHome4Line size={"24"} className="cursor-pointer" />
      </Link>
      <Link to={"/favorites"}>
        <FaRegHeart size={"20"} className="cursor-pointer " />
      </Link>
    </div>
  );
};
