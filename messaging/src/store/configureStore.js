import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import rootReducer from '../reducers';

const composeEnhancers = composeWithDevTools({});

export default () =>
  createStore(rootReducer, composeEnhancers(applyMiddleware(thunk)));
