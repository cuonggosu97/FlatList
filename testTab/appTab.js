import React, { Component } from "react";
import {
    Text,
    View,
} from "react-native";

import { TabNavigator } from 'react-navigation';
import FirstTab from './firstTab';
import SecondTab from './secondTab';

var MainScreenNavigator = TabNavigator({
    Tab1: { screen: FirstTab },
    Tab2: { screen: SecondTab }
});

MainScreenNavigator.navigationOptions = {
    title: 'Tab example'
}
export default MainScreenNavigator;