import initialState from './initialState';
import * as types from '../constants/actionTypes';

export default (state = initialState.sources, action) => {
  switch (action.type) {
    case types.FETCH_SOURCES_SUCCEEDED:
      return { ...state, all: action.sources, error: null };
    case types.FETCH_SOURCES_FAILED:
      return { ...state, all: [], error: action.error };
    default:
      return state;
  }
};
