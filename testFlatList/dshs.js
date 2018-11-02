import React, { Component } from "react";
import {
    Text,
    View,
    TouchableOpacity,
    FlatList,
    Image,
    TextInput,
    KeyboardAvoidingView,
} from "react-native";

export default class DSHS extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: [
                {
                    img: require('./../img/profile.png'),
                    name: 'Pham Van Cuong',
                    phone: '096 596 1855'
                },
                {
                    img: require('./../img/profile.png'),
                    name: 'Le Gia Hieu',
                    phone: '0188 294 3609'
                },
            ],
            name: '',
            phone: '',
        }
    }

    _inputName = (text) => {
        this.setState({ name: text })
    }
    _inputPhone = (text) => {
        this.setState({ phone: text })
    }
    _saveArray = () => {

        let arrTemp = this.state.data || [];
        let obj = {
            img: require('./../img/profile.png'),
            name: this.state.name,
            phone: this.state.phone,
        };
        arrTemp.push(obj);
        this.setState({ data: arrTemp, name: '', phone: '' })
    }
    _viewList = ({ item, index }) =>
        <View style=
            {{ flex: 1, padding: 10, flexDirection: 'row', height: 50, borderEndWidth: 5, borderColor: 'black' }}>
            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                <Image source={item.img} style={{ width: 40, height: 40, borderRadius: 20 }} />
            </View>
            <View style={{ flex: 5, justifyContent: 'center', padding: 5, marginLeft: 10 }}>
                <Text style={{ textAlign: 'left', fontSize: 15, marginBottom: 5 }}>
                    {item.name}
                </Text>
                <Text style={{ textAlign: 'left', fontSize: 12 }}>
                    {item.phone}
                </Text>
            </View>
        </View>

    render() {
        return (
            <KeyboardAvoidingView behavior='height' style={{ flex: 1 }}>
                <View style={{ flex: 1, padding: 12 }}>
                    <View style={{ flex: 1, flexDirection: 'row' }}>
                        <View style={{ flex: 4 }}>
                            <View style={{ flex: 1, height: 50, padding: 1, flexDirection: 'row', backgroundColor: 'green' }}>
                                <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                                    <Text style={{ fontSize: 15 }}>
                                        Tên
                                    </Text>
                                </View>
                                <View style={{ flex: 4, justifyContent: 'center', alignItems: 'center', backgroundColor: 'red' }}>
                                    <TextInput
                                        style={{ width: '100%', height: 40, paddingLeft: 10, paddingRight: 10 }}
                                        onChangeText={this._inputName}
                                        value={this.state.name} />
                                </View>
                            </View>
                            <View style={{ flex: 1, height: 50, padding: 1, flexDirection: 'row', backgroundColor: 'yellow' }}>
                                <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                                    <Text style={{ fontSize: 15 }}>
                                        SĐT
                                    </Text>
                                </View>
                                <View style={{ flex: 4, justifyContent: 'center', alignItems: 'center' }}>
                                    <TextInput
                                        style={{ width: '100%', height: 40, paddingLeft: 10, paddingRight: 10 }}
                                        onChangeText={this._inputPhone}
                                        value={this.state.phone} />
                                </View>
                            </View>
                        </View>
                        <TouchableOpacity onPress={this._saveArray} style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: 'blue' }}>
                            <Text style={{ fontSize: 15 }}>
                                Save
                            </Text>
                        </TouchableOpacity>
                    </View>
                    <View style={{ flex: 3, }}>
                        <View style={{ flex: 1, height: 30, justifyContent: 'center', alignItems: 'center' }}>
                            <Text style={{ fontSize: 25 }}>
                                DSHS
                        </Text>
                        </View>
                        <View style={{ flex: 3 }}>
                            <FlatList
                                data={this.state.data}
                                extraData={this.state}
                                keyExtractor={(item, index) => index + ''}
                                renderItem={this._viewList} />
                        </View>
                    </View>
                </View>
            </KeyboardAvoidingView>
        );
    }
}
