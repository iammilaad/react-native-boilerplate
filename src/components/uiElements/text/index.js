import React, {Component} from 'react';
import { Text as RNText } from 'react-native';
import wrapStyle from './style';

export default class Text extends Component {
    render() {
        const { weight, color, style, ...props } = this.props;
        const styles = wrapStyle({ weight, color });
        return <RNText style={[styles.text, style]} {...props}>{this.props.children}</RNText>
    }
}