import React from "react";
import { getRandomColor } from "../lib/utils";
import RecipeCard from "../Components/RecipeCard";

const FavoritesPage = () => {
  const favorites = JSON.parse(localStorage.getItem("favorites")) || [];

  return (
    <div className="bg-[#faf9fb] flex-1 p-10 min-h-screen">
      <div className="max-w-screen">
        <p className="font-bold text-3xl md:text-5xl my-2">Favorites</p>

        {favorites.length === 0 && (
          <div className="h-[80vh] flex flex-col items-center justify-c gap-4 ">
            <img src="404-error.png" alt="404-error-image" className="h-5/5" />
          </div>
        )}

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {favorites.map((recipe) => (
            <RecipeCard
              key={recipe.label}
              recipe={recipe}
              {...getRandomColor()}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default FavoritesPage;
