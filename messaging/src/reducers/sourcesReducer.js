import initialState from './initialState';
import * as types from '../constants/actionTypes';

export default (state = initialState.sources, action) => {
  switch (action.type) {
    case types.FOO:
      return { ...state, all: [{ id: 'foo' }] };
    default:
      return state;
  }
};
