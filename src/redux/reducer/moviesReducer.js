import {SET_MOVIES} from '../constants';
const initialState = {
  movies: [],
  tempDetail: {},
};
const moviesReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'SET_MOVIES':
      return {
        ...state,
        movies: action.payload,
      };
    case 'SET_MORE_MOVIES':
      return {
        ...state,
        movies: [...state.movies, ...action.payload],
      };
    case 'SET_DETAIL_MOVIE':
      return {
        ...state,
        tempDetail: action.payload,
      };
    default:
      return state;
  }
};
export default moviesReducer;
