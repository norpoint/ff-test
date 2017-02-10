import { createStore, applyMiddleware, compose } from 'redux';
import { createEpicMiddleware } from 'redux-observable';
import createLogger from 'redux-logger';
import rootReducer from './reducers';
import rootEpic from './epics';

const epicMiddleware = createEpicMiddleware(rootEpic);

export default function configureStore() {
    const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
    let middleWare = [epicMiddleware];
    if (process.env.NODE_ENV !== 'production') {
        middleWare.push(createLogger())
    }

    const store = createStore(
        rootReducer,
        composeEnhancers(applyMiddleware(...middleWare))
    );
    return store;
}