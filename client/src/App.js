import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Route, Link } from 'react-router-dom';
import SavedList from './Movies/SavedList';
import MovieList from './Movies/MovieList';

const App = () => {
  const [savedList, setSavedList] = useState([]);
  const [movieList, setMovieList] = useState([]);

  useEffect(() => {
    const getMovies = () => {
      axios
        .get('http://localhost:5000/api/movies')
        .then(response => {
          setMovieList(response.data);
        })
        .catch(error => {
          console.error('Server Error', error);
        });
    }
    getMovies();
  }, []);

  const addToSavedList = movie => {
    setSavedList([...savedList, movie]);
  };

  return (
    //This is currently definitely wrong
    <div>
      <SavedList list={savedList} />
      <Route path="/" component={MovieList}/> 
      <Route path="/:movies" component={SavedList}/>
    </div>
  );
};

export default App;
