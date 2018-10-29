import React from 'react'
import {
    View,
    Text,
    StyleSheet,
} from 'react-native'
import { USER_KEY } from './config'
import {goTo} from 'utils/reactNativeNavigation/goTo';

export default class Initialising extends React.Component {
    async componentDidMount() {
        try {
            const user = USER_KEY;
            if (user !== null) {
                goTo(this.props.navigator,'intro')
            }
            else {
                goTo(this.props.navigator,'login')
            }
        } catch (err) {
            goTo(this.props.navigator,'login')
        }
    }

    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.welcome}>Loading</Text>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    welcome: {
        fontSize: 28
    },
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
})
