import React from 'react';

import Loader from 'react-loader-spinner';
import MovieCard from '../MovieCard/MovieCard';
import LoadMoreButton from '../LoadMoreButton/LoadMoreButton';

import './Home.scss';

const loader = (
  <div className="loader-container">
    <Loader type="ThreeDots" color="#999" height="100" width="100" />
  </div>
);

const Home = ({
  isLoading,
  movies,
  currentPage,
  totalPages,
  loadMoreMovies,
}) => {
  return (
    <section className="home">
      <div className="flex-container">
        {movies.map((movie, index) => (
          <MovieCard
            key={index}
            imageSrc={movie.poster_path}
            title={movie.title}
            vote={movie.vote_average}
            movieId={movie.id}
          />
        ))}
      </div>
      {isLoading ? loader : null}
      <div className="home__btn">
        {currentPage < totalPages && (
          <LoadMoreButton handleClick={loadMoreMovies} />
        )}
      </div>
    </section>
  );
};

export default Home;
