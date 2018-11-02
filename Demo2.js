import React, { Component } from 'react';
import {
    View,
    Text,
    TextInput,
    TouchableOpacity
} from 'react-native';

export default class From extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            input: '',

        }
    }
    // componentDidMount = () => {
    // }

    // handleChangeInput = (text) => {
    //     this.setState({ input: text })
    // }

    render() {
        // const { input } = this.state;
        let abc = this.props.abc
        return (
            <View>
                <Text>{abc}</Text>
            </View>
        )
    }
}