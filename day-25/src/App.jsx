import { useEffect, useState } from 'react';
import { IoMdSearch } from "react-icons/io";
import './App.css'
import MovieCard from './assets/Components/MovieCard';

const API_URL = "https://omdbapi.com?apikey=fe2f6c44";

const App = () => {
  const [movies, setMovies] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  const searchMovies = async (title) => {
    const response = await fetch(`${API_URL}&s=${title}`);
    const data = await response.json();
    setMovies(data.Search)
  };


  useEffect(() => {
    searchMovies("SpiderMan");
  }, []);

  return (

    <div className="app">
      <h1>Movie App</h1>
      <div className="search">
        <input type="text" placeholder='Search for movies' value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)} />
        <IoMdSearch onClick={() => searchMovies(searchTerm)} />
      </div>

      {movies?.length > 0 ? (
        <div className="container">
          {movies.map((movie) => (
            <MovieCard key={movie.imdbID} movie={movie} />
          ))}
        </div>
      ) : (
        <div className="empty">
          <h2>No movies Found</h2>
        </div>
      )}
    </div>
  );
}

export default App