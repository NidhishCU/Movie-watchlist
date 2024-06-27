import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useParams, useHistory } from 'react-router-dom';
import { deleteMovie, toggleWatchStatus, rateMovie, reviewMovie } from '../redux/moviesSlice';

const MovieDetailsPage = () => {
  const { id } = useParams();
  const movie = useSelector(state => state.movies.movies.find(movie => movie.id === id));
  const dispatch = useDispatch();
  const history = useHistory();

  const handleDelete = () => {
    dispatch(deleteMovie(id));
    history.push('/');
  };

  const handleToggleWatchStatus = () => {
    dispatch(toggleWatchStatus(id));
  };

  const handleRateMovie = rating => {
    dispatch(rateMovie({ id, rating }));
  };

  const handleReviewMovie = review => {
    dispatch(reviewMovie({ id, review }));
  };

  useEffect(() => {
    if (!movie) {
      history.push('/');
    }
  }, [movie, history]);

  if (!movie) {
    return null;
  }

  return (
    <div className="container details-page">
      <h1>{movie.title}</h1>
      <p><strong>Description:</strong> {movie.description}</p>
      <p><strong>Release Year:</strong> {movie.releaseYear}</p>
      <p><strong>Genre:</strong> {movie.genre}</p>
      <p><strong>Status:</strong> {movie.watched ? 'Watched' : 'Unwatched'}</p>
      <button onClick={handleToggleWatchStatus}>{movie.watched ? 'Mark as Unwatched' : 'Mark as Watched'}</button>
      <button onClick={() => history.push(`/edit/${id}`)}>Edit</button>
      <button onClick={handleDelete} className="cancel-button">Delete</button>

      <div className="rating">
        <h2>Rate this movie</h2>
        <select value={movie.rating} onChange={e => handleRateMovie(Number(e.target.value))}>
          {[1, 2, 3, 4, 5].map(star => (
            <option key={star} value={star}>{star} Star{star > 1 && 's'}</option>
          ))}
        </select>
      </div>

      <div className="review">
        <h2>Review this movie</h2>
        <textarea value={movie.review} onChange={e => handleReviewMovie(e.target.value)}></textarea>
      </div>
    </div>
  );
};

export default MovieDetailsPage;
