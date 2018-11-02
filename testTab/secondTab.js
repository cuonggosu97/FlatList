import React, { Component } from "react";
import {
    Text,
    View,
    Button,
    Image
} from "react-native";
export default class SecondTab extends Component {
    static SecondTab = {
        tabBarLabel: 'Tab 2'
    }
    render() {
        return (
            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                <Text style={{ fontSize: 30 }}>
                    This is tab2
                </Text>
            </View>
        )
    }
} 