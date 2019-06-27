import React from 'react';

import Spinner from '../Spinner/Spinner';
import MovieCard from '../MovieCard/MovieCard';
import LoadMoreButton from '../LoadMoreButton/LoadMoreButton';

import { API_IMAGE_LINK } from '../../api/api';

import './Home.scss';

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
            imageSrc={API_IMAGE_LINK + movie.poster_path}
            title={movie.title}
            vote={movie.vote_average}
            movieId={movie.id}
          />
        ))}
      </div>
      {isLoading ? <Spinner /> : null}
      <div className="home__btn">
        {currentPage < totalPages && (
          <LoadMoreButton handleClick={loadMoreMovies} />
        )}
      </div>
    </section>
  );
};

export default Home;
