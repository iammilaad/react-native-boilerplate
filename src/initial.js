import { Navigation } from 'react-native-navigation';

export default function Initial() {
    return  Navigation.startSingleScreenApp({
        screen: {
            screen: "Initializing",
        },
    });
}
