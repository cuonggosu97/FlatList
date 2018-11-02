import React, { Comonent } from 'react';
import{
    View,
    Text, 
    Image
} from 'react-native';

export default class  Bananas extends Comonent{
    render(){
        let pic = {
            uri: 'https://upload.wikimedia.org/wikipedia/commons/d/de/Bananavarieties.jpg'
        };
        return(
        <Image source ={pic} style={{width: 193, height: 110}}/>
        );
    }
}