import {Navigation, ScreenVisibilityListener} from 'react-native-navigation';
import Home from 'screens/home/home';
import Initialising from './screens/initialising/initialising';
import Intro from './screens/intro/intro'


export function registerScreens(store: {}, Provider: {}) {
  Navigation.registerComponent('Initializing', () => Initialising, store, Provider);
  Navigation.registerComponent('home', () => Home, store, Provider);
  Navigation.registerComponent('intro',() => Intro,store,Provider);
}

export function registerScreenVisibilityListener() {
  new ScreenVisibilityListener({
    willAppear: ({screen}) => console.log(`Displaying screen ${screen}`),
    didAppear: ({screen, startTime, endTime, commandType}) => console.log('screenVisibility', `Screen ${screen} displayed in ${endTime - startTime} millis [${commandType}]`),
    willDisappear: ({screen}) => console.log(`Screen will disappear ${screen}`),
    didDisappear: ({screen}) => console.log(`Screen disappeared ${screen}`)
  }).register();
}
