import React, { Component } from "react";
import { DetailScreen, ThirdScreen } from "../screenNames";
import {
    Text, View
} from "react-native";
import Button from 'react-native-button';

export default class MainComponent extends Component {
    render() {
        const { navigation } = this.props;
        return (
            <View style={{
                flex: 1,
                backgroundColor: 'dodferblue',
                justifyContent: 'center',
                alignItems: 'center'
            }}>
                <Text style={{ fontSize: 22, color: 'white', fontWeight: 'bold' }}>
                    This is Main Sreen
                </Text>
                <Button
                    containerStyle={{
                        padding: 10, margin: 20, width: 200,
                        height: 45, borderRadius: 10, backgroundColor: 'darkviolet'
                    }}
                    style={{ fontSize: 18, color: 'white' }}
                    onPress={() => {
                        // this.props.navigate(DetailScreen);
                        navigation.navigate(DetailScreen);
                    }} >
                    Navigate to Detail
                </Button>
                <Button
                    containerStyle={{
                        padding: 10, margin: 20, width: 200,
                        height: 45, borderRadius: 10, backgroundColor: 'darkviolet'
                    }}
                    style={{ fontSize: 18, color: 'white' }}
                    onPress={() => {
                        navigation.navigate(ThirdScreen);
                    }} >

                </Button>
            </View>
        )
    }
}