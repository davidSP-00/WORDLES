
import { Platform, SafeAreaView, StyleSheet, StatusBar, Animated, View, TouchableWithoutFeedback, Dimensions} from 'react-native';

import { Screen5Letters } from './src/pages/Screen5Letters';
import { NavBar } from './src/components/navbar/NavBar';
import FlashMessage from 'react-native-flash-message';
import { useState } from 'react';
import { useRef } from 'react';
import { SideBar } from './src/components/sidebar/SideBar';
import { TodayScore } from './src/pages/TodayScore';
import { Collection } from './src/pages/Collection';
import { WordContext } from './src/components/context/WordContext';
import { Register } from './src/pages/Register';
import { Login } from './src/pages/Login';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useEffect } from 'react';
import { tabs } from './src/data/tabs';
import { HowToPlay } from './src/pages/HowToPlay';


export default function App() {
  
  const [currentTab, setCurrentTab] = useState("WordDay");
  const [showMenu, setShowMenu] = useState(false);
  const offsetValue = useRef(new Animated.Value(0)).current;
  const closeButtonOffset = useRef(new Animated.Value(0)).current;

  const [auth, setAuth] = useState(false);
  const [token, setToken] = useState("");
  const [wordWin, setWordWin] = useState("$$$$$")

 useEffect(() => {
  AsyncStorage.getItem('@token').then(async (token) => {
            
    if(token){
      console.log(token)
      setToken(token);
        setAuth(true);
    }else{
      console.log(token)
    }

 });
  
 }, [])
 

 
  return (
    <SafeAreaView style={styles.container}>
      <FlashMessage position="top" />
      
      <WordContext.Provider value={{wordWin,setWordWin,auth,setAuth,token,setToken,currentTab,setCurrentTab}}>
      <SideBar currentTab={currentTab} setCurrentTab={setCurrentTab}></SideBar>
      <Animated.View style={{
        flexGrow: 1,
        backgroundColor: 'white',
        position: 'absolute',
        top: 6,
        bottom: 0,
        left: 0,
        right: 0,
        borderRadius: showMenu ? 5 : 0,
        transform: [
          { translateX: offsetValue }
        ]
      }}>


        <Animated.View style={{
          transform: [{
            translateY: closeButtonOffset
          }],
          alignItems: 'center'
        }}>
           <TouchableWithoutFeedback onPress={() => {
            if(showMenu){
             Animated.timing(offsetValue, {
                // YOur Random Value...
                toValue: showMenu ? 0 : 230,
                duration: 200,
                useNativeDriver: true
              })
                .start()
              
              Animated.timing(closeButtonOffset, {
                // YOur Random Value...
                toValue: !showMenu ? 0 : 0,
                duration: 200,
                useNativeDriver: true
              })
                .start()
              
              setShowMenu(!showMenu);
            }

}}
        >
          <View style={{width:Dimensions.get('window').width}}>
          <NavBar setShowMenu={setShowMenu}  showMenu={showMenu}
            offsetValue={offsetValue} closeButtonOffset={closeButtonOffset}></NavBar>
            
          <View style={[currentTab==tabs.WordDay ? {} : { display: 'none' },{marginTop:'8%'} ]}>
            <Screen5Letters></Screen5Letters>
            </View>
            <View style={currentTab==tabs.Estadísticas ? {} : { display: 'none' } }>
          <TodayScore></TodayScore>
           </View>
           
           <View style={currentTab==tabs.MiColección? {} : { display: 'none' } }>
          <Collection></Collection>
           </View>
           {currentTab==tabs.Registro&& <Register></Register>}
           {currentTab==tabs.IniciarSesion&&<Login></Login>}
          
           
          <View style={currentTab==tabs.ComoJugar ? {} : { display: 'none' } }>
          
          </View>
          </View>
          </TouchableWithoutFeedback>
        </Animated.View>

      </Animated.View>

      </WordContext.Provider>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#444444',
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
  }
});

