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

export default class AddModal extends Component {
    constructor(props) {
        super(props)
        this.state = {
            newName: '',
            newJob: '',
        }
    }
    showAddModal = () => {
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
                    onChangeText={(text) => this.setState({ newName: text })}
                    placeholder='Enter new name'
                    value={this.state.newName} />

                <TextInput style={{
                    height: 40, borderColor: 'gray',
                    marginLeft: 30, marginRight: 30,
                    marginTop: 20,
                    marginBottom: 10,
                    borderWidth: 1
                }}
                    onChangeText={(text) => this.setState({ newJob: text })}
                    placeholder='Enter new name'
                    value={this.state.newJob} />

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
                        if (this.state.newName.length == 0 || this.state.newJob.length == 0) {
                            alert('You must enter name and job')
                            return;
                        }
                        const newKey = this.generateKey(24)
                        const newProfile = {
                            key: newKey,
                            name: this.state.newName,
                            job: this.state.newJob,
                            img: require('./../img/profile.png'),
                        }
                        flatListData.push(newProfile);
                        this.props.parentFlatList.refreshFlatList(newKey);
                        this.refs.myModal.close();
                    }} >
                    Save
                    </Button>
            </Modal>
        )
    }
}