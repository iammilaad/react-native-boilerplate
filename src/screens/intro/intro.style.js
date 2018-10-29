import {StyleSheet} from 'react-native';
import theme from 'src/theme';

export const styles = StyleSheet.create({
    headerStyleText: {
        color: 'rgba(31,174,255,1)',
        fontSize: 15,
        paddingRight:5
    },

    mainContent: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    },
    text: {
        color: 'black',
        backgroundColor: 'transparent',
        textAlign: 'center',
    },
    title: {
        color: 'rgba(51,51,51,1)',
        fontSize: 21,
        lineHeight: 26,
        textAlign: 'center',
        marginBottom:15
    },
    SkipText:{
        padding:35,
        color: '#370fb5',
        fontSize: 15,
        lineHeight:19,

    },
    NextButton:{
        fontSize: 15,
        paddingRight:10,
        color: theme.primary,
        lineHeight:19,

    },
    buttonPrev:{
        fontSize: 15,
        paddingLeft:10,
        color: theme.primary,
        lineHeight:19,
    },
    DoneText:{
        color:theme.primary,
        fontSize:15,
        fontWeight:'400',
        padding:35,

    },
});
