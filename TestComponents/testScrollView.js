import React, { Component } from "react";
import {
    ScrollView,
    View, Text,
    Image,
    Dimensions,
    TextInput
} from "react-native";
export default class TestCrollView extends Component {
    render() {
        let screenWidth = Dimensions.get('window').width
        return (
            <ScrollView 
            keyboardDismissMode='on-drag'
            maximumZoomScale={3}
            minimumZoomScale={0.2} > 
                <Image
                    source={require('./../img/keyboard.jpg')}
                    style={{width: screenWidth, height: screenWidth*1800/4000}} >
                </Image>
                <Text style={{
                    fontSize: 20,
                    padding: 15,
                    textAlign: 'center',
                    backgroundColor: 'green'
                }}>
                    This is a text
                </Text>
                <TextInput style={{padding: 10, height: 40, margin: 20, borderWidth: 1, borderColor: 'black'}}
                placeholder='Enter text' >
                </TextInput>
                <Text style={{
                    fontSize: 20,
                    padding: 15,
                    textAlign: 'center',
                    backgroundColor: 'red'
                }}>
                    My name Cuong
                </Text>
                <Image
                    source={require('./../img/keyboard.jpg')}
                    style={{width: screenWidth, height: screenWidth*1800/4000}} >
                </Image>
                <Image
                    source={require('./../img/keyboard.jpg')}
                    style={{width: screenWidth, height: screenWidth*1800/4000}} >
                </Image>
                <Image
                    source={require('./../img/keyboard.jpg')}
                    style={{width: screenWidth, height: screenWidth*1800/4000}} >
                </Image>
            </ScrollView>


        )
    }
}