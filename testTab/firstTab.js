import React, { Component } from "react";
import {
    Text,
    View,
    Button,
    Image
} from "react-native";
export default class FirstTab extends Component {
    static FirstTab = {
        tabBarLabel: 'Tab 1'
    }
    render() {
        return (
            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                <Text style={{ fontSize: 30 }}>
                    This is tab1
                </Text>
            </View>
        )
    }
} 