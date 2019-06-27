import React from 'react';

import Loader from 'react-loader-spinner';

import './Spinner.scss';

const Spinner = () => (
  <div className="loader-container">
    <Loader type="ThreeDots" color="#999" height="100" width="100" />
  </div>
);

export default Spinner;
