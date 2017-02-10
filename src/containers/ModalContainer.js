import { connect } from 'react-redux'
import { modalClose } from '../actions'
import Modal from '../components/Modal'

const mapStateToProps = state => {
    return {
        title: state.modal.title,
        message: state.modal.message,
        show: state.modal.show
    }
}

const mapDispatchToProps = dispatch => {
    return {
        onClose: () => {
            dispatch(modalClose())
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Modal)