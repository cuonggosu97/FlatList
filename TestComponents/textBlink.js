import React, { Component } from "react";
import {
    Text,
    View
} from "react-native";

class Blink extends Component {
    constructor(props) {
        super(props);
        this.state = {
            showText: true,
        };
        var taskToDo = () => {
            this.setState(previousState => {
                return {
                    showText: !previousState.showText
                };
            });
        };
        const timeToBlink = 1000;
        setInterval(taskToDo, timeToBlink);
    }
    render() {
        let textToDisplay = this.state.showText ==true? this.props.inputText : null;
        return (
            <Text> {textToDisplay} </Text>
        );
    }
}

export default class TextBlink extends Component {
    render() {
        return (
            <View>
                <Blink inputText='Chao Cuong'></Blink>
                <Blink inputText='Chao Khang'></Blink>
            </View>
        );
    }
}