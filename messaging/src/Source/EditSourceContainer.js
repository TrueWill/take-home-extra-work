import { connect } from 'react-redux';
import { fetchSource, updateSource } from '../actions/sourceActions';
import { getCurrentSource } from '../selectors/simple';
import EditSource from './EditSource';

const mapStateToProps = state => ({
  source: getCurrentSource(state)
});

const mapDispatchToProps = {
  fetchSource,
  updateSource
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(EditSource);
