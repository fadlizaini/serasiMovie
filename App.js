import React from 'react';
import Navigators from './src/Navigators';
import {Provider} from 'react-redux';
import configureStore from './src/redux/store/configureStore';

const App = () => {
  return (
    <>
      <Provider store={configureStore}>
        <Navigators />
      </Provider>
    </>
  );
};

export default App;
