import React from 'react'


const MovieCard = ({ movie }) => {
    return (
        <div className='movie'>
            <div>
                <p>{movie.year}</p>
            </div>
            <div className="image-section">
                <img src={movie.Poster !== "N/A" ? movie.Poster : "https://placehold.jp/3d4070/ffffff/150x150.png"} alt="movie-image" />
            </div>
            <div className="movie-content">
                <h3>{movie.Title}</h3>
                <span>{movie.Type}</span>
            </div>
        </div>
    )
}

export default MovieCard
