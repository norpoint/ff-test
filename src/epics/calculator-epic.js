import { Observable } from 'rxjs'
import { CALCULATION_REQUEST, receiveCalculation, handleError } from '../actions'

const fetchObservable = url => Observable.from(fetch(url).then(response => response.json()));


const calculatorEpic = (action$, store) =>
    action$.ofType(CALCULATION_REQUEST)
        .switchMap(action => fetchObservable(`http://fubar.com/person/${action.input}`))        // takeUntil not needed because of switchMap
        .switchMap(personResponse => fetchObservable(`http://fubar.com/facility/${personResponse.val1}`)
            .takeUntil(action$.ofType(CALCULATION_REQUEST))                                     // recalculation requested => abandon previous request
            .map(facilityResponse => ({facilityResponse, personResponse})))
        .switchMap(responses => fetchObservable(`http://fubar.com/exposure/${responses.personResponse.val1}`)
            .takeUntil(action$.ofType(CALCULATION_REQUEST))                                     // recalculation requested => abandon previous request
            .map(exposureResponse => Object.assign({}, responses, { exposureResponse })))
        .map(responses => receiveCalculation(responses.facilityResponse.val3 * responses.exposureResponse.val5))
        .catch(e => Observable.of(handleError(`Server error details: ${e.message}`)))

export default calculatorEpic;