import React, { Component } from 'react';
import { connect } from 'react-redux';
import {
  getAllMovies,
  showLoader,
  clearMovies,
  loadMoreMovies,
} from '../actions';

import Home from '../components/Home/Home';

class HomeContainer extends Component {
  componentDidMount() {
    this.props.showLoader();
    this.props.getAllMovies();
  }

  loadMoreMovies = () => {
    const { currentPage } = this.props;

    this.props.showLoader();
    this.props.loadMoreMovies(currentPage);
  };

  render() {
    const { movies, isLoading, currentPage, totalPages } = this.props;

    return (
      <Home
        movies={movies}
        isLoading={isLoading}
        currentPage={currentPage}
        totalPages={totalPages}
        loadMoreMovies={this.loadMoreMovies}
      />
    );
  }
}

const mapStateToProps = state => {
  return state.home;
};

const mapDispatchToProps = {
  getAllMovies,
  showLoader,
  clearMovies,
  loadMoreMovies,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(HomeContainer);
