
import React from 'react';

import 'react-native-gesture-handler'

import {createStore,applyMiddleware} from 'redux'
import {Provider} from 'react-redux'
import Reducers from './src/redux/reducers'
import thunk from 'redux-thunk'
import Appinit from './Appinit'


const App= () => {

  const store=createStore(Reducers,{},applyMiddleware(thunk))
  return (
    <Provider store={store}>
      <Appinit/>
    </Provider>
  
  );
};



export default App;
