import React, { useEffect, useState } from 'react';

import MovieList from './MovieList';
import MovieService from '../../services/MovieService';

import InputMovie from './InputMovie';

const Movies = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    setMovies(MovieService.getMovies());
  }, []);

  return (
    <div className="container-fluid" style={{ marginLeft: '-15px' }}>
      <InputMovie movies={movies} setMovies={setMovies} />
      <div className="d-flex flex-row">
        <div className="col-sm-12">
          <MovieList movies={movies} setMovies={setMovies} />
        </div>
      </div>
    </div>
  );
};

export default Movies;
