import { connect } from 'react-redux';
import { fetchMessagesForSource } from '../actions/sourceActions';
import { getCurrentMessages } from '../selectors/simple';
import Messages from './Messages';

const mapStateToProps = state => ({
  messages: getCurrentMessages(state)
});

const mapDispatchToProps = {
  fetchMessagesForSource
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Messages);
