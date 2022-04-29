import React, { useState } from 'react';
import PropTypes from 'prop-types';

import StarRating from '../StarRating';

const HoverableDiv = ({ children, handleMouseOver, handleMouseOut }) => {
  return (
    <div onMouseOver={handleMouseOver} onMouseOut={handleMouseOut}>
      {children}
    </div>
  );
};

const HoverText = ({ ratings }) => {
  return <div>Rated by: {ratings === undefined ? 1 : ratings.length}</div>;
};

const MovieCard = ({ movie, movies, setMovies }) => {
  const [isHovering, setIsHovering] = useState(false);

  const handleMouseOver = () => {
    setIsHovering(true);
  };

  const handleMouseOut = () => {
    setIsHovering(false);
  };

  const handleDelete = event => {
    event.preventDefault();
    console.log('DELETE : ' + movie.id);
    setMovies(movies.filter(m => m !== movie));
  };

  const updateRating = newValue => {
    const newMovieList = movies.map(currMovie => {
      if (currMovie.id === movie.id) {
        if (currMovie.hasOwnProperty('ratings')) {
          let newRatings = currMovie.ratings.length === 0 ? [newValue] : [...currMovie.ratings, newValue];
          let rating = newRatings.length === 0 ? 0 : newRatings.reduce((a, b) => a + b, 0) / newRatings.length;
          rating = Math.round(rating * 100) / 100;

          const updatedMovie = {
            ...currMovie,
            ratings: newRatings,
            rating: rating,
          };

          return updatedMovie;
        } else if (!currMovie.hasOwnProperty('ratings')) {
          let newRatings = [];
          newRatings.push(currMovie.rating);
          newRatings.push(newValue);

          let newRating = newRatings.reduce((a, b) => a + b, 0) / newRatings.length;

          const updatedMovie = {
            ...currMovie,
            ratings: newRatings,
            rating: newRating,
          };
          return updatedMovie;
        }
      }

      return currMovie;
    });

    setMovies(newMovieList);
  };

  return (
    <div className="movie-card">
      <div className="movie-card card">
        <a href="#" className="badge badge-danger" onClick={handleDelete}>
          Delete
        </a>
        <img className="card-img-top" src={movie.imageUrl} alt="" />
        <div className="card-body">
          <h4 className="card-title">{movie.title}</h4>
          <h6 className="card-subtitle mb-2 text-muted">{movie.subtitle}</h6>
          <p className="text-justify" style={{ fontSize: '14px' }}>
            {movie.description}
          </p>
        </div>
        <div className="card-footer">
          <div className="clearfix">
            <div className="float-left mt-1">
              <StarRating rating={movie.rating} updateRating={updateRating} />
            </div>
            <div
              className="card-footer-badge float-right badge badge-primary badge-pill"
              data-toggle="tooltip"
              data-placement="top"
              title={'Users rated : ' + (movie.ratings === undefined ? 1 : movie.ratings.length)}
            >
              {movie.rating}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

MovieCard.defaultProps = {
  movie: {},
};

MovieCard.propTypes = {
  movie: PropTypes.object,
};

export default MovieCard;
