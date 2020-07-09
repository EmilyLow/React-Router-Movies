import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Route, Link } from 'react-router-dom';
import SavedList from './Movies/SavedList';
//Should I be importing these?
import MovieList from './Movies/MovieList';
import Movie from './Movies/Movie';

//Confused by MovieList and movieList, and movieList interacts with props of MovieList
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
   //I can't tell if the 'id' bit is correct here. If so why does this work if its part of a string?
   //Also whats the difference between making it a child (like with MovieList) and adding it as component (like with Movie)?
    <div>
      <SavedList list={savedList} />
      <Route path="/">
          <MovieList movies={movieList}/>
      </Route> 
      <Route path="/movies/:id" component={Movie}/>
    </div>
  );
};

export default App;
