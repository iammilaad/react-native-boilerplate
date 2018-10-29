import { Platform } from 'react-native';

export default (configs) => ({
    text: {
        ...Platform.select({
            ios: {
                fontFamily: configs.weight ?
                    `OpenSans-${configs.weight.charAt(0).toUpperCase() + configs.weight.slice(1)}` :
                    'OpenSans-SemiBold',
            },
            android: {
                fontFamily: configs.weight ?
                    `OpenSans-${configs.weight.charAt(0).toUpperCase() + configs.weight.slice(1)}` :
                    'OpenSans-Regular',
            }
        }),
    }
});
