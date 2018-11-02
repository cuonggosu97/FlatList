import React, { Component } from 'react';
import {
    View,
    Text,
    TextInput,
    TouchableOpacity,
    KeyboardAvoidingView,
    Platform,
    ScrollView
} from 'react-native';
import Test1 from './test1'
export default class test2 extends Component {
    constructor(props) {
        super(props)
        let a = this.props.a
        this.state = {
            b: '',
            tich: '',
        }
    }

    input_b = (text) => {
        this.setState = ({ b: text })
    }
    tich = () => {

        this.setState = ({ tich: parseInt(this.ref_test1.state.a) * parseInt(this.state.b) })
    }

    // componentDidMount = () => {
    //     alert(this.ref_test1.state.a)
    // }

    render() {
        return (
            <KeyboardAvoidingView behavior={Platform.Os == 'android' ? '' : 'padding'}>
                <ScrollView>
                    <View style={{ flex: 1, width: '100%', height:500, alignItems: 'center', padding: 40 }}>
                        <Test1 ref={(ref) => this.ref_test1 = ref} />
                        <View style={{ flex: 1, alignItems: 'center', padding: 12 }}>
                            <Text style={{ textAlign: 'left', margin: 5 }}>
                                Số thứ 2
                        </Text>
                            <TextInput 
                                style={{ flex: 1, width: '100%', height: 20, margin: 30 }}
                                onChangeText={this.input_b}
                                value={this.state.b} />
                            <TouchableOpacity onPress={this.tich}
                                style={{ backgroundColor: 'black', width: '100%', height: 40, alignItems: 'center', margin: 40 }}>
                                <Text style={{ color: 'white', fontSize: 15 }}>
                                    Tích
                            </Text>
                            </TouchableOpacity>
                            <Text style={{ color: 'red', fontSize: 30, }}>
                                Tích hai số là: {this.state.tich}
                            </Text>
                        </View>
                    </View>
                </ScrollView>
            </KeyboardAvoidingView>
        )
    }
}
