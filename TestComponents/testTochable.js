import React, { Component } from "react";
import {
    TouchableHighlight,
    TouchableNativeFeedback,
    TouchableOpacity,
    TouchableWithoutFeedback,
    View,
    Text,
    Alert
} from "react-native";

export default class TestTouchable extends Component {
    _onPress = () => {
        alert('You touch me?');
    }
    render() {
        return (
            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                <TouchableHighlight onPress={this._onPress} underlayColor='red'
                >
                    <View style={{ backgroundColor: 'blue', margin: 20}}>
                        <Text style={{ fontSize: 15, padding: 12 }}>
                            TouchableHighlight
                    </Text>
                    </View>
                </TouchableHighlight>
                <TouchableOpacity
                onPress={this._onPress} activeOpacity={0} >
                    <View style={{backgroundColor: 'green', margin: 20}}>
                        <Text style={{fontSize: 15, padding: 12}}>
                            TouchableOpacity
                        </Text>
                    </View>
                </TouchableOpacity>
            </View>
        )
    }
}