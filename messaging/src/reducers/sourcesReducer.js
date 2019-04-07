import initialState from './initialState';
import * as types from '../constants/actionTypes';

export default (state = initialState.sources, action) => {
  switch (action.type) {
    case types.FETCH_SOURCES_SUCCEEDED:
      return { ...state, all: action.sources, newLocation: null, error: null };
    case types.FETCH_SOURCES_FAILED:
      return { ...state, all: [], newLocation: null, error: action.error };
    case types.FETCH_SOURCE_SUCCEEDED:
      return {
        ...state,
        current: action.source,
        newLocation: null,
        currentMessages: [],
        currentMessageStatusCounts: [],
        error: null
      };
    case types.FETCH_SOURCE_FAILED:
      return {
        ...state,
        current: null,
        newLocation: null,
        currentMessages: [],
        currentMessageStatusCounts: [],
        error: action.error
      };
    case types.FETCH_MESSAGES_FOR_SOURCE_SUCCEEDED:
      return {
        ...state,
        currentMessages: action.messages,
        newLocation: null,
        error: null
      };
    case types.FETCH_MESSAGES_FOR_SOURCE_FAILED:
      return {
        ...state,
        currentMessages: [],
        newLocation: null,
        error: action.error
      };
    case types.FETCH_MESSAGE_STATUS_COUNTS_FOR_SOURCE_SUCCEEDED:
      return {
        ...state,
        currentMessageStatusCounts: action.counts,
        newLocation: null,
        error: null
      };
    case types.FETCH_MESSAGE_STATUS_COUNTS_FOR_SOURCE_FAILED:
      return {
        ...state,
        currentMessageStatusCounts: [],
        newLocation: null,
        error: action.error
      };
    case types.CREATE_SOURCE_SUCCEEDED:
      return {
        ...state,
        newLocation: action.newLocation,
        error: null
      };
    case types.CREATE_SOURCE_FAILED:
      return {
        ...state,
        newLocation: null,
        error: action.error
      };
    case types.UPDATE_SOURCE_SUCCEEDED:
      return {
        ...state,
        newLocation: null,
        error: null
      };
    case types.UPDATE_SOURCE_FAILED:
      return { ...state, newLocation: null, error: action.error };
    default:
      return state;
  }
};
