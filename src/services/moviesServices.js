import http, {constants} from '../http';
const defaultParams = {
  api_key: constants.apiKey,
};
let moviesServices = {};
moviesServices.getMovies = payload => {
  let params = {...defaultParams, ...payload.params};
  return http.get(constants.url[payload.type], {params});
};
moviesServices.getDetailMovie = payload => {
  let params = {...defaultParams};
  return http.get(`/movie/${payload.id}`, {params});
};

export default moviesServices;
