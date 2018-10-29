import {StyleSheet} from 'react-native';
import theme from 'src/theme';

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
    },
    big: {
        fontSize: 20
    },
    instructions: {
        textAlign: 'center',
        color: theme.primary,
        marginBottom: 5,
    },
});
