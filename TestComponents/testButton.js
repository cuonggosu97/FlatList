import React, { Component } from "react";
import { 
    View, 
    Alert
 } from "react-native";
//  import Button from 'react-native-button';

 export default class TestButton extends Component{
     _onPressButton=()=>{
         Alert.alert('You pressed the Button!');
     }
    render(){
        return(
            <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
                <View style={{padding: 12, backgroundColor: 'green'}}>
                    <Button onPress={this._onPressButton}
                    title='This is a button'
                    color= 'white'>
                    </Button>
                </View>
            </View>
        );
    }
 }