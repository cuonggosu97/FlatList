import React, { Component } from "react";
import {
    View,
    Text,
    TextInput
} from "react-native";

export default class TestInputText extends Component {
    constructor(props) {
        super(props);
        this.state = {
            typeEmail: '',
            typePassword: ''
        }
    }

    _inputEmail = (text) => {
        this.setState({ typeEmail: text })
    }
    _inputPassWord = (text) => {
        this.setState({ typePassword: text })
    }
    render() {
        return (
            <View>
                <TextInput style={{
                    height: 40, margin: 20, padding: 10, borderWidth: 1, borderColor: 'gray'
                }}
                    keyboardType='email-address'
                    placeholder='Enter your email'
                    onChangeText={this._inputEmail}
                    value={this.state.typeEmail} />
                <Text style={{ marginLeft: 20 }}>{this.state.typeEmail}</Text>
                <TextInput style={{
                    height: 40, margin: 20, padding: 10, borderWidth: 1, borderColor: 'gray'
                }}
                    keyboardType='default'
                    placeholder='Enter your password'
                    secureTextEntry={true}
                    onChangeText={this._inputPassWord}
                    value={this.state.typePassword} />
            </View>
        );
    }
}