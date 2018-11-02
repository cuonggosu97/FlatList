import React, { Component } from 'react';
import {
    View,
    TextInput,
    Text,
} from 'react-native'
export default class test1 extends Component {
    constructor(props) {
        super(props)
        this.state = {
            a: ''
        }
    }
    input_a = (text) => {
        this.setState({ a: text })
    }

    render() {
        return (
            <View style={{ flex: 1, height: 60, alignItems: 'center', padding: 12 }}>
                <Text style={{ textAlign: 'left', margin: 5 }}>
                    Số thứ nhất
                </Text>
                <TextInput
                    style={{ flex: 1, width: '100%', height: 20, margin: 5 }}
                    onChangeText={this.input_a}
                    value={this.state.a} />
            </View>
        )
    }
}