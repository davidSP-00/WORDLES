import React from 'react'
import { Image, ImageSourcePropType, Text, TouchableOpacity, View } from 'react-native'
import { IconButton } from '../IconButton'

export interface Props{
    currentTab:string;
    title:string;
    name:String;
    setCurrentTab: React.Dispatch<React.SetStateAction<string>>;
}
export const TabButton = ({currentTab, setCurrentTab, title, name}:Props) => {
  return (
    <TouchableOpacity onPress={() => {
        if (title == "LogOut") {
          // Do your Stuff...
        } else {
          setCurrentTab(title)
          //If si no existe token, no se puede entrar a la pantalla de juego
          alert('Por favor inicie sesion para desbloquear esta sección')
        }
      }}>
        <View style={{
          flexDirection: "row",
          alignItems: 'center',
          paddingVertical: 8,
          backgroundColor: currentTab == title ? 'white' : 'transparent',
          paddingLeft: 13,
          paddingRight: 35,
          borderRadius: 2,
          marginTop: 15
        }}>
  <IconButton  name={name} size={25} color={currentTab == title ? "black" : "white"}/>
  
        
  
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
