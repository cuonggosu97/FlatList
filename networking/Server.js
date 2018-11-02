import React, { Component } from "react";
import {
    Text, View,
    Platform,
} from "react-native";
const apiGetAllPic = 'https://picsum.photos/list';
async function getPicsFromServer() {
    try {
        let response = await fetch(apiGetAllPic);
        let responseJson = await response.json();
        return responseJson
    } catch (error) {
        console.error(`Error is: ${error} `);
    }
}
export { getPicsFromServer };