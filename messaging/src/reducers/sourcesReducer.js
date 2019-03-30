import initialState from './initialState';
import * as types from '../constants/actionTypes';

// TODO: Add reducer tests

export default (state = initialState.sources, action) => {
  switch (action.type) {
    case types.FETCH_SOURCES_SUCCEEDED:
      return { ...state, all: action.sources, error: null };
    case types.FETCH_SOURCES_FAILED:
      return { ...state, all: [], error: action.error };
    case types.FETCH_SOURCE_SUCCEEDED:
      return {
        ...state,
        current: action.source,
        currentMessages: [],
        currentMessageStatusCounts: [],
        error: null
      };
    case types.FETCH_SOURCE_FAILED:
      return {
        ...state,
        current: null,
        currentMessages: [],
        currentMessageStatusCounts: [],
        error: action.error
      };
    case types.FETCH_MESSAGES_FOR_SOURCE_SUCCEEDED:
      return { ...state, currentMessages: action.messages, error: null };
    case types.FETCH_MESSAGES_FOR_SOURCE_FAILED:
      return { ...state, currentMessages: [], error: action.error };
    case types.FETCH_MESSAGE_STATUS_COUNTS_FOR_SOURCE_SUCCEEDED:
      return {
        ...state,
        currentMessageStatusCounts: action.counts,
        error: null
      };
    case types.FETCH_MESSAGE_STATUS_COUNTS_FOR_SOURCE_FAILED:
      return {
        ...state,
        currentMessageStatusCounts: [],
        error: action.error
      };
    default:
      return state;
  }
};
