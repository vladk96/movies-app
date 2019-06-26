import { fetchMovies } from '../api/api';

export const GET_ALL_MOVIES = 'GET_ALL_MOVIES';
export const GET_MOVIE = 'GET_MOVIE';
export const LOAD_MORE_MOVIES = 'LOAD_MORE_MOVIES';
export const CLEAR_MOVIES = 'CLEAR_MOVIES';
export const SHOW_LOADER = 'SHOW_LOADER';

export const getAllMovies = () => {
  const request = fetchMovies();

  return {
    type: GET_ALL_MOVIES,
    payload: request,
  };
};

export const showLoader = () => ({
  type: SHOW_LOADER,
  payload: null,
});

export const clearMovies = () => ({
  type: CLEAR_MOVIES,
  payload: null,
});

export const loadMoreMovies = currentPage => {
  const nextPage = currentPage + 1;
  const request = fetchMovies(nextPage);

  return {
    type: LOAD_MORE_MOVIES,
    payload: request,
  };
};
