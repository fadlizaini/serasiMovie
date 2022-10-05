import {SET_DETAIL_MOVIE, SET_MORE_MOVIES, SET_MOVIES} from '../constants';
export function setMovies(payload) {
  return {
    type: SET_MOVIES,
    payload: payload,
  };
}

export function setMoreMovies(payload) {
  return {
    type: SET_MORE_MOVIES,
    payload: payload,
  };
}

export function setDetailMovie(payload) {
  return {
    type: SET_DETAIL_MOVIE,
    payload: payload,
  };
}
