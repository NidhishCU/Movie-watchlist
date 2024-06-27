import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addMovie, editMovie } from '../redux/moviesSlice';
import { useHistory, useParams } from 'react-router-dom';

const AddEditMoviePage = () => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [releaseYear, setReleaseYear] = useState('');
  const [genre, setGenre] = useState('');
  const movies = useSelector(state => state.movies.movies);
  const dispatch = useDispatch();
  const history = useHistory();
  const { id } = useParams();

  useEffect(() => {
    if (id) {
      const movie = movies.find(movie => movie.id === id);
      if (movie) {
        setTitle(movie.title);
        setDescription(movie.description);
        setReleaseYear(movie.releaseYear);
        setGenre(movie.genre);
      }
    }
  }, [id, movies]);

  const handleSubmit = e => {
    e.preventDefault();
    const movie = { id: id || Date.now().toString(), title, description, releaseYear, genre };

    if (id) {
      dispatch(editMovie(movie));
    } else {
      dispatch(addMovie(movie));
    }

    history.push('/');
  };

  return (
    <div className="container">
      <h1>{id ? 'Edit Movie' : 'Add Movie'}</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Title</label>
          <input type="text" value={title} onChange={e => setTitle(e.target.value)} required />
        </div>
        <div>
          <label>Description</label>
          <textarea value={description} onChange={e => setDescription(e.target.value)}></textarea>
        </div>
        <div>
          <label>Release Year</label>
          <input type="number" value={releaseYear} onChange={e => setReleaseYear(e.target.value)} />
        </div>
        <div>
          <label>Genre</label>
          <input type="text" value={genre} onChange={e => setGenre(e.target.value)} />
        </div>
        <button type="submit">Save</button>
        <button type="button" className="cancel-button" onClick={() => history.push('/')}>Cancel</button>
      </form>
    </div>
  );
};

export default AddEditMoviePage;
