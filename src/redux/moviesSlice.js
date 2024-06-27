import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  movies: [],
};

const moviesSlice = createSlice({
  name: 'movies',
  initialState,
  reducers: {
    setMovies: (state, action) => {
      state.movies = action.payload;
    },
    addMovie: (state, action) => {
      state.movies.push(action.payload);
    },
    editMovie: (state, action) => {
      const index = state.movies.findIndex(movie => movie.id === action.payload.id);
      if (index !== -1) {
        state.movies[index] = action.payload;
      }
    },
    deleteMovie: (state, action) => {
      state.movies = state.movies.filter(movie => movie.id !== action.payload);
    },
    toggleWatchStatus: (state, action) => {
      const movie = state.movies.find(movie => movie.id === action.payload);
      if (movie) {
        movie.watched = !movie.watched;
      }
    },
    rateMovie: (state, action) => {
      const { id, rating } = action.payload;
      const movie = state.movies.find(movie => movie.id === id);
      if (movie) {
        movie.rating = rating;
      }
    },
    reviewMovie: (state, action) => {
      const { id, review } = action.payload;
      const movie = state.movies.find(movie => movie.id === id);
      if (movie) {
        movie.review = review;
      }
    },
  },
});

export const { setMovies, addMovie, editMovie, deleteMovie, toggleWatchStatus, rateMovie, reviewMovie } = moviesSlice.actions;
export default moviesSlice.reducer;
