import React from 'react';
import { Link } from 'react-router-dom';

import './Header.scss';
import apiLogo from '../../assets/themoviedb-logo.svg';

const Header = () => (
  <header className="header">
    <Link to="/" className="page-logo">
      Home page
    </Link>
    <a className="api-logo" href="https://www.themoviedb.org/documentation/api">
      <img className="api-logo__image" src={apiLogo} alt="api-logo" />
    </a>
  </header>
);

export default Header;
