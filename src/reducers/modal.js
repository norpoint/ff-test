import { CALCULATION_RECEIVED, CLOSE_MODAL, HANDLE_ERROR } from '../actions';

const initialState = { message: "", title: "", show: false };

export default function(state = initialState, action) {
    switch (action.type) {
        case CALCULATION_RECEIVED:
            return {
                title: 'The results are in!',
                message: `Through extensive research and analysis of your submitted data, we have found what we believe to be the best result just for you: ${action.output}!`,
                show: true
            };
        case HANDLE_ERROR:
            return {
                title: 'We seem to be experiencing problems',
                message: action.message,
                show: true
            };
        case CLOSE_MODAL:
            return initialState;
        default:
            return state;
    }
}