import React, { Component } from "react";
import {
    View, Text
} from "react-native";

export default class ThirdComponent extends Component {
    render() {
        return (
            <View style={{
                flex: 1,
                backgroundColor: 'tomato',
                justifyContent: 'center',
                alignItems: 'center'
            }}>
                <Text style={{ fontSize: 22, color: 'white', fontWeight: 'bold' }}>
                    This is Third Sreen
                </Text>
            </View>
        )
    }
}