import { connect } from 'react-redux';
import {
  fetchSource,
  fetchMessageStatusCountsForSource
} from '../actions/sourceActions';
import { getCurrentSource } from '../selectors/simple';
import SourceDetail from './SourceDetail';

const mapStateToProps = state => ({
  source: getCurrentSource(state)
});

const mapDispatchToProps = {
  fetchSource,
  fetchMessageStatusCountsForSource
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SourceDetail);
