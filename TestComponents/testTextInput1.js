import React, { Component } from "react";
import {
    Text,
    View,
    TextInput,
    Keyboard
} from "react-native";

export default class TestTextInput1 extends Component {
    constructor(props) {
        super(props);
        this.state = {
            typeUsername: '',
            typePassword: '',
            typeNote: '',
            checkKeybord: ''
        }
    }

    _inputUsernam = (text) => {
        this.setState({ typeUsername: text })
    }
    _inputPassword = (text) => {
        this.setState({ typePassword: text })
    }
    _inputNote = (text) => {
        this.setState({ typeNote: text })
    }
    componentWillMount(){
        this.keyboardDidShowListener= Keyboard.addListener('keyboardDidShow', ()=>{
            this.setState(()=>{
                return{ checkKeybord: 'Keybord is show'}
            });
        });
        this.keyboardDidHideListener= Keyboard.addListener('keyboardDidHide', ()=>{
            this.setState(()=>{
                return{ checkKeybord: 'Keybord is hide'}
            });
        });
    }
    componentWillUnmount(){
        this.keyboardDidShowListener.remove();
        this.keyboardDidHideListener.remove();
    }

    render() {
        return (
            <View>
                <TextInput style={{
                    height: 40, margin: 20, padding: 10, borderWidth: 1, borderColor: 'black'
                }}
                    // autoFocus={true}
                    keyboardType='email-address'
                    placeholder='Enter your email'
                    onChangeText={this._inputUsernam}
                    value={this.state.typeUsername} />
                <TextInput style={{
                    height: 40, margin: 20, padding: 10, borderWidth: 1, borderColor: 'black'
                }}
                    keyboardType='default'
                    placeholder='Enter your password'
                    secureTextEntry ={true}
                    onChangeText ={this._inputPassword}
                    value={this.state.typePassword} />
                <Text style={{fontSize: 15, marginLeft: 20}}>
                    {this.state.checkKeybord}
                </Text>
                <TextInput style={{
                    height: 100, margin: 20, padding: 10, borderWidth: 1, borderColor: 'black'
                }}
                    multiline={true}
                    editable={true}
                    returnKeyType='done'
                    // onSubmitEditing={Keyboard.dismiss}
                    keyboardType='default'
                    placeholder='Enter your note'
                    onChangeText={this._inputNote}
                    value={this.state.typeNote} />
            </View>
        );
    }
}