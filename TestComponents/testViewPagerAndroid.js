import React, { Component } from "react";
import {
    View,
    Text,
    ViewPagerAndroid,
    StyleSheet
} from "react-native";

export default class TestViewPagerAndroid extends Component {
    render() {
        return (
            <ViewPagerAndroid
                style={{ flex: 1 }}
                initialPage={0} >
                <View style={{ backgroundColor: 'lightseagreen' }}>
                    <Text style={styles.textStyle}>
                        Screen 1
                </Text>
                </View>
                <View style={{ backgroundColor: 'lightseagreen' }}>
                    <Text style={styles.textStyle}>
                        Screen 2
                </Text>
                </View>
                <View style={{ backgroundColor: 'lightseagreen' }}>
                    <Text style={styles.textStyle}>
                        Screen 3
                </Text>
                </View>
            </ViewPagerAndroid>
        )
    }
}

const styles = StyleSheet.create({
    textStyle: {
        fontSize: 20,
        fontWeight: 'bold',
        padding: 12,
        color: 'white',
        textAlign: 'center'
    }
});