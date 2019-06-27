import React from 'react';

import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

import './MovieCard.scss';

const MovieCard = ({ imageSrc, title, vote, movieId }) => {
  return (
    <Link to={`/${movieId}`}>
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

MovieCard.propTypes = {
  movieId: PropTypes.number,
};

export default MovieCard;
