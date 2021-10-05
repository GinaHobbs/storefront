// redux store configuration

import { createStore, combineReducers } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import categories from './categories.js';

let reducers = combineReducers({ categories });

const store = () => {
  return createStore(reducers, composeWithDevTools());
}

console.log('_REDUX_STORE_', store());

export default store();