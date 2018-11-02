import React, { Component } from "react";
import {
    Text, View,
    Alert, Image,
    Platform, Dimensions,
    TextInput, TouchableOpacity
} from "react-native";
import Modal from 'react-native-modalbox';
import Button from 'react-native-button';
import flatListData from './../data/flatListData';

var screen = Dimensions.get('window');

export default class EditModal extends Component {
    constructor(props) {
        super(props)
        this.state = {
            name: '',
            job: '',
        }
    }
    showEditModal = (editingName, flatListItem) => {
        this.setState({
            key: editingName.key,
            name: editingName.name,
            job: editingName.job,
            flatListItem: flatListItem
        });
        this.refs.myModal.open();
    }
    generateKey = (numberOfCharacters) => {
        return require('random-string')({ length: numberOfCharacters });
    }
    render() {
        return (
            <Modal
                ref={'myModal'}
                style={{
                    justifyContent: 'center',
                    borderRadius: Platform.OS == 'ios' ? 30 : 0,
                    shadowRadius: 10,
                    width: screen.width - 80,
                    height: 280
                }}
                position='center'
                backdrop={true}
            >
                <Text style={{
                    fontSize: 20,
                    fontWeight: 'bold',
                    textAlign: 'center',
                    margin: 30
                }}>
                    New profile
                </Text>
                <TextInput style={{
                    height: 40, borderColor: 'gray',
                    marginLeft: 30, marginRight: 30,
                    marginTop: 20,
                    marginBottom: 10,
                    borderWidth: 1
                }}
                    onChangeText={(text) => this.setState({ name: text })}
                    placeholder='Enter name'
                    value={this.state.name} />

                <TextInput style={{
                    height: 40, borderColor: 'gray',
                    marginLeft: 30, marginRight: 30,
                    marginTop: 20,
                    marginBottom: 10,
                    borderWidth: 1
                }}
                    onChangeText={(text) => this.setState({ job: text })}
                    placeholder='Enter job'
                    value={this.state.job} />

                <Button style={{ fontSize: 18, color: 'white' }}
                    containerStyle={{
                        padding: 8,
                        marginLeft: 70,
                        marginRight: 70,
                        height: 40,
                        borderRadius: 6,
                        backgroundColor: 'mediumseagreen'
                    }}
                    onPress={() => {
                        if (this.state.name.length == 0 || this.state.job.length == 0) {
                            alert('You must enter name and job')
                            return;
                        }
                        //Update and exit
                        var foundIndex = flatListData.findIndex(item => this.state.key == item.key);
                        if (foundIndex < 0) {
                            return;
                        }
                        flatListData[foundIndex].name = this.state.name;
                        flatListData[foundIndex].job = this.state.job;
                        this.state.flatListItem.refreshFlatListItem();
                        this.refs.myModal.close();
                    }} >
                    Update
                    </Button>
            </Modal>
        )
    }
}