import AsyncStorage from '@react-native-async-storage/async-storage'
import React, { useContext } from 'react'
import { Alert, Image, ImageSourcePropType, Text, TouchableOpacity, View } from 'react-native'
import { tabs } from '../../data/tabs'
import { WordContext } from '../context/WordContext'
import { IconButton } from '../IconButton'
export interface Props{
    currentTab:string;
    title:string;
    name:String;
    setCurrentTab: React.Dispatch<React.SetStateAction<string>>;
}
export const TabButton = ({currentTab, setCurrentTab, title, name}:Props) => {
  const {setAuth,token,setToken} = useContext(WordContext)
  return (
    <TouchableOpacity onPress={async () => {
        if (title == tabs.CerrarSesion) {

          await AsyncStorage.clear();

          setAuth(false);
          setToken('');
          // Do your Stuff...
        } else {

            if(title==tabs.Estadísticas||title==tabs.MiColección){
              if(token!=''){

                setCurrentTab(title)
              }else{

                alert('Para acceder a esta sección debes iniciar sesión')
              }
              return;
            }else{

              setCurrentTab(title)
            }
        
          //If si no existe token, no se puede entrar a la pantalla de juego
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
