import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import {
  fetchSource,
  fetchMessageStatusCountsForSource,
  deleteSource
} from '../actions/sourceActions';
import { getCurrentSource } from '../selectors/simple';
import SourceDetail from './SourceDetail';

const mapStateToProps = state => ({
  source: getCurrentSource(state)
});

const mapDispatchToProps = {
  fetchSource,
  fetchMessageStatusCountsForSource,
  deleteSource
};

export default withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(SourceDetail)
);
