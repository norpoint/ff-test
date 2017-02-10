export const CALCULATION_REQUEST = 'CALCULATION_REQUEST'
export const CALCULATION_RECEIVED = 'CALCULATION_RECEIVED'
export const INPUT_CHANGE = 'INPUT_CHANGE'
export const CLOSE_MODAL = 'CLOSE_MODAL';
export const HANDLE_ERROR = 'HANDLE_ERROR';

export const requestCalculation = input => ({
    type: CALCULATION_REQUEST,
    input
})

export const receiveCalculation = output => ({
    type: CALCULATION_RECEIVED,
    output
})

export const modalClose = () => ({
    type: CLOSE_MODAL
})

export const handleError = message => ({
    type: HANDLE_ERROR,
    message
})

export const handleInputChange = input => ({
    type: INPUT_CHANGE,
    input
})
