import { connect } from 'react-redux';
import { fetchSources } from '../actions/sourceActions';
import { getSources } from '../selectors/simple';
import Sources from './Sources';

const mapStateToProps = state => ({
  sources: getSources(state)
});

const mapDispatchToProps = {
  fetchSources
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Sources);
