import * as constants from "./constants";

export const setTestRequest = () => ({
    type: constants.HOME_REQUEST,
});
export const setToReduxStatus = status => ({
    type: constants.STATUS,
    payload: {
        status
    }
});
