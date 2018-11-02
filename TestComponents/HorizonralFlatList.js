import React, { Component } from "react";
import {
    View, Text,
    FlatList, Image,
    ImageBackground,
    Platform,
} from "react-native";
import { horizontalFlatLisData } from './../data/horizontalFlatListData';
import { horizontalStatus } from './../data/horizontalFlatListData';
import Icon from 'react-native-vector-icons/Ionicons'

class HorizontalFlatListItem extends Component {
    constructor(props) {
        super(props)
    }
    render() {
        return (
            <View style={{
                flex: 1,
                alignItems: 'center',
                width: 90,
                borderRadius: 10,
                borderWidth: 1,
                borderColor: 'grey',
                margin: 4
            }}>
                <Text style={{
                    fontSize: 16,
                    fontWeight: 'bold',
                    color: 'white',
                    margin: 20,
                }}>
                    {this.props.item.hour}
                </Text>
                {/* <Icon name={(Platform.OS == 'ios') ? this.props.item.status.ios : this.props.item.status.android}
                    size={30}
                    color='white' /> */}
                <Text style={{
                    fontSize: 16,
                    margin: 10,
                    color: 'white',
                }}>
                    {this.props.item.degress} ℉
                 </Text>
            </View>
        )
    }
}

export default class HorizontalFlatList extends Component {
    render() {
        return (
            <View style={{ flex: 1, marginTop: Platform.OS == "ios" ? 34 : 0 }}>
                <View style={{ height: 150 }}>
                    <FlatList style={{
                        backgroundColor: 'black',
                        opacity: 0.5
                    }}
                        data={horizontalFlatLisData}
                        horizontal={true}
                        renderItem={({ item, index }) => {
                            return (
                                <HorizontalFlatListItem item={item} index={index} parentFlatList={this}>

                                </HorizontalFlatListItem>
                            )
                        }}
                        keyExtractor={(item, index) => item.hour}>

                    </FlatList>
                </View>
            </View>
        )
    }
}