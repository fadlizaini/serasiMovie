import {StyleSheet} from 'react-native';

const style = StyleSheet.create({
  container: {
    flex: 1,
  },
  contentContainerStyle: {
    width: '100%',
    justifyContent: 'space-between',
  },

  banner: {
    aspectRatio: 2 / 3,
    width: '100%',
  },
  bannerImage: {
    flex: 1,
  },
  itemContainer: {
    marginVertical: 10,
    width: '25%',
    marginHorizontal: '4%',
  },
});

export default style;
