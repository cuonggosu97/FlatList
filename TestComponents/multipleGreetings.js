import React, { Component } from "react";
import {
    Text,
    View,
} from "react-native";

class Greeting extends Component{
    render(){
        return(
            <Text>Hello {this.props.name} </Text>
        );
    }
}

export default class MultipleGreetings extends Component{
    render(){
        return(
            <View style={{alignItems: 'center'}}>
                <Greeting name = 'Pham Van Cuong'></Greeting>
                <Greeting name = 'Hoang Van Manh'></Greeting>
                <Greeting name = 'Nguyen Quoc Khang'></Greeting>
            </View>
        );
    }
}