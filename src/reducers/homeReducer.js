import {
  GET_ALL_MOVIES,
  SHOW_LOADER,
  CLEAR_MOVIES,
  LOAD_MORE_MOVIES,
} from '../actions';

const initialState = {
  movies: [],
  isLoading: false,
  currentPage: 0,
  totalPages: 0,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case GET_ALL_MOVIES:
      return {
        ...state,
        movies: action.payload.results,
        isLoading: false,
        currentPage: action.payload.page,
        totalPages: action.payload.total_pages,
      };
    case LOAD_MORE_MOVIES:
      return {
        ...state,
        movies: [...state.movies, ...action.payload.results],
        isLoading: false,
        currentPage: action.payload.page,
        totalPages: action.payload.total_pages,
      };
    case SHOW_LOADER:
      return {
        ...state,
        isLoading: true,
      };
    case CLEAR_MOVIES:
      return {
        ...state,
        movies: [],
      };

    default:
      return state;
  }
};
