import React from 'react'
import { Image, ImageSourcePropType, Text, TouchableOpacity, View } from 'react-native'

export interface Props{
    currentTab:string;
    title:string;
    image:string;
    setCurrentTab: React.Dispatch<React.SetStateAction<string>>;
}
export const TabButton = ({currentTab, setCurrentTab, title, image}:Props) => {
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
  
          <Image source={require( `../../assets/${image}`)} style={{
            width: 25, height: 25,
            tintColor: currentTab == title ? "#5359D1" : "white"
          }}></Image>
  
          <Text style={{
            fontSize: 15,
            fontWeight: 'bold',
            paddingLeft: 15,
            color: currentTab == title ? "#5359D1" : "white"
          }}>{title}</Text>
  
        </View>
      </TouchableOpacity>
  )
}
