import { connect } from 'react-redux';
import Tab from './Tab.jsx';
import { tab } from '../../actions'

const mapStateToProps = state => {
    return {
        ...state,
        currIndex: state.currIndex
    }
};
 
const mapDispatchToProps = dispatch => {
    return {
        handleClick: index => {
            dispatch(tab(index));
        }
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(Tab);

