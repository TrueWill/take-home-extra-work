import { connect } from 'react-redux';
import { getCurrentMessageStatusCounts } from '../selectors/simple';
import MessageStatusCounts from './MessageStatusCounts';

const mapStateToProps = state => ({
  counts: getCurrentMessageStatusCounts(state)
});

export default connect(mapStateToProps)(MessageStatusCounts);
