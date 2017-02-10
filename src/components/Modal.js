import React, { PropTypes } from 'react'

const Modal = ({title, message, show, onClose}) => {
    return show ? (
        <div className="reveal-overlay show">
            <div className="reveal show modal-container">
                <p className="lead">{title}</p>
                <p className="body">{message}</p>
                <button className="close-button" data-close aria-label="Close modal" type="button" onClick={onClose}>
                    <span aria-hidden="true">&times;</span>
                </button>
                <div className="footer text-right">
                    <button className="button primary" onClick={onClose}>Close</button>
                </div>
            </div>
        </div>
    ) : null;
}


Modal.propTypes = {
    message: PropTypes.string.isRequired,
    show: PropTypes.bool.isRequired,
    onClose: PropTypes.func.isRequired
}

export default Modal;