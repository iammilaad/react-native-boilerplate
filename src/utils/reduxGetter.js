import { configureStore } from "../store";
const store = configureStore();
export const reduxGetter = (getter, _default = null) => {
    try {
        return getter(store.getState());
    } catch (error) {
        return _default;
    }
};

