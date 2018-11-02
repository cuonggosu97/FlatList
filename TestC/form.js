import React, { Component } from 'react';
import {
    View,
    Text,
    TextInput,
    ScrollView,
    TouchableOpacity,
    Image
} from 'react-native';

export default class Form extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isShowMr: true
        }
    }

    _onClickMr = () => {
        this.setState({
            isShowMr: !this.state.isShowMr
        })
    }

    render() {
        let pic = require('./../img/tick.png');
        return (
            <ScrollView style={{ flex: 1 }}>
                <View style={{ padding: 30, flex: 1, alignItems: 'center' }}>
                    <View style={{ width: '100%', height: 130, flex: 1, margin: 10, flexDirection: 'row' }}>
                        <View style={{ flex: 2, justifyContent: 'flex-end', alignItems: 'flex-start' }}>
                            <Text style={{ fontSize: 40, color: 'white', textAlign: 'right' }}>
                                New
                        </Text>
                            <Text style={{ fontSize: 40, color: 'white', textAlign: 'right' }}>
                                Account
                        </Text>
                        </View>
                        <View style={{ flex: 1, justifyContent: 'flex-end', paddingBottom: 8 }} >
                            <Text style={{ fontSize: 12, color: 'white', textAlign: 'left' }}>
                                1/2
                            </Text>
                            <Text style={{ fontSize: 12, color: 'white', textAlign: 'left' }}>
                                STEPS
                            </Text>
                        </View>
                    </View>
                    <View style={{ width: '100%', height: 70, flex: 1, flexDirection: 'row', marginBottom: 30 }}>
                        <View style={{ flex: 4, alignItems: 'flex-start', justifyContent: 'center' }}>
                            <Text style={{ fontSize: 60, color: 'white', textAlign: 'left' }}>
                                Mr.C
                            </Text>
                        </View>
                        <View style={{ flex: 5, justifyContent: 'center', }}>
                            <Text style={{ fontSize: 12, color: 'white', textAlign: 'left' }}>
                                Upload a profile picture
                            </Text>
                            <Text style={{ fontSize: 12, color: 'white', textAlign: 'left' }}>
                                (Optional)
                            </Text>
                        </View>
                    </View>
                    <View style={{ flex: 1, width: '100%', }}>
                        <Text style={{ color: 'white', textAlign: 'left', fontSize: 12, marginBottom: 5 }}>
                            NAME
                        </Text>
                        <TextInput style={{ flex: 1, width: '100%', height: 40, fontSize: 16, color: '#FF9900', marginBottom: 10 }} />
                        <Text style={{ color: 'white', textAlign: 'left', fontSize: 12, marginBottom: 5 }}>
                            USER
                        </Text>
                        <TextInput style={{ flex: 1, width: '100%', height: 40, fontSize: 16, color: '#FF9900', marginBottom: 10 }} />
                        <View style={{ flex: 1, flexDirection: 'row', marginBottom: 10 }}>
                            <View style={{ flex: 1, width: 20, height: 20, paddingLeft: 10 }}>
                                <TouchableOpacity activeOpacity={1} onPress={this._onClickMr} style={{ width: '100%', height: '100%', backgroundColor: 'white' }}>
                                    {
                                        this.state.isShowMr == true ?
                                            <Image source={pic} style={{ width: 20, height: 20 }} />
                                            : null
                                    }
                                </TouchableOpacity>
                            </View>
                            <View style={{ flex: 15, width: '100%', height: 20, justifyContent: 'center' }}>
                                <Text style={{ fontSize: 23, color: 'white', textAlign: 'left', paddingLeft: 20 }}>
                                    Save me
                                </Text>
                            </View>
                        </View>
                        <Text style={{ color: '#FF0066', textAlign: 'center', fontSize: 14, marginBottom: 40 }}>
                            Username already in use.
                        </Text>
                        <TouchableOpacity
                            style={{ backgroundColor: 'black', width: '100%', height: 70, borderRadius: 35, alignItems: 'center', justifyContent: 'center', marginBottom: 20 }}>
                            <Text style={{ color: 'white', fontSize: 40, }}>
                                Next
                            </Text>
                        </TouchableOpacity>
                        <Text style={{ color: 'white', textAlign: 'center', fontSize: 14 }}>
                            Not the first time here? Log In.
                        </Text>
                    </View>
                </View>
            </ScrollView>
        )
    }
}