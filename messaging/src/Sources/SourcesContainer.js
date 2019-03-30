import { connect } from 'react-redux';
import { fetchSources, fetchSource } from '../actions/sourceActions';
import { getSources, getCurrentSource } from '../selectors/simple';
import Sources from './Sources';

const mapStateToProps = state => ({
  sources: getSources(state),
  currentSource: getCurrentSource(state)
});

const mapDispatchToProps = {
  fetchSources,
  fetchSource
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Sources);
