import { fromJS } from "immutable";

const initialState = fromJS({});
const loadingReducer = (state = initialState, action) => {
  const { type, payload = { scope: "" } } = action;
  if (type === `${payload.scope}/SET_LOADING`) {
    return state.mergeDeep({
      [payload.scope]: { status: action.payload.loading }
    });
  } else {
    return state;
  }
};
export default loadingReducer;
