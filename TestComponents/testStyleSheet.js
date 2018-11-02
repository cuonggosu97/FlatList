import React, { Component } from "react";
import {
    Text,
    View,
    StyleSheet,

} from "react-native";

export default class TestStyleSheet extends Component {
    render() {
        return (
            <View style={[styles.container, styles.centerView]}>
                <Text style={styles.firstText}>
                    Hello
                </Text>
            </View>
        );
    }
}
const styles = StyleSheet.create({
    container: {
        marginTop: 20, marginLeft: 10, marginRight: 10, backgroundColor: 'green', borderWidth: 2, borderColor: 'black'
    },
    firstText: {
        fontSize: 15, color: 'white', margin: 5
    },
    centerView: {
        justifyContent: 'center', alignItems: 'center'
    }
})
