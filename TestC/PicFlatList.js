import React, { Component } from "react";
import {
    View, Text,
    TouchableOpacity,
    FlatList, Image
} from "react-native";

import DataPics from './../data/dataPics'

class FlatListItem extends Component {
    render() {
        return (
            <View style={{ flex: 1 }}>
                <View style={{
                    flex: 1, flexDirection: 'row',
                    padding: 10, backgroundColor: 'mediumseagreen', justifyContent: 'center'
                }}>
                    <Image
                        source={{ uri: 'https://images.unsplash.com/1/apple-gear-looking-pretty.jpg?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=5ff2ab097214e8615b387b14ee2914aa&auto=format&fit=crop&w=750&q=80' }}
                        style={{ width: 100, height: 100, marginRight: 5 }}
                    />
                    <View style={{
                        flex: 1, marginLeft: 5,
                        justifyContent: "center", paddingTop: 5,
                        paddingBottom: 5,
                    }}>
                        <Text style={{ marginBottom: 5 }}>
                            Format: {this.props.item.format}
                        </Text>
                        <Text style={{ marginBottom: 5 }}>
                            Filename: {this.props.item.filename}
                        </Text>
                        <Text style={{ marginBottom: 5 }}>
                            Author: {this.props.item.author}
                        </Text>
                        <Text style={{ marginBottom: 5 }}>
                            Author_url: {this.props.item.author_url}
                        </Text>
                    </View>
                </View>
                <View style={{ height: 1, backgroundColor: 'white' }}>

                </View>
            </View>
        )
    }
}

export default class PicFlatList extends Component {
    render() {
        return (
            <View style={{ flex: 1 }}>
                <View style={{
                    height: 50, alignItems: 'flex-end',
                    backgroundColor: 'grey', paddingRight: 12
                }}>
                    <TouchableOpacity style={{
                        width: 50, height: 50,
                        justifyContent: "center", alignItems: 'center'
                    }}>
                        <Image source={require('./../img/buttonAdd.png')}
                            style={{ width: 30, height: 30 }} />
                    </TouchableOpacity>
                </View>
                <FlatList
                    data={DataPics}
                    renderItem={({ item, index }) => {
                        return (
                            <FlatListItem item={item} index={index} parentFlatList={this}>

                            </FlatListItem>
                        )
                    }} >

                </FlatList>
            </View>
        )
    }
}