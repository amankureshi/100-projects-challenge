import React from "react";
import { IoSearchSharp } from "react-icons/io5";
import { LuSoup } from "react-icons/lu";
import { FaRegHeart } from "react-icons/fa";

const Home = () => {
  return (
    <div className="bg-[#faf9fb] w-full flex justify-center p-10">
      <div className="max-w-screen-lg mx-auto">
        <form>
          <label className="input shadow-md flex items-center gap-2 w-full">
            <IoSearchSharp size={24} />
            <input
              type="text"
              className="text-sm md:text-md grow "
              placeholder="what do you want to cook today ?"
            />
          </label>
        </form>
        <h1 className="font-bold text-3cl md:text-5xl mt-4">
          Recommended Recipes
        </h1>
        <p className="text-slate-500 font-semibold ml-1 my-2 text-sm tracking-tight">
          Popular choices
        </p>
        <div className="grid gap-3 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 ">
          <div className="flex flex-col rounded-md bg-[#ecf7d4] overflow-hidden p-3 relative">
            <a href="" className="relative h-33">
              <img
                src="https://cdn.pixabay.com/photo/2023/09/25/22/08/ai-generated-8276129_1280.jpg"
                alt="recipe-image"
                className="rounded-md w-full h-full object-cover cursor-pointer"
              />
              <div className="absolute bottom-2 left-2 bg-white rounded-full p-1 cursor-pointer flex items-center gap-1 text-sm">
                <LuSoup size={18} />4 Searving
              </div>
              <div className="absolute top-1 right-2 bg-white rounded-full p-20 cursor-pointer">
                <FaRegHeart
                  size={"20"}
                  className="hover:fill-red-500 hover:text-red-500"
                />
              </div>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Home;
