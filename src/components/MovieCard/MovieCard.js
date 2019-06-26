import React from 'react';

import { Link } from 'react-router-dom';

import './MovieCard.scss';

const MovieCard = ({ imageSrc, title, vote, movieId }) => {
  return (
    <Link to={{ pathname: `/${movieId}` }}>
      <figure className="card">
        <img className="card__poster" src={imageSrc} alt="poster" />
        <figcaption className="card__desc">
          <h2 className="card__title">{title}</h2>
          <div className="card__vote">{vote}</div>
        </figcaption>
      </figure>
    </Link>
  );
};

export default MovieCard;
