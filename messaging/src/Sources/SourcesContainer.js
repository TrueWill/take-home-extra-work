import { connect } from 'react-redux';
import {
  fetchSources,
  fetchSource,
  fetchMessagesForSource
} from '../actions/sourceActions';
import {
  getSources,
  getCurrentSource,
  getCurrentMessages
} from '../selectors/simple';
import Sources from './Sources';

const mapStateToProps = state => ({
  sources: getSources(state),
  currentSource: getCurrentSource(state),
  currentMessages: getCurrentMessages(state)
});

const mapDispatchToProps = {
  fetchSources,
  fetchSource,
  fetchMessagesForSource
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Sources);
