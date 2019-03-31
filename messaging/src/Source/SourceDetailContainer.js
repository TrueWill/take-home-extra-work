import { connect } from 'react-redux';
import {
  fetchSource,
  fetchMessagesForSource,
  fetchMessageStatusCountsForSource
} from '../actions/sourceActions';
import { getCurrentSource, getCurrentMessages } from '../selectors/simple';
import SourceDetail from './SourceDetail';

const mapStateToProps = state => ({
  source: getCurrentSource(state),
  messages: getCurrentMessages(state)
});

const mapDispatchToProps = {
  fetchSource,
  fetchMessagesForSource,
  fetchMessageStatusCountsForSource
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SourceDetail);
