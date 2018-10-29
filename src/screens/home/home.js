import React, {Component, Fragment} from 'react';
import {TouchableOpacity, View} from 'react-native';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {toJS} from 'utils/higherOrderComponents/toJsHoc';
import * as actions from './actions';
import * as constants from './constants';
import {styles} from './home.style';
import translate from 'i18n';
import Text from 'components/uiElements/text';

class Home extends Component {
    constructor(props) {
        super(props);
        this.props.navigator.setTitle({title: translate('welcome')});
    }

    handleSubmit = () => {
        const {setTestRequest} = this.props;
        setTestRequest();
    };

    render() {
        const {responseStatus, loading} = this.props;
        return (
            <Fragment>
                <View style={styles.container}>
                    <TouchableOpacity onPress={() => this.handleSubmit()}
                    >
                        <Text style={styles.big} weight="bold">{translate('clickMe')}</Text>
                    </TouchableOpacity>
                    {loading === true ? <Text>loading...</Text> : null}
                    <Text>{responseStatus}</Text>
                    <Text weight="bold">{translate('welcome')}</Text>
                    <Text weight="boldItalic">{translate('welcome')}</Text>
                    <Text weight="extraBold">{translate('welcome')}</Text>
                    <Text weight="ExtraBoldItalic">{translate('welcome')}</Text>
                    <Text weight="italic">{translate('welcome')}</Text>
                    <Text weight="light">{translate('welcome')}</Text>
                    <Text weight="lightItalic">{translate('welcome')}</Text>
                    <Text weight="regular">{translate('welcome')}</Text>
                    <Text weight="semiBold">{translate('welcome')}</Text>
                    <Text weight="semiBoldItalic">{translate('welcome')}</Text>
                </View>
            </Fragment>

        );
    }
}
const mapStateToProps = state => ({
    responseStatus: state.getIn([constants.HOME, "status"]),
    loading: state.getIn(["loading", constants.HOME, "status"], false),
});
const mapDispatchToProps = dispatch => {
    const {setTestRequest} = actions;
    return bindActionCreators({setTestRequest}, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(toJS(Home));
