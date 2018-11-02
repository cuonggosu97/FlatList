import React, { Component } from "react";
import {
    Image,
    View
} from "react-native";

export default class Robot extends Component {
    render() {
        let pic = { uri: 'https://upload.wikimedia.org/wikipedia/commons/0/05/HONDA_ASIMO.jpg' };
        return (
            <View style={{ flex: 1 }}>
                <Image source={pic} style={{ width: 300, height: 200 }}>

                </Image>
            </View>
        );
    }
}