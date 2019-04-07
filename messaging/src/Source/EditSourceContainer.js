import { connect } from 'react-redux';
import { fetchSource } from '../actions/sourceActions';
import { getCurrentSource } from '../selectors/simple';
import EditSource from './EditSource';

const mapStateToProps = state => ({
  source: getCurrentSource(state)
});

const mapDispatchToProps = {
  fetchSource
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(EditSource);
