import React from 'react';

import { API_IMAGE_LINK } from '../../api/api';

import Poster from '../Poster/Poster';
import MovieDescription from '../MovieDescription/MovieDescription';
import Actor from '../Actor/Actor';
import Spinner from '../Spinner/Spinner';

import notFoundImage from '../../assets/not-found-photo.png';

import './Movie.scss';

const Movie = ({ actors, movie, directors, isLoading }) => {
  if (isLoading) {
    return <Spinner />;
  }

  return movie ? (
    <section className="movie-container">
      <div className="movie__flex">
        <div className="movie__poster">
          <Poster imageSrc={API_IMAGE_LINK + movie.poster_path} />
        </div>
        <MovieDescription movieDesc={movie} directors={directors} />
      </div>
      <h2 className="movie__title">Actors:</h2>
      <div className="actors-container">
        {actors.map((actor, index) => (
          <Actor
            key={index}
            imageSrc={
              actor.profile_path
                ? API_IMAGE_LINK + actor.profile_path
                : notFoundImage
            }
            name={actor.name}
          />
        ))}
      </div>
    </section>
  ) : null;
};

export default Movie;
