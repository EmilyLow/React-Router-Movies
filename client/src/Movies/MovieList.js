import React from 'react';
import { Link } from 'react-router-dom';

const MovieList = props => {
  return (
    <div className="movie-list">
      {props.movies.map(movie => (
        <MovieDetails key={movie.id} movie={movie} />
      ))}
    </div>
  );
}

//Why is the props { movie } here, and not just 'props' or 'movie'?
function MovieDetails({ movie }) {
  const { title, director, metascore, stars } = movie;
  return (
    //Link attempt here. Is id correct?
    <Link to="/about/:id">
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
    </Link>
  );
}

export default MovieList;
