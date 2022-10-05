import React from 'react';
import Home from '../components/Home';
import {useSelector, useDispatch} from 'react-redux';
import moviesServices from '../services/moviesServices';
import {
  setDetailMovie,
  setMoreMovies,
  setMovies,
} from '../redux/actions/movies';
import {constants} from '../http';

const HomeContainer = props => {
  const dispatch = useDispatch();
  const moviesData = useSelector(state => state.moviesReducer.movies);
  const categories = Object.keys(constants.url);
  const getDetailMovie = id => {
    moviesServices
      .getDetailMovie({id: id})
      .then(async res => {
        await dispatch(setDetailMovie(res.data));
        props.navigation.navigate('Detail');
      })
      .catch(err => console.log(err));
  };
  const getMovies = (type = 'popular', page = 1) => {
    moviesServices.getMovies({type, params: {page}}).then(res => {
      if (page > 1) {
        dispatch(setMoreMovies(res.data.results));
      } else {
        dispatch(setMovies(res.data.results));
      }
    });
  };

  return (
    <Home
      {...props}
      movies={moviesData}
      getMovies={getMovies}
      getDetailMovie={getDetailMovie}
      categories={categories}
    />
  );
};

export default HomeContainer;
