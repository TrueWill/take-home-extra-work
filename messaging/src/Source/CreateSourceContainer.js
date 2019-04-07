import { connect } from 'react-redux';
import CreateSource from './CreateSource';
import { getNewSourceLocation } from '../selectors/simple';
import { createSource } from '../actions/sourceActions';

const mapStateToProps = state => ({
  newLocation: getNewSourceLocation(state)
});

const mapDispatchToProps = {
  createSource
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CreateSource);
