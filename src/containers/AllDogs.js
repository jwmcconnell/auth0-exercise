import { connect } from 'react-redux';
import Dogs from '../components/Dogs';
import { getDogs } from '../selectors/dogsSelectors';

const mapStateToProps = state => ({
  dogs: getDogs(state)
});

export default connect(
  mapStateToProps
)(Dogs);
