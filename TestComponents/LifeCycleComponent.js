import React, { Component } from "react";
import {
    View, Text,
    Platform,
} from "react-native";

class LifeCycle extends Component {
    constructor(props) {
        super(props)
        console.log(`${Date.now()}. This is contructor`);
        this.state = {
            numberOfRefresh: 0
        };
    }

    componentWillMount() {
        console.log(`${Date.now()}. This is componentWillMount`)
    }

    componentDidMount() {
        console.log(`${Date.now()}. This is componentDidMount`)
    }

    render() {
        console.log(`${Data.now()}. This is render function `)
        return (
            <View style={{
                flex: 1,
                marginTop: 100
            }}>

            </View>
        )
    }
}

export default class LifeCycleComponent extends Component {
    constructor(props) {
        super(props)
    }
    render() {
        var lifeCycle = <LifeCycle propA = 'abc'></LifeCycle>
        return (
            <View>
                {lifeCycle}
            </View>
         )
    }
}