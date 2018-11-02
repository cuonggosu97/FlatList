// import React, { Component } from 'react';
// import {
//   AppRegistry,
//   Image,
//   View,
//   TouchableOpacity,
//   Text,
//   TextInput,
//   StyleSheet,
//   Map,
//   FlatList
// } from 'react-native';
// import { StackNavigation} from 'react-navigation';
// //Component
// import MainComponent from './TestMenu/MainComponent';
// import DetailComponent from './TestMenu/DetailComponent';
// import ThirdComponent from './TestMenu/ThirdComponent';
// //Screen
// import{ MainSreen, DetailScreen, ThirdScreen} from './screenName';

// const App = StackNavigation({
//   MainSreen:{
//     screen: MainComponent,
//     navigationOptions:{
//       headerTitle: 'Main',
//     },
//   },
//   DetailScreen:{
//     sreenn: DetailComponent,
//     navigationOptions:{
//       headerTitle: 'Detail'
//     },
//   },
//   ThirdScreen:{
//     screen: ThirdComponent,
//     navigationOptions:{
//       headerTitle: 'Third'
//     },
//   },
// });

// import Test1 from './TestC/PicsFlatListNet'
// export default class BlinkApp extends Component {
//   render() {
//     return (
//       <Test1 />
//     )
//   }
// }
import { AppRegistry } from 'react-native';
// import App from './App';
import App from './App'

AppRegistry.registerComponent('projectTest', () => App);
