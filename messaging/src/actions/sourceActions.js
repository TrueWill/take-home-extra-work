import * as types from '../constants/actionTypes';
import * as api from '../api';

function fetchSourcesSucceeded(sources) {
  return {
    type: types.FETCH_SOURCES_SUCCEEDED,
    sources
  };
}

function fetchSourcesFailed(error) {
  return {
    type: types.FETCH_SOURCES_FAILED,
    error
  };
}

// thunk
export function fetchSources() {
  return dispatch => {
    api
      .fetchSources()
      .then(resp => {
        return dispatch(fetchSourcesSucceeded(resp.data));
      })
      .catch(err => {
        return dispatch(fetchSourcesFailed(err.message));
      });
  };
}
