import { createStore, compose, applyMiddleware } from 'redux';
import DevTools from './dev-tools';
import reducers from './reducers';

const enhancers = [
  DevTools.instrument(),
];

const configureStore = () => {
  return createStore(
    reducers,
    compose(...enhancers)
  );
};

export default configureStore;
