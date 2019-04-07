import { connect } from 'react-redux';
import { getError } from './selectors/simple';
import App from './App';

const mapStateToProps = state => ({
  error: getError(state)
});

export default connect(mapStateToProps)(App);
