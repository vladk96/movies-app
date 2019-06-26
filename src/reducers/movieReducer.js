import { GET_MOVIE, CLEAR_MOVIE, SHOW_LOADER } from '../actions';

const initialState = {
  movie: null,
  actors: null,
  directors: [],
  isLoading: false,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case GET_MOVIE:
      return {
        ...state,
        isLoading: false,
        movie: action.payload[0],
        actors: action.payload[1].cast,
        directors: action.payload[1].crew.filter(
          director => director.department === 'Directing'
        ),
      };
    case CLEAR_MOVIE:
      return {
        ...state,
        movie: null,
        actors: null,
        directors: [],
      };
    case SHOW_LOADER:
      return {
        ...state,
        isLoading: true,
      };

    default:
      return state;
  }
};
