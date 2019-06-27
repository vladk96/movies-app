import React from 'react';

import './MovieDescription.scss';

const MovieDescription = ({ movieDesc, directors }) => {
  return (
    <div className="movie">
      <p className="movie__desc">
        <span className="movie__desc--bold">Title:</span>{' '}
        {movieDesc.original_title}
      </p>
      <p className="movie__desc">
        <span className="movie__desc--bold">Year: </span>
        {new Date(movieDesc.release_date).getFullYear()}
      </p>
      <p className="movie__desc">
        <span className="movie__desc--bold">
          {movieDesc.production_countries.length > 1
            ? 'Countries: '
            : 'Country: '}
        </span>
        {movieDesc.production_countries.map(country => country.name).join(', ')}
      </p>
      <p className="movie__desc">
        <span className="movie__desc--bold">
          {movieDesc.genres.length > 1 ? 'Genres: ' : 'Genre: '}
        </span>
        {movieDesc.genres.map(genre => genre.name).join(', ')}
      </p>
      <p className="movie__desc">
        <span className="movie__desc--bold">
          {directors.length > 1 ? 'Directors: ' : 'Director: '}
        </span>
        {directors.map(director => director.name).join(', ')}
      </p>
      <p className="movie__desc">
        <span className="movie__desc--bold">Rating: </span>
        {movieDesc.vote_average}
      </p>
      <p className="movie__overview">
        <span className="movie__desc--bold">Overview: </span>
        {movieDesc.overview}
      </p>
    </div>
  );
};

export default MovieDescription;
