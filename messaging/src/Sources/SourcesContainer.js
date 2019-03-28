import { connect } from 'react-redux';
import { foo } from '../actions/sourceActions';
import { getSources } from '../selectors/simple';
import Sources from './Sources';

const mapStateToProps = state => ({
  sources: getSources(state)
});

const mapDispatchToProps = {
  foo
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Sources);
