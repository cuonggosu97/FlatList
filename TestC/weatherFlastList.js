import React, { Component } from 'react';
import {
    View,
    Text,
    TouchableOpacity,
    ScrollView,
    Image,
    FlatList
} from 'react-native';

export default class Weather extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: [
                {
                    time: '7:04pm',
                    adress: 'Palo Alto',
                    img: require('./../img/sun.png'),
                    tpt: '62°'
                },
                {
                    time: '7:04pm',
                    adress: 'San Francisco',
                    img: require('./../img/sun.png'),
                    tpt: '60°'
                },
                {
                    time: '7:04pm',
                    adress: 'San Jose',
                    img: require('./../img/sun.png'),
                    tpt: '66°'
                },
                {
                    time: '7:04pm',
                    adress: 'Los Angeles',
                    img: require('./../img/sun.png'),
                    tpt: '62°'
                },
                {
                    time: '7:04pm',
                    adress: 'Palo Alto',
                    img: require('./../img/suncloud.png'),
                    tpt: '50°'
                }
            ]
        }
    }

    _rendorItem = ({ item, index }) =>
        <View style={{ flex: 1, borderBottomWidth: 15, borderColor: '#BBBBBB', height: 85, flexDirection: 'row', padding: 10, backgroundColor: 'white' }}>
            <View style={{ flex: 5, justifyContent: 'center' }}>
                <Text style={{ fontSize: 12, textAlign: 'left', marginBottom: 5 }}>
                    {item.time}
                </Text>
                <Text style={{ fontSize: 20, textAlign: 'left' }}>
                    {item.adress}
                </Text>
            </View>
            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                <Image source={item.img} style={{ width: 50, height: 50 }} />
            </View>
            <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                <Text style={{ fontSize: 25 }}>
                    {item.tpt}
                </Text>
            </View>
        </View>

    render() {
        let pic = require('./../img/sunwhite1.png')
        return (
            <ScrollView>
                <View style={{ flex: 1 }}>
                    <View style={{ flex: 1, height: 70, backgroundColor: '#3333FF', flexDirection: 'row' }} >
                        <View style={{ width: 50, justifyContent: 'center', alignItems: 'center', paddingStart: 20}}>
                            <Image source={pic} style={{ width: 50, height: 50 }} />
                        </View>
                        <View style={{ flex: 1, marginLeft: 10, justifyContent: 'center' }}>
                            <Text style={{ color: 'white', textAlign: 'left', fontSize: 25, marginLeft: 10 }}>
                                Weather App
                    </Text>
                        </View>
                    </View>
                    <View style={{ flex: 1, margin: 25, marginTop: 40}}>
                        <FlatList
                            data={this.state.data}
                            keyExtractor={(item, index) => index + ''}
                            renderItem={this._rendorItem}
                        />
                    </View>
                </View>
            </ScrollView>
        )
    }
}