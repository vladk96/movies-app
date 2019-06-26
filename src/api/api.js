const API_KEY = '31af08b6d9c68f14d9d5a7fc04d96517';
const API_LINK = 'https://api.themoviedb.org/3/';
const API_IMAGE_LINK = 'https://image.tmdb.org/t/p/original';

const getData = link =>
  fetch(link)
    .then(result => {
      if (result.ok) {
        return result.json();
      } else {
        throw Error(`Request rejected with status ${result.status}`);
      }
    })
    .then(result => {
      const changedResults = result.results.map(movie => ({
        ...movie,
        poster_path: `${API_IMAGE_LINK}${movie.poster_path}`,
      }));

      return {
        ...result,
        results: changedResults,
      };
    })
    .catch(console.error);

export const fetchMovies = (pageNumber = 0) => {
  let apiLink = `${API_LINK}trending/movie/week?api_key=${API_KEY}`;

  if (pageNumber !== 0) {
    apiLink += `&page=${pageNumber}`;
  }
  console.log(apiLink);
  return getData(apiLink);
};
// // Description about movie
// // change movieId = 299537;
// const descOfMovie =
//   'https://api.themoviedb.org/3/movie/299537?api_key=31af08b6d9c68f14d9d5a7fc04d96517&language=en-US';
