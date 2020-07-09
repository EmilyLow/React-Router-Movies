import React, { useState, useEffect } from 'react';
import axios from 'axios';
import useParams from 'react-router-dom';




const Movie = (props) => {
  const [movie, setMovie] = useState();
  //const { id } = useParams();
 
  useEffect(() => {
    
   
    
    // change ^^^ that line and grab the id from the URL
    // You will NEED to add a dependency array to this effect hook


    //const id = 0;
    const id = props.match.params.id;
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

  }, [props.match.params.id]);
  //I think maybe the problem is here? [{movie}] doesn't work. But it should only be triggered when movie changes? Or only when the URL changes? Should maybe read mroe about dependency arrays and effect hooks.
  


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
