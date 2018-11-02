import React, { Component } from "react";
import {
    View, Text,
    FlatList, StyleSheet,
    Image, Alert,
    TouchableOpacity,
    YellowBox, RefreshControl
} from "react-native";

import Swipeout from 'react-native-swipeout'
import flatListData from './../data/flatListData';
import AddModal from "./AddModal";
import EditModal from './EditModal';
import { getPicsFromServer } from './../networking/Server';

class FlatListItem extends Component {
    constructor(props) {
        super(props)
        YellowBox.ignoreWarnings(

            ['Warning: isMounted(...) is deprecated', 'Module RCTImageLoader'

            ]);
        this.state = {
            activeRowKey: null,
            numberOfRefresh: 0
        }
    }
    refreshFlatListItem = () => {
        this.setState((prevState) => {
            return {
                numberOfRefresh: prevState.numberOfRefresh + 1
            };
        });
    }
    render() {
        const swipeSetting = {
            autoClose: true,
            onClose: (secID, rowID, diretion) => {

            },
            onOpen: (secID, rowID, diretion) => {

            },
            right: [
                {
                    onPress: () => {
                        // alert('Update');
                        this.props.parentFlatList.refs.editModal.showEditModal(flatListData[this.props.index], this);
                    },
                    text: 'Edit', type: 'primary'
                },
                {
                    onPress: () => {
                        const deleteRow = this.state.activeRowKey
                        Alert.alert(
                            'Alert',
                            'Are you sure you want to delete?',
                            [
                                { text: 'No', onPress: () => console.log('Cancel Pressed'), style: 'cancel' },
                                {
                                    text: 'Yes', onPress: () => {
                                        flatListData.splice(this.props.index, 1)
                                        //Refresh flatList
                                        this.props.parentFlatList.refreshFlatList(deleteRow)
                                    }
                                },
                            ]
                        )
                    },
                    text: 'Delete', type: 'delete'
                }
            ],
            rowID: this.props.index,
            sectionID: 1
        }
        return (
            <Swipeout {...swipeSetting}>
                <View style={{ flex: 1 }}>
                    <View style={{
                        flex: 1,
                        backgroundColor: 'mediumseagreen',
                        padding: 10,
                        flexDirection: 'row'
                    }}>
                        <View>
                            <Image
                                source={{ uri: this.props.item.post_url }}
                                style={{ width: 100, height: 100 }}>
                            </Image>
                        </View>
                        <View style={{ flex: 1, justifyContent: 'center', marginLeft: 10 }}>
                            <Text style={{ fontSize: 20 }}>
                                {this.props.item.filename}
                            </Text>
                            <Text style={{ fontSize: 15 }}>
                                {this.props.item.author}
                            </Text>
                        </View>
                    </View>
                    <View style={{ height: 1, backgroundColor: 'white' }}>

                    </View>
                </View>
            </Swipeout>

        );
    }
}

export default class BasicFlatList extends Component {
    constructor(props) {
        super(props);
        this.state = ({
            deletedRowKey: null,
            refreshing: false,
            picsFromServer: []
        });
        this._onPressAdd = this._onPressAdd.bind(this);
    }
    componentDidMount() {
        this.refreshDataFromServer();
    }
    refreshDataFromServer = () => {
        this.setState({ refreshing: true })
        getPicsFromServer().then((pics) => {
            this.setState({ picsFromServer: pics });
            this.setState({ refreshing: false })
        }).catch((error) => {
            this.setState({ picsFromServer: [] });
            this.setState({ refreshing: false })
        });
    }
    onRefresh=()=>{
        this.refreshDataFromServer();
    }
    refreshFlatList = (activeKey) => {
        this.setState((prevState) => {
            return {
                deletedRowKey: activeKey
            }
        })
        this.refs.flatList.scrollToEnd();
    }
    _onPressAdd = () => {
        this.refs.addModal.showAddModal();
    }
    render() {
        let pic = require('./../img/buttonAdd.png')
        return (
            <View style={{ flex: 1 }}>
                <View style={{
                    height: 50, backgroundColor: 'gray',
                    alignItems: 'flex-end', justifyContent: 'center'
                }}>
                    <TouchableOpacity onPress={this._onPressAdd} style={{
                        width: 50, height: 50, marginRight: 10,
                        alignItems: 'flex-end', justifyContent: 'center'
                    }}>
                        <Image
                            source={pic}
                            style={{ width: 30, height: 30 }} />
                    </TouchableOpacity>
                </View>
                <FlatList
                    extraData={this.state}
                    ref={'flatList'}
                    // data={flatListData}
                    data={this.state.picsFromServer}
                    renderItem={({ item, index }) => {
                        // console.log(`Item=${JSON.stringify(item)}, index=${index}`)
                        return (
                            <FlatListItem item={item} index={index} parentFlatList={this}>

                            </FlatListItem>);
                    }}
                    keyExtractor={(item, index) => item.filename}
                    refreshControl={
                        <RefreshControl
                            refreshing={this.state.refreshing}
                            onRefresh={this.onRefresh} />} >
                </FlatList>
                <AddModal ref={'addModal'} parentFlatList={this}>

                </AddModal>
                <EditModal ref={'editModal'} parentFlatList={this}>

                </EditModal>

            </View>
        );
    }
}