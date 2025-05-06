import React from "react";
import { FaRegHeart } from "react-icons/fa";
import { LuSoup } from "react-icons/lu";
import { PiHeartbeat } from "react-icons/pi";

const RecipeCard = ({ recipe }) => {
  return (
    <div className="flex flex-col rounded-md bg-[#ecf7d4] overflow-hidden p-3 relative card-2">
      <a href="" className="relative h-33 ">
        <img
          src={recipe.image}
          alt="recipe-image"
          className="rounded-md w-full h-full object-cover cursor-pointer"
        />
        <div className="absolute bottom-2 left-2 bg-white rounded-full p-4 cursor-pointer flex items-center gap-1 text-sm">
          <LuSoup size={18} className="text-red-500 " />
          {recipe.yield} Searving
        </div>
        <div className="absolute top-1 right-2 bg-white rounded-full p-1 cursor-pointer">
          <FaRegHeart
            size={"20"}
            className="hover:fill-red-500 hover:text-red-500"
          />
        </div>
      </a>
      <div className="flex mt-1">
        <p className="font-bold tracking-wide">{recipe.label}</p>
      </div>
      <p className="my-2">{recipe.cuisineType} Kitchen</p>
      <div className="flex gap-2 mx-auto">
        <div className="flex gap-1 bg-[#d6f497] items-center p-1">
          <PiHeartbeat />
          <span className="text-sm tracking-tighter font-semibold">
            Gluten-free
          </span>
        </div>
        <div className="flex gap-1 bg-[#d6f497] items-center p-1">
          <PiHeartbeat />
          <span className="text-sm tracking-tighter font-semibold">
            Gluten-free
          </span>
        </div>
      </div>
    </div>
  );
};

export default RecipeCard;
