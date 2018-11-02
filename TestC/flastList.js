import React, { Component } from 'react';
import {
    Text,
    View,
    FlatList,
    TouchableOpacity,
    Image,
    ScrollView
} from 'react-native'

export default class TestFlashList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: [
                {
                    img: require('./../img/profile.png'),
                    name: 'Pham Van Cuong',
                    job: 'Programer',
                    img1: require('./../img/tick.png'),
                    isShowTick: true,
                },
                {
                    img: require('./../img/profile.png'),
                    name: 'Le Gia Hieu',
                    job: 'Tester',
                    img1: require('./../img/tick.png'),
                    isShowTick: true,
                },
                {
                    img: require('./../img/profile.png'),
                    name: 'Hoang Van Manh',
                    job: 'Coder',
                    img1: require('./../img/tick.png'),
                    isShowTick: true,
                },
                {
                    img: require('./../img/profile.png'),
                    name: 'Nguyen Quoc Khang',
                    job: 'Coder',
                    img1: require('./../img/tick.png'),
                    isShowTick: true,
                },
            ],
        }
    }
    _onClickTick = (index) => {
        this.state.data[index].isShowTick = !this.state.data[index].isShowTick
        this.setState({ data: this.state.data })
    }

    _renderItem = ({ item, index }) =>
        <ScrollView>
            <View style={{ flex: 1, borderWidth: 3, borderColor: 'orange', padding: 12, height: 130, flexDirection: 'row' }}>
                <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                    <Image source={item.img} style={{ height: 70, width: 70, borderRadius: 35, justifyContent: 'center', alignItems: 'center' }} />
                </View>
                <View style={{ flex: 4, justifyContent: 'center', paddingLeft: 25 }}>
                    <Text style={{ fontSize: 20, textAlign: 'left', marginBottom: 5 }}>
                        {item.name}
                    </Text>
                    <Text style={{ fontSize: 16, textAlign: 'left', color: 'gray' }}>
                        {item.job}
                    </Text>
                </View>
                <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', }}>
                    <TouchableOpacity activeOpacity={1} onPress={() => this._onClickTick(index)}
                        style={{ width: 60, height: 60, backgroundColor: 'gray', borderRadius: 30, justifyContent: 'center', alignItems: 'center' }}>
                        {
                            item.isShowTick == true ?
                                <Image source={item.img1} style={{ width: 40, height: 40 }} />
                                : null
                        }
                    </TouchableOpacity>
                </View>
            </View>
        </ScrollView>
    render() {
        return (
            <FlatList
                data={this.state.data}
                extraData={this.state}
                keyExtractor={(item, index) => index + ''}
                renderItem={this._renderItem}
            />
        );
    }
}