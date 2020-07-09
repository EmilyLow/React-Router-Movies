import React, { useState, useEffect } from 'react';
import axios from 'axios';


//I'm trying to figure out where Movie is actually used, and if its the same thing as lower case movie when that's used?

//Even if this works I'm unclear how this leads to the browser navigating to the right place. Where is a Movie being created and using this? It doesn't seem to be in MovieList directly? It looks like in the main App.js maybe? But then where is MovieDetails getting involved?

const Movie = (props) => {
  const [movie, setMovie] = useState();
 
  useEffect(() => {
    
    const id = 1;
    
    // change ^^^ that line and grab the id from the URL
    // You will NEED to add a dependency array to this effect hook


  
    //const id = movie.id;
    //So maybe this works, the problem is just that it hasn't been defined yet?
    

       axios
        .get(`http://localhost:5000/api/movies/${id}`)
        .then(response => {
          setMovie(response.data);
          //console.log(response.data);
          //console.log(movie); 
        })
        .catch(error => {
          console.error(error);
        });

  }, [movie]);
  //Think maybe the problem is here but don't know what else to try
  
  // Uncomment this only when you have moved on to the stretch goals
  // const saveMovie = () => {
  //   const addToSavedList = props.addToSavedList;
  //   addToSavedList(movie)
  // }

  if (!movie) {
    return <div>Loading movie information...</div>;
  }

  const { title, director, metascore, stars } = movie;
  return (
    <div className="save-wrapper">
      <div className="movie-card">
        <h2>{title}</h2>
        <div className="movie-director">
          Director: <em>{director}</em>
        </div>
        <div className="movie-metascore">
          Metascore: <strong>{metascore}</strong>
        </div>
        <h3>Actors</h3>

        {stars.map(star => (
          <div key={star} className="movie-star">
            {star}
          </div>
        ))}
      </div>
      <div className="save-button">Save</div>
    </div>
  );
}

export default Movie;
