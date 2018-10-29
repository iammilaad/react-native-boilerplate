import { Map } from "immutable";
import { createReducer } from "redux-immutablejs";
import * as constants from "./constants";

const initialState = Map({
    status: null
});

export default {
    [constants.HOME]: createReducer(initialState, {
        [constants.STATUS]: (state, action) =>
            state.merge({
                status: action.payload.status
            }),
    })
};
