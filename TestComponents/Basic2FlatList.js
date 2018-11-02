import React, { Component } from "react";
import {
    View, Text,
    FlatList, Image
} from "react-native";
import Swipeout from 'react-native-swipeout'

// import flatListData from './../data/flatListData'

export default class Basic2FlatList extends Component {
    constructor(props) {
        const swipeSetting = {
            autoClose: true,
            onClose: (secID, rowID, diretion) => {

            },
            onOpen: (secID, rowID, diretion) => {

            },
            right: [
                {
                    onPress: () => {

                    },
                    text: 'Delete', type: 'delete'
                }
            ],
            rowID: this.state.data.index,
            sectionID: 1
        }
        super(props)
        this.state = {
            data: [
                {
                    'key': '1',
                    'name': 'Phạm Văn Cường',
                    img: require('./../img/sun.png'),
                    'job': 'coder'
                },
                {
                    'key': '123',
                    'name': 'Nguyễn Quốc Khang',
                    img: require('./../img/sun.png'),
                    'job': 'sutder'
                },
                {
                    'key': '456',
                    'name': 'Lê Gia Hiếu',
                    img: require('./../img/sun.png'),
                    'job': 'moneyder'
                },
                {
                    'key': '789',
                    'name': 'Hoàng Văn Mạnh',
                    img: require('./../img/sun.png'),
                    'job': 'sliener'
                },
                {
                    'key': '135',
                    'name': 'Lâm Quang Thắng',
                    img: require('./../img/sun.png'),
                    'job': 'winner'
                },
                {
                    'key': '1',
                    'name': 'Phạm Văn Cường',
                    img: require('./../img/sun.png'),
                    'job': 'coder'
                },
                {
                    'key': '123',
                    'name': 'Nguyễn Quốc Khang',
                    img: require('./../img/sun.png'),
                    'job': 'sutder'
                },
                {
                    'key': '456',
                    'name': 'Lê Gia Hiếu',
                    img: require('./../img/sun.png'),
                    'job': 'moneyder'
                },
                {
                    'key': '789',
                    'name': 'Hoàng Văn Mạnh',
                    img: require('./../img/sun.png'),
                    'job': 'sliener'
                },
                {
                    'key': '135',
                    'name': 'Lâm Quang Thắng',
                    img: require('./../img/sun.png'),
                    'job': 'winner'
                }
            ]
        }
    }
    _renderView = ({ item, index }) =>
        <Swipeout {...swipeSetting}>
            <View style={{ flex: 1 }}>
                <View style={{
                    flex: 1,
                    backgroundColor: 'mediumseagreen',
                    padding: 10,
                    flexDirection: 'row'
                }}>
                    <View>
                        <Image source={item.img} style={{ width: 100, height: 100 }}>
                        </Image>
                    </View>
                    <View style={{ flex: 1, justifyContent: 'center', marginLeft: 10 }}>
                        <Text style={{ fontSize: 20 }}>
                            {item.name}
                        </Text>
                        <Text style={{ fontSize: 15 }}>
                            {item.job}
                        </Text>
                    </View>
                </View>
                <View style={{ height: 1, backgroundColor: 'white' }}>

                </View>
            </View>
        </Swipeout>


    render() {
        return (
            <View style={{ flex: 1 }}>
                <FlatList
                    data={this.state.data}
                    keyExtractor={(item, index) => index + ''}
                    renderItem={this._renderView} />
            </View>
        )
    }
}