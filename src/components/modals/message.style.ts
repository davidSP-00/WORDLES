import {  StatusBar } from "react-native";
import { MessageOptions } from "react-native-flash-message";

export const messageOptions:MessageOptions={
    message: "",
    style:{
        backgroundColor:'#aaaaaa',
        alignItems:'center',
        justifyContent:'center',
    },
    statusBarHeight:StatusBar.currentHeight,
    icon: 'warning',
    textStyle:{
        color: '#eeeeee',
    }
}