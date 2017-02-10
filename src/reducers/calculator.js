import {CALCULATION_REQUEST, CALCULATION_RECEIVED, INPUT_CHANGE} from '../actions';

const initialState = { calculating: false, input: '', valid: false };
const inputValidator = /^[a-z0-9-]{1,10}$/i;

export default function(state = initialState, action) {
    switch (action.type) {
        case CALCULATION_REQUEST:
            return Object.assign({}, state, { calculating: true });
        case CALCULATION_RECEIVED:
            return initialState;
        case INPUT_CHANGE:
            let valid = inputValidator.test(action.input);
            return Object.assign({}, state, { valid, input: action.input });
        default:
            return state;
    }
}