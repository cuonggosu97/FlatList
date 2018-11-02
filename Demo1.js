/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
    AppRegistry,
    Image,
    View,
    TouchableOpacity,
    Text,
    TextInput,
    ImageBackground,
    KeyboardAvoidingView,
    ScrollView,
    Platform
} from 'react-native';

export default class Demo1 extends Component {
    constructor(props) {
        super(props);

        _onClick = () => {
            alert('Login')
        }
    }

    render() {
        let pic = require('./img/background.jpg');
        return (
            <ImageBackground source={pic} style={{ width: '100%', height: '100%' }}>
                <KeyboardAvoidingView behavior={Platform.OS == 'android' ? 'none' : 'padding'} >
                    <ScrollView>
                        <View style={{ flex: 1, alignItems: 'center', padding: 12 }}>
                            <View style={{ width: 150, height: 150, borderRadius: 75, backgroundColor: 'black', alignItems: 'center', margin: 50, justifyContent: 'center' }}>
                                <Text style={{ fontSize: 80, color: 'white', }}>
                                    97
                                </Text>
                            </View>
                            <View style={{ width: '100%', height: 300, margin: 20 }}>
                                <Text style={{ textAlign: 'left', margin: 5 }}>
                                    Username:
                                </Text>
                                <TextInput style={{ flex: 1, width: '100%', margin: 5, height: 30, }} onChangeText={(txt) => {
                                }} />
                                <Text style={{ textAlign: 'left', margin: 5 }}>
                                    Password:
                    </Text>
                                <TextInput secureTextEntry={true} style={{ flex: 1, width: '100%', margin: 5, height: 30 }} onChangeText={(txt) => {
                                }} />
                                <Text style={{ textAlign: 'right', margin: 20 }}>
                                    Forget your password
                    </Text>
                                <TouchableOpacity
                                    onPress={this._onClick}
                                    style={{ backgroundColor: 'orange', width: '100%', height: 40, alignItems: 'center', justifyContent: 'center', margin: 10 }}>
                                    <Text style={{ fontSize: 15, color: 'white' }}>
                                        Login
                                </Text>
                                </TouchableOpacity>
                                <View style={{ flexDirection: 'row', justifyContent: 'center' }}>
                                    <Text style={{ color: 'white' }}>
                                        Don't have an account?
                                </Text>
                                    <Text style={{ fontWeight: 'bold', color: 'white' }}>Sign Up?</Text>
                                </View>
                            </View>

                        </View>
                    </ScrollView>
                </KeyboardAvoidingView>
            </ImageBackground>
        );
    }
}
