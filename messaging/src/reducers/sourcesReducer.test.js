import deepFreeze from 'deep-freeze';
import * as actions from '../actions/sourceActions';
import initialState from './initialState';
import reducer from './sourcesReducer';

// Verify that reducer does not mutate state
deepFreeze(initialState.sources);

test('initialize', () => {
  const action = { type: '@@INIT' };

  const nextState = reducer(undefined, action);

  expect(nextState).toBe(initialState.sources);
});

test('fetch sources', () => {
  const state = {
    all: [],
    current: null,
    currentMessages: [],
    currentMessageStatusCounts: [],
    error: 'old'
  };

  deepFreeze(state);

  const action = actions.fetchSourcesSucceeded([{ id: 'a' }]);

  const nextState = reducer(state, action);

  expect(nextState).toEqual({
    all: [{ id: 'a' }],
    current: null,
    currentMessages: [],
    currentMessageStatusCounts: [],
    error: null
  });
});

// TODO: Add more tests (and next time do TDD)
