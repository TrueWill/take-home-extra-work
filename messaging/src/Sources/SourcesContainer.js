import { connect } from 'react-redux';
import {
  fetchSources,
  fetchSource,
  fetchMessagesForSource,
  fetchMessageStatusCountsForSource
} from '../actions/sourceActions';
import {
  getSources,
  getCurrentSource,
  getCurrentMessages,
  getCurrentMessageStatusCounts
} from '../selectors/simple';
import Sources from './Sources';

const mapStateToProps = state => ({
  sources: getSources(state),
  currentSource: getCurrentSource(state),
  currentMessages: getCurrentMessages(state),
  currentMessageStatusCounts: getCurrentMessageStatusCounts(state)
});

const mapDispatchToProps = {
  fetchSources,
  fetchSource,
  fetchMessagesForSource,
  fetchMessageStatusCountsForSource
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Sources);
