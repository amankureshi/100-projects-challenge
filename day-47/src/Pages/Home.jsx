import React from "react";
import { IoSearchSharp } from "react-icons/io5";

const Home = () => {
  return (
    <div className="bg-[#faf9fb] flex-1 p-10">
      <div className="max-w-screen-lg mx-auto">
        <form>
          <label className="input shadow-md flex items-center gap-2">
            <IoSearchSharp size={24} />
            <input
              type="text"
              className="text-sm md:text-md grow"
              placeholder="what do you want to cook today ?"
            />
          </label>
        </form>
      </div>
    </div>
  );
};
export default Home;
