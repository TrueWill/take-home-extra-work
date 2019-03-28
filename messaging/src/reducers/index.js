import { combineReducers } from 'redux';
import sources from './sourcesReducer';

const rootReducer = combineReducers({ sources });

export default rootReducer;
