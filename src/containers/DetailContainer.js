import React from 'react';
import Detail from '../components/Detail';
import {useSelector, useDispatch} from 'react-redux';
import http from '../http';
import moviesServices from '../services/moviesServices';
import {setDetailMovie} from '../redux/actions/movies';

const DetailContainer = props => {
  const dispatch = useDispatch();
  const detailData = useSelector(state => state.moviesReducer.tempDetail);

  return <Detail {...props} movie={detailData} />;
};

export default DetailContainer;
