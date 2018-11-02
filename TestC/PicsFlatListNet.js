import React, { Component } from "react";
import {
    Text, View,
    Platform, FlatList,
    TouchableOpacity,
    Image
} from "react-native";
import { getPicsFromServer } from './../networking/ServerImg';
import Swipeout from 'react-native-swipeout'

class FlatListItem extends Component {
    constructor(props) {
        super(props)
    }
    render() {
        const swipeSetting = {
            autoclose: true,
            onClose: (secId, rowId, direction) => {

            },
            onOpen: (secId, rowId, directuon) => {

            },
            right: [
                {
                    onPress: () => {

                    },
                    text: 'Delete', type: 'delete'
                }
            ],
            rowID: this.props.index,
            sectionId: 1
        };
        return (
            <Swipeout {...swipeSetting}>
                <View style={{ flex: 1 }}>
                    <View style={{
                        flex: 1, flexDirection: 'row',
                        backgroundColor: 'mediumseagreen',
                        padding: 10,
                    }}>
                        <View style={{ justifyContent: "center" }}>
                            <Image
                                source={{ uri: 'https://images.unsplash.com/1/apple-gear-looking-pretty.jpg?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=5ff2ab097214e8615b387b14ee2914aa&auto=format&fit=crop&w=750&q=80' }}
                                style={{ width: 120, height: 120 }} >
                            </Image>
                        </View>
                        <View style={{ flex: 1, marginLeft: 12, justifyContent: 'center' }}>
                            <Text style={{ fontSize: 15 }}>
                                FileName: {this.props.item.filename}
                            </Text>
                            <Text style={{ fontSize: 15 }}>
                                Author: {this.props.item.author}
                            </Text>
                            <Text style={{ fontSize: 15 }}>
                                Author_url: {this.props.item.author_url}
                            </Text>
                            <Text style={{ fontSize: 15 }}>
                                Post_url: {this.props.item.post_url}
                            </Text>
                        </View>
                    </View>
                    <View style={{ height: 1, backgroundColor: 'white' }}>

                    </View>
                </View>
            </Swipeout>

        )
    }
}

export default class PicsFlatListNet extends Component {
    constructor(props) {
        super(props)
        this.state = {
            picsFromServer: [],
        }
    }

    componentDidMount() {
        this.refreshDataFromServer();
    }

    refreshDataFromServer = () => {
        getPicsFromServer().then((pics) => {
            this.setState({ picsFromServer: pics })
        }).catch((error) => {
            this.setState({ picsFromServer: [] })
        })
    }

    _onPressAdd = () => {
        alert('You touch button!')
    }
    render() {
        let pic = require('./../img/buttonAdd.png')
        return (
            <View style={{ flex: 1 }}>
                <View style={{
                    height: 50, backgroundColor: 'grey',
                    alignItems: 'flex-end'
                }}>
                    <TouchableOpacity onPress={this._onPressAdd}
                        style={{
                            width: 50, height: 50,
                            marginRight: 12, justifyContent: 'center',
                            alignItems: 'center'
                        }}>
                        <Image source={pic} style={{ width: 30, height: 30 }} >
                        </Image>
                    </TouchableOpacity>
                </View>
                <FlatList
                    data={this.state.picsFromServer}
                    extraData={this.state}
                    renderItem={({ item, index }) => {
                        return (
                            <FlatListItem item={item} index={index} parentFlatList={this}>

                            </FlatListItem>
                        )
                    }}
                    keyExtractor={(item, index) => item.filename} >

                </FlatList>
            </View>
        )
    }
}