import { connect } from 'react-redux'
import InputForm from '../components/InputForm'
import { requestCalculation, handleInputChange } from '../actions'

const mapStateToProps = state => {
    return {
        input: state.calculator.input,
        valid: state.calculator.valid,
        calculating: state.calculator.calculating
    }
}

const mergeProps = (stateProps, dispatchProps, ownProps) => {
    const { dispatch } = dispatchProps;
    return {
        ...stateProps,
        ...ownProps,
        onSubmit: () => dispatch(requestCalculation(stateProps.input)),
        onChange: value => dispatch(handleInputChange(value))
    }
}

export default connect(mapStateToProps, null, mergeProps)(InputForm)