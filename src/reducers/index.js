import { combineReducers } from 'redux';

import movieReducer from './movieReducer';
import favReducer from './favReducer';



export const rootReducer = combineReducers({
    movieList: movieReducer,
    favList: favReducer
});