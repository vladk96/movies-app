const API_KEY = '31af08b6d9c68f14d9d5a7fc04d96517';
const API_LINK = 'https://api.themoviedb.org/3/';

export const API_IMAGE_LINK = 'https://image.tmdb.org/t/p/original';

const getData = link =>
  fetch(link)
    .then(result => {
      if (result.ok) {
        return result.json();
      } else {
        throw new Error(result.statusText);
      }
    })
    .catch(error => console.error('Error:', error));

const fetchMovieInfo = movieId => {
  const apiLink = `${API_LINK}movie/${movieId}?api_key=${API_KEY}`;

  return getData(apiLink);
};

const fetchMovieCrew = movieId => {
  const apiLink = `${API_LINK}movie/${movieId}/credits?api_key=${API_KEY}`;

  return getData(apiLink);
};

export const fetchMovies = (pageNumber = 0) => {
  let apiLink = `${API_LINK}trending/movie/week?api_key=${API_KEY}`;

  if (pageNumber !== 0) {
    apiLink += `&page=${pageNumber}`;
  }

  return getData(apiLink);
};

export const fetchMovie = movieId => {
  return Promise.all([fetchMovieInfo(movieId), fetchMovieCrew(movieId)]);
};
