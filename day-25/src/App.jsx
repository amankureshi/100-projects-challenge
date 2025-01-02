import { useEffect, useState } from 'react';
import { IoMdSearch } from "react-icons/io";
import './App.css'
import MovieCard from './assets/Components/MovieCard';
import useFetch from './hooks/useFetch';

const API_URL = "https://omdbapi.com?apikey=fe2f6c44";

const App = () => {
  const [searchTerm, setSearchTerm] = useState("superman")

  const { data: movies, loading, error } = useFetch(`${API_URL}&s=${searchTerm}`);
  const { data: qoute, loading: qouteLoading, error: qouteError } = useFetch(`https://zenquotes.io/api/today`);

  console.log(qoute);

  return (

    <div className="app">
      <h1>Movie App</h1>
      {/* {qouteLoading ? 'qoute loading' : qoute[0].q} */}
      <div className="search">
        <div className="search-container">
          <input
            type="text"
            placeholder="Search for movies"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            onKeyDown={(e) => {

            }}
          />
          <IoMdSearch onClick={() => searchMovies(searchTerm)} />
        </div>
      </div>

      <div className="container">
        {loading ?
          Array(10).fill(0)
            .map((_, index) => (
              <div className="movie" key={index}>
                <div className='shimmer' style={{ height: '300px' }} />
                <div className="movie-content">
                  <h3 className='shimmer'>&nbsp;</h3>
                  <span className='shimmer'>&nbsp;</span>
                </div>
              </div>
            ))

          : <>
            {movies && (
              movies?.Search?.map((movie) => (
                <MovieCard key={movie.imdbID} movie={movie} />
              ))
            )}
          </>
        }
      </div>
    </div>
  );
}

export default App