import React, { useEffect, useState } from "react";
import { IoSearchSharp } from "react-icons/io5";
import "./Home.css";
import RecipeCard from "../Components/RecipeCard";
import { getRandomColor } from "../lib/utils";

const APP_ID = "8ee0c0b8";
const APP_KEY = "946fae770d1ce37836ca681af06db6c5	";

const Home = () => {
  const [recipes, setRecipes] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchRecipes = async (searchQuery) => {
    setLoading(true);
    setRecipes([]);
    try {
      const res = await fetch(
        `https://api.edamam.com/api/recipes/v2/?app_id=${APP_ID}&app_key=${APP_KEY}&q=${searchQuery}&type=public`,
        {
          headers: {
            "Edamam-Account-User": "your-edamam-username",
          },
        }
      );
      const data = await res.json();
      setRecipes(data.hits);
      console.log(data.hits);
    } catch (error) {
      console.log(error.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchRecipes("burger");
  }, []);

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
          {!loading &&
            recipes.map(({ recipe }, index) => (
              <RecipeCard key={index} recipe={recipe} {...getRandomColor()} />
            ))}

          {loading &&
            [...Array(9)].map((_, index) => (
              <div key={index} className="flex flex-col gap-4 w-full">
                <div className="flex w-82 flex-col gap-7">
                  <div className="skeleton h-32 w-full"></div>
                  <div className="flex items-center gap-4">
                    <div className="flex flex-col gap-4">
                      <div className="skeleton h-4 w-20"></div>
                      <div className="skeleton h-4 w-28"></div>
                      <div className="flex gap-2">
                        <div className="skeleton h-5 w-20"></div>
                        <div className="skeleton h-5 w-20"></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
        </div>
      </div>
    </div>
  );
};
export default Home;
