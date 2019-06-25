import React from 'react';
import { HashRouter as Router, Switch, Route } from 'react-router-dom';

import HomeContainer from '../../containers/HomeContainer';
import MovieContainer from '../../containers/MovieContainer';
import NotFound from '../NotFound/NotFound';
import Header from '../Header/Header';

const App = () => {
  return (
    <Router>
      <Header />
      <Switch>
        <Route path="/" component={HomeContainer} exact />
        <Route path="/:movieId" component={MovieContainer} exact />
        <Route component={NotFound} />
      </Switch>
    </Router>
  );
};

export default App;
