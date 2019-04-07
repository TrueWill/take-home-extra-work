// non-memoized selector functions, typically used as input-selectors

export const getSources = state => state.sources.all;
export const getCurrentSource = state => state.sources.current;
export const getCurrentMessages = state => state.sources.currentMessages;
export const getCurrentMessageStatusCounts = state =>
  state.sources.currentMessageStatusCounts;
export const getNewSourceLocation = state => state.sources.newLocation;
