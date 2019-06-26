import React from 'react';

import './LoadMoreButton.scss';

const LoadMoreButton = ({ handleClick }) => (
  <button className="load-more-btn" onClick={handleClick}>
    Loads more
  </button>
);

export default LoadMoreButton;
