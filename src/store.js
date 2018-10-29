import { compose, createStore, applyMiddleware } from 'redux';
import { all } from "redux-saga/effects";
import { combineReducers } from "redux-immutable";
import createSagaMiddleware from 'redux-saga';
import logger from 'redux-logger'; //eslint-disable-line
import {FLUSH} from 'utils/middlewares/redux';
import loading from "utils/globalRedux/loading/reducer";
import Home from 'screens/home';

export const sagaMiddleware = createSagaMiddleware();

export const rootSage = function*() {
    yield all([
        ...Home.sagas
    ]);
};

const rootReducer = (state, action) => {
    if (action.type === FLUSH) {
        state = undefined;
    }

    return combineReducers({
        loading,
        ...Home.reducers
    })(state, action);
};

let middleware = [sagaMiddleware];

if (__DEV__) {
    middleware = [...middleware, logger];
} else {
    middleware = [...middleware];
}

export function configureStore(initialState) {
    const store = createStore(
        rootReducer,
        initialState,
        compose(
            applyMiddleware(...middleware),
        )
    );
    return store;
}
