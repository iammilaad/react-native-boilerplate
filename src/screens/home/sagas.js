import { call, put, takeEvery } from "redux-saga/effects";
import * as constants from "./constants";
import * as actions from "./actions";
import loadingAction from "utils/globalRedux/loading/action";
import {api} from 'utils/api/agent';

function* home(action) {
    try {
        yield put(loadingAction(constants.HOME, true));
        const {status} = yield api.get("/");
        yield put(actions.setToReduxStatus(status));
    } catch (e) {
        yield put(loadingAction(constants.HOME, false));
        console.log("i`m here with error");
    }
    finally {
        yield put(loadingAction(constants.HOME, false));
        console.log("finally i`m here");
    }
}

export function* homeRequestSaga() {
    yield takeEvery(constants.HOME_REQUEST, home);
}

export default [
    homeRequestSaga()
];
