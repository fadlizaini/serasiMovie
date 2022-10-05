import {createStore, combineReducers} from 'redux';
import moviesReducer from '../reducer/moviesReducer';

const rootReducer = combineReducers({moviesReducer});
const configureStore = createStore(rootReducer);
export default configureStore;
