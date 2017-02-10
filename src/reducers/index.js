import { combineReducers } from 'redux'

import modal from './modal'
import calculator from './calculator'

export default combineReducers({
    calculator,
    modal
})