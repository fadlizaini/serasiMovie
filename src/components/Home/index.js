import React, {useEffect, useState} from 'react';
import {Text, TouchableOpacity, View, Image} from 'react-native';
import {FlatList} from 'react-native-gesture-handler';
import style from './style';
import PropTypes from 'prop-types';
import {Picker} from '@react-native-picker/picker';
import stringHelper from '../../helpers/stringHelper';
import {constants} from '../../http';
function Home(props) {
  const [selectedCategory, setSelectedCategory] = useState('popular');
  const [page, setPage] = useState(1);

  useEffect(() => {
    props.getMovies();
    setPage(1);
  }, []);

  const navigateToDetail = async id => {
    await props.getDetailMovie(id);
  };

  const onEndReached = () => {
    let newPage = page + 1;
    props.getMovies(selectedCategory, newPage);
    setPage(newPage);
  };

  const renderMovieItem = ({item, index}) => (
    <View style={style.itemContainer}>
      <TouchableOpacity
        style={style.banner}
        onPress={() => navigateToDetail(item.id)}>
        <Image
          source={{uri: constants.imageUrl + item.poster_path}}
          style={style.bannerImage}
        />
      </TouchableOpacity>
      <Text>{item.title}</Text>
    </View>
  );

  const onSelectedCategoryChanges = category => {
    setSelectedCategory(category);
    props.getMovies(category);
    setPage(1);
  };

  return (
    <View style={style.container}>
      <Picker
        mode="dropdown"
        selectedValue={selectedCategory}
        onValueChange={onSelectedCategoryChanges}>
        {props.categories.map(item => (
          <Picker.Item
            key={item}
            value={item}
            label={stringHelper.titleCase(item)}
          />
        ))}
      </Picker>
      <FlatList
        showsVerticalScrollIndicator={false}
        contentContainerStyle={style.contentContainerStyle}
        data={props.movies}
        renderItem={renderMovieItem}
        numColumns={3}
        keyExtractor={item => item.id}
        onEndReachedThreshold={0.2}
        onEndReached={onEndReached}
      />
    </View>
  );
}

export default Home;

Home.propTypes = {
  movies: PropTypes.array,
  navigation: PropTypes.object,
  getPopular: PropTypes.func,
  categories: PropTypes.array,
};

Home.defaultProps = {
  movies: [],
  navigation: {},
  getPopular: () => {},
  categories: [],
};
