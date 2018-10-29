import React, { Component } from 'react';
import { View, Image } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import translate from 'i18n';
import Text from 'components/uiElements/text';
import AppIntroSlider from 'react-native-app-intro-slider';
import { styles } from './intro.style';
import {goTo} from 'utils/reactNativeNavigation/goTo';



const slides = [
    {
        key: 'intro1',
        icon: 'extension',
        title: translate('introOneTitle'),
        text: translate('introOneText'),
        colors: '#63E2FF',
    },
    {
        key: 'intro2',
        icon: 'face',
        title: translate('introSecondTitle'),
        text: translate('introSecondText'),
        colors: '#A3A1FF'

    },
    {
        key: 'intro3',
        icon: 'favorite',
        title: translate('introThirdTitle'),
        text: translate('introThirdText'),
        colors: '#29ABE2',
    },
];

export default class Intro extends Component {
    static navigatorStyle = {
        navBarHidden: true
    };
    constructor(props) {
        super(props);
    }
    goToHome = () => {
        goTo(this.props.navigator,'home');
    };
    _renderItem = props => (
        <View
            style={[styles.mainContent, {
                backgroundColor: props.colors,
                width: props.width,
                height: props.height,
            }]}
        >
            <Icon style={{ backgroundColor: 'transparent' }} name={props.icon} size={200} color="#fff" />
            <View style={{ maxWidth: 300, marginTop: 30 }}>
                <Text weight="bold" style={styles.title}>{props.title}</Text>
                <Text weight="regular" style={styles.text}>{props.text}</Text>
            </View>
        </View>
    );
    _renderNextButton = () => {
        return (
            <View style={{ paddingRight: 30, flex: 1, flexDirection: 'row' }}>
                <Text style={styles.NextButton}>
                    {translate('next')}
                </Text>
                <View style={{paddingTop:2  }}>
                    <Icon name="arrow-forward" size={17} color="rgba(51,51,51,1)" />
                </View>
            </View>
        );
    }
    _renderDoneButton = () => {
        return (
            <View>
                <Text style={styles.DoneText}>{translate('loginRegister')}</Text>
            </View>
        );
    }
    _renderSkipButton = () => {
        return (
            <View>
                <Text style={styles.SkipText}>{translate('loginRegister')}</Text>
            </View>
        );
    }
    _renderPrevButton = () => {
        return (
            <View style={{ paddingLeft: 30, flex: 1, flexDirection: 'row' }}>
                <View style={{paddingTop:2  }}>
                    <Icon name="arrow-back" size={17} color="rgba(51,51,51,1)" />
                </View>
                <Text style={styles.buttonPrev}>
                    {translate('prev')}
                </Text>
            </View>
        );
    }
    render() {
        return (
            <AppIntroSlider
                slides={slides}
                activeDotStyle={{ backgroundColor: '#fff', width: 5, height: 5 }}
                dotStyle={{ backgroundColor: 'rgb(138, 223, 240)', width: 5, height: 5 }}
                renderItem={this._renderItem}
                showSkipButton={true}
                showPrevButton={true}
                renderDoneButton={this._renderDoneButton}
                renderPrevButton={this._renderPrevButton}
                renderSkipButton={this._renderSkipButton}
                renderNextButton={this._renderNextButton}
                onSkip={this.goToHome}
                onDone={this.goToHome}
            />

        );
    }
}
