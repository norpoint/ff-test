import { combineEpics } from 'redux-observable';

import calculatorEpic from './calculator-epic';

export default combineEpics(
    calculatorEpic
);