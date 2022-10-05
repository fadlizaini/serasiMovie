import React, {useEffect} from 'react';
import {Text, View, Image} from 'react-native';
import PropTypes from 'prop-types';
import style from './style';
import {constants} from '../../http';
const Detail = props => {
  return (
    <View style={style.container}>
      <View style={style.topContainer}>
        <Image
          style={style.poster}
          source={{uri: `${constants.imageUrl}${props.movie.backdrop_path}`}}
        />
        <View style={style.movieInfo}>
          <Text>{props.movie.title}</Text>
        </View>
      </View>
      <View style={style.overview}>
        <Text>{props.movie.overview}</Text>
      </View>
    </View>
  );
};

export default Detail;

Detail.propTypes = {
  movie: PropTypes.object,
  navigation: PropTypes.object,
};

Detail.defaultProps = {
  movie: {},
  navigation: {},
};
