import React from 'react';

import './Poster.scss';

const Poster = ({ imageSrc }) => (
  <img className="poster" src={imageSrc} alt="movie-poster" />
);

export default Poster;
