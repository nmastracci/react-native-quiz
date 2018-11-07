/*
  Holds application state;
  Allows access to state via getState();
  Allows state to be updated via dispatch(action);
  Registers listeners via subscribe(listener);
  Handles unregistering of listeners via the function returned by subscribe(listener)
*/

import { applyMiddleware, createStore } from 'redux';
import { createLogger } from 'redux-logger'; //logs out state in console
import thunk from 'redux-thunk'; //allows you to write action creators that return a function instead of an action
import rootReducer from '../reducers';

const logger = createLogger();

export default function configureStore(initialState) {
  return createStore(rootReducer, initialState, applyMiddleware(thunk, logger));
}
