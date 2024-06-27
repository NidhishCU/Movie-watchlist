import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import HomePage from './pages/HomePage';
import AddEditMoviePage from './pages/AddEditMoviePage';
import MovieDetailsPage from './pages/MovieDetailsPage';

const App = () => {
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={HomePage} />
        <Route path="/add" component={AddEditMoviePage} />
        <Route path="/edit/:id" component={AddEditMoviePage} />
        <Route path="/details/:id" component={MovieDetailsPage} />
      </Switch>
    </Router>
  );
};

export default App;
