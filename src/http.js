import axios from 'axios';
export const constants = {
  apiKey: '7a857a153e163f1f3b4d1eeb22034316',
  baseUrl: 'https://api.themoviedb.org/3',
  imageUrl: 'https://image.tmdb.org/t/p/w500',
  url: {
    popular: '/movie/popular',
    topRated: '/movie/top_rated',
    upcoming: '/movie/upcoming',
    nowPlaying: '/movie/now_playing',
  },
};
export default axios.create({
  baseURL: 'https://api.themoviedb.org/3',
  headers: {
    'Content-type': 'application/json',
  },
});
