import React, { Component } from "react";
import { 
    Text, View
 } from "react-native";
 import Button from 'react-native-button';

 export default class DetailComponent extends Component{
     render(){
         return(
             <View style={{
                 flex: 1,
                 backgroundColor: 'mediumseagreen',
                 alignItems: 'center',
                 justifyContent: 'center'
             }}>
                <Text style={{fontSize: 22, fontWeight: 'bold', color: 'white'}}>
                    This is Detail Component
                </Text>
             </View>
         )
     }
 }