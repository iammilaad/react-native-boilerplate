import { Provider } from 'react-redux';
import {registerScreens, registerScreenVisibilityListener} from './routes';
import { configureStore, sagaMiddleware, rootSage } from './store';
import Initial from './initial'

const store = configureStore();

sagaMiddleware.run(rootSage);

registerScreens(store, Provider);
registerScreenVisibilityListener();

export default async function App() {
    return new Initial();
}

