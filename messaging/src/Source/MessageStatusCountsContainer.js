import { connect } from 'react-redux';
import { getCurrentMessageStatusCounts } from '../selectors/simple';
import MessageStatusCounts from './MessageStatusCounts';
import { withRouter } from 'react-router-dom';

const mapStateToProps = state => ({
  counts: getCurrentMessageStatusCounts(state)
});

export default withRouter(connect(mapStateToProps)(MessageStatusCounts));
