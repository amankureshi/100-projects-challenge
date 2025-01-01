import { useEffect, useState } from 'react';
import { IoMdSearch } from "react-icons/io";
import './App.css'

const API_URL = "https://omdbapi.com?apikey=fe2f6c44";

function App() {
  const [movies, setMovies] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  const searMovies = async (title) => {
    const response = await fetch(`${API_URL}&s=${title}`);
    const data = await response.json();
    setMovies(data.Search)
  };


  useEffect(() => {
    searMovies("SpiderMan");
  }, []);

  return (
    <>
      <div className="app">
        <h1>Movie App</h1>
        <div className="search">
          <input type="text" placeholder='Search for movies' value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)} />
          <IoMdSearch onClick={() => searMovies(searchTerm)} />
        </div>
      </div>
    </>
  )
}

export default App
