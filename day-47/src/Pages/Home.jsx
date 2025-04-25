import React from "react";
import { IoSearchSharp } from "react-icons/io5";

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
      </div>
    </div>
  );
};
export default Home;
