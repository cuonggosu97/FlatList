import React, { Component } from "react";
import {
    View, Text,
    ScrollView,
    Dimensions
} from "react-native";
export default class TestCrollView2 extends Component {
    render() {
        let screennWidth = Dimensions.get('window').width;
        let screenHeight = Dimensions.get('window').height
        return (
            <ScrollView
                horizontal={true}
                pagingEnabled={true}
                // showsHorizontalScrollIndicator={true} 
                >
                <View style={{
                    flex: 1,
                    width: screennWidth, 
                    backgroundColor: 'red',
                    justifyContent:'center',
                    alignItems: 'center'
                }}>
                    <Text style={{
                        fontSize: 30, 
                        padding: 12,
                        color:'white'
                    }}>
                        Screen 1
                    </Text>
                </View>
                <View style={{
                    flex: 1,
                    width: screennWidth, 
                    backgroundColor: 'yellow',
                    justifyContent:'center',
                    alignItems: 'center'
                }}>
                    <Text style={{
                        fontSize: 30, 
                        padding: 12,
                        color:'white'
                    }}>
                        Screen 2
                    </Text>
                </View>
                <View style={{
                    flex: 1,
                    width: screennWidth, 
                    backgroundColor: 'orange',
                    justifyContent:'center',
                    alignItems: 'center'
                }}>
                    <Text style={{
                        fontSize: 30, 
                        padding: 12,
                        color:'white'
                    }}>
                        Screen 3
                    </Text>
                </View>
            </ScrollView>
        )
    }
}