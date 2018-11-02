import React, { Component } from 'react';
import {
    View,
    Text,
} from 'react-native';

export default class test2 extends Component {
    constructor(props) {
        super(props)
    }
    render() {
        let tich = this.props.tich
        return (
            <View style={{ width: '100%', height: 40, justifyContent: 'center', alignContent: 'center', flex: 1, alignItems:'center' }}>
                <Text style={{ fontSize: 30, color: 'red', }}>
                    Tích của hai số là: {tich}
                </Text>
            </View>
        )
    }



}