import React, { useState } from "react";
import { FaRegHeart } from "react-icons/fa";
import { LuSoup } from "react-icons/lu";
import { PiHeartbeatLight } from "react-icons/pi";

const getTwoValuesFromArray = (arr) => {
  return [arr[0], arr[1]];
};

const RecipeCard = ({ recipe, bg, badge }) => {
  const healthLabels = getTwoValuesFromArray(recipe.healthLabels);
  const [isFavorite, setIsFavorite] = useState(
    localStorage.getItem("favorites")?.includes(recipe.label)
  );

  const addRecipeToFavorites = () => {
    let favorites = JSON.parse(localStorage.getItem("favorites")) || [];
    const isRecipeAlreadyInFavorites = favorites.some(
      (fav) => fav.label === recipe.label
    );
    if (isRecipeAlreadyInFavorites) {
      favorites = favorites.filter((fav) => fav.label !== recipe.label);
      setIsFavorite(false);
    } else {
      favorites.push(recipe);
      setIsFavorite(true);
    }
    localStorage.setItem("favorites", JSON.stringify(favorites));
  };

  return (
    <div
      className={`flex flex-col rounded-md ${bg} overflow-hidden p-3 relative card-2`}
    >
      <a
        href={`https://www.youtube.com/results?search_query=${recipe.label} recipe`}
        className="relative h-33 "
        target="_blank"
      >
        <img
          src={recipe.image}
          alt="recipe-image"
          className="rounded-md w-full h-full object-cover cursor-pointer"
        />
        <div className="absolute bottom-2 left-2 bg-white rounded-full p-4 cursor-pointer flex items-center gap-1 text-sm">
          <LuSoup size={18} className="text-red-500 " />
          {recipe.yield} Searving
        </div>
        <div
          className="absolute top-1 right-2 bg-white rounded-full p-1 cursor-pointer"
          onClick={(e) => {
            e.preventDefault();
            addRecipeToFavorites();
          }}
        >
          <FaRegHeart
            size={20}
            className={`cursor-pointer transition-all ${
              isFavorite
                ? "fill-red-500 text-red-500"
                : "hover:fill-red-500 hover:text-red-500"
            }`}
          />
        </div>
      </a>

      <div className="flex mt-1">
        <p className="font-bold tracking-wide">{recipe.label}</p>
      </div>
      <p className="my-2">
        {recipe.cuisineType[0].charAt(0).toUpperCase() +
          recipe.cuisineType[0].slice(1)}
        Kitchen
      </p>
      <div className="flex gap-2 mt-auto">
        {healthLabels.map((label, idx) => (
          <div
            key={idx}
            className={`flex gap-1 ${badge} items-center p-1 rounded-md`}
          >
            <PiHeartbeatLight size={16} />
            <span className="text-sm tracking-tighter font-semibold">
              {label}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RecipeCard;
