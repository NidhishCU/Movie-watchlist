import React from 'react';
import { Link } from 'react-router-dom';

const MovieItem = ({ movie }) => {
  return (
    <div className="movie-item">
      <h2>{movie.title}</h2>
      <p><strong>Genre:</strong> {movie.genre}</p>
      <p><strong>Release Year:</strong> {movie.releaseYear}</p>
      <p><strong>Status:</strong> {movie.watched ? 'Watched' : 'Unwatched'}</p>
      <Link to={`/details/${movie.id}`}>View Details</Link>
    </div>
  );
};

export default MovieItem;
