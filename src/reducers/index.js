import { combineReducers } from 'redux';

import home from './homeReducer';
import movie from './movieReducer';

const rootReducer = combineReducers({
  home,
  movie,
});

export default rootReducer;
