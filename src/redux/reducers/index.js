import { combineReducers } from 'redux';
import movieReducers from './movieReducers'
import userReducers from './userReducers';

export default combineReducers({
    users: userReducers,
    movies: movieReducers
})