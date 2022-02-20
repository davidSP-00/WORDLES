import React from 'react'
import { Image, ImageSourcePropType, Text, TouchableOpacity, View } from 'react-native'

export interface Props{
    currentTab:string;
    title:string;
    src:ImageSourcePropType;
    setCurrentTab: React.Dispatch<React.SetStateAction<string>>;
}
export const TabButton = ({currentTab, setCurrentTab, title, src}:Props) => {
  return (
    <TouchableOpacity onPress={() => {
        if (title == "LogOut") {
          // Do your Stuff...
        } else {
          setCurrentTab(title)
        }
      }}>
        <View style={{
          flexDirection: "row",
          alignItems: 'center',
          paddingVertical: 8,
          backgroundColor: currentTab == title ? 'white' : 'transparent',
          paddingLeft: 13,
          paddingRight: 35,
          borderRadius: 8,
          marginTop: 15
        }}>
  
          <Image source={src} style={{
            width: 25, height: 25,
            tintColor: currentTab == title ? "black" : "white"
          }}></Image>
  
          <Text style={{
            fontSize: 15,
            fontWeight: 'bold',
            paddingLeft: 15,
            color: currentTab == title ? "black" : "white"
          }}>{title}</Text>
  
        </View>
      </TouchableOpacity>
  )
}
