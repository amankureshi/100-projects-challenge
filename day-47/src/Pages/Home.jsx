import React from "react";
import { IoSearchSharp } from "react-icons/io5";
import { LuSoup } from "react-icons/lu";
import { FaRegHeart } from "react-icons/fa";
import { PiHeartbeat } from "react-icons/pi";
import "./Home.css";
import RecipeCard from "../Components/RecipeCard";
const Home = () => {
  return (
    <div className="bg-[#faf9fb] w-full flex justify-center p-10 Home">
      <div className="max-w-screen-lg mx-auto">
        <form>
          <label className="input shadow-md flex gap-2 w-full p-1">
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
          <RecipeCard />
          <RecipeCard />
        </div>
      </div>
    </div>
  );
};
export default Home;
