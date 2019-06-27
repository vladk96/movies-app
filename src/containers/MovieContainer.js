import React, { Component } from 'react';
import { connect } from 'react-redux';

import Movie from '../components/Movie/Movie';

import { getMovie, clearMovie, showLoader } from '../actions';

class MovieContainer extends Component {
  componentDidMount() {
    const { movieId } = this.props.match.params;

    this.props.clearMovie();
    this.props.showLoader();
    this.props.getMovie(movieId);
  }

  render() {
    const { actors, movie, directors, isLoading } = this.props;

    return (
      <Movie
        actors={actors}
        movie={movie}
        directors={directors}
        isLoading={isLoading}
      />
    );
  }
}

const mapStateToProps = state => {
  return state.movie;
};

const mapDispatchToProps = {
  getMovie,
  clearMovie,
  showLoader,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(MovieContainer);
