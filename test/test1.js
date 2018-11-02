import React, { Component } from 'react';
import {
    AppRegistry,
    View,
    TouchableOpacity,
    Text,
    TextInput,
    ImageBackground,
    KeyboardAvoidingView,
    ScrollView,
    Platform
} from 'react-native';

import Test2 from './test2';
export default class test1 extends Component {
    constructor(props) {
        super(props)
        this.state = {
            a: '',
            b: '',
            tich: ''
        }
    }
    input_a = (text) => {
        this.setState({ a: text })
    }
    input_b = (text) => {
        this.setState({ b: text })
    }
    tich = () => {
        this.setState({ tich: parseInt(this.state.a) * parseInt(this.state.b) })
    }

    render() {
        let pic = require('./../img/background.jpg');
        return (
            <ImageBackground source={pic} style={{ width: '100%', height: '100%' }}>
                <KeyboardAvoidingView behavior={Platform.OS == 'android' ? '' : 'padding'}>
                    <ScrollView>
                        <View style={{ flex: 1, alignItems: 'center', padding: 12 }}>
                            <View style={{ width: 150, height: 150, borderRadius: 75, backgroundColor: 'black', alignItems: 'center', justifyContent: 'center', margin: 50 }}>
                                <Text style={{ fontSize: 60, color: 'white', }}>
                                    Tích
                                </Text>
                            </View>
                            <View style={{ width: '100%', height: 220, margin: 30 }}>
                                <Text style={{ textAlign: 'left', margin: 5 }}>
                                    Số thứ nhất
                                </Text>
                                <TextInput style={{ flex: 1, width: '100%', margin: 5, height: 20 }}
                                    onChangeText={this.input_a}
                                    value={this.state.a} />

                                <Text style={{ textAlign: 'left', margin: 5 }}>
                                    Số thứ 2
                                </Text>
                                <TextInput style={{ flex: 1, width: '100%', height: 20, margin: 5 }}
                                    onChangeText={this.input_b}
                                    value={this.state.b} />

                                <TouchableOpacity onPress={this.tich}
                                    style={{ backgroundColor: 'orange', width: '100%', height: 40, alignItems: 'center', justifyContent: 'center', margin: 10 }}>
                                    <Text style={{ color: 'white', fontSize: 15 }}>
                                        Tính
                                    </Text>
                                </TouchableOpacity>
                            </View>
                            <Test2 tich={this.state.tich} />
                        </View>
                    </ScrollView>
                </KeyboardAvoidingView>
            </ImageBackground>

        )
    }
}