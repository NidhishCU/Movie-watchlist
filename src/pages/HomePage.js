import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import MovieList from '../components/MovieList';
import { Link } from 'react-router-dom';
import { setMovies } from '../redux/moviesSlice';

const HomePage = () => {
  const dispatch = useDispatch();
  const movies = useSelector(state => state.movies.movies);

  useEffect(() => {
    fetch('http://localhost:5000/movies')
      .then(response => response.json())
      .then(data => dispatch(setMovies(data)));
  }, [dispatch]);

  return (
    <div className="container">
      <header>
        <h1>My Movie Watchlist</h1>
        <Link to="/add">Add New Movie</Link>
      </header>
      <MovieList movies={movies} />
    </div>
  );
};

export default HomePage;
