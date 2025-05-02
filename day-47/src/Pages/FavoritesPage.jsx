import React from "react";

const FavoritesPage = () => {
  const fav = false;
  return (
    <div className="bg-[#faf9fb] flex-1 p-10 min-h-screen">
      <div className="max-w-screen">
        <p className="font-bold text-3xl md:text-5xl my-4">Favorites</p>
        {!fav && (
          <div className="h-[80vh] flex flex-col items-center justify-c gap-4 ">
            <img
              src="https://static.vecteezy.com/system/resources/thumbnails/026/573/373/original/rain-umbrella-404-error-animation-protection-weather-rainy-error-message-gif-motion-graphic-autumn-umbrella-raindrops-falling-animated-cartoon-line-object-4k-isolated-on-white-background-video.jpg"
              alt="404-error-image"
              className="h-5/5"
            />
          </div>
        )}
      </div>
    </div>
  );
};

export default FavoritesPage;
