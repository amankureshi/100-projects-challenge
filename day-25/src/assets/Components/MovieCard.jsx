import React from 'react'


const MovieCard = ({ movie }) => {
    return (
        <div className='movie'>
            <div>
                <p>{movie.year}</p>
            </div>
            <div className="image-section">
                <img src={movie.Poster !== "N/A" ? movie.Poster : "https://via.placeholder.com/400"} alt="movie-image" />
            </div>
            <div className="movie-contnet">
                <span>{movie.Type}</span>
                <h3>{movie.Title}</h3>
            </div>
        </div>
    )
}

export default MovieCard
