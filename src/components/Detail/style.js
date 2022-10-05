import {StyleSheet} from 'react-native';

const style = StyleSheet.create({
  container: {
    flex: 1,
  },
  topContainer: {
    paddingTop: 20,
    width: '100%',
    flexDirection: 'row',
  },
  movieInfo: {
    flex: 6,
    padding: 10,
  },
  overview: {
    padding: 20,
  },
  poster: {
    flex: 4,
    borderRadius: 13,
    borderWidth: 1,
    borderColor: 'gray',
    aspectRatio: 2 / 3,
    marginLeft: 19,
  },
});

export default style;
