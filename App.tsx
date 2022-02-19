
import { Platform, SafeAreaView, StyleSheet, StatusBar, View ,Animated, Image,Text, TouchableOpacity, } from 'react-native';

import { Screen5Letters } from './src/pages/Screen5Letters';
import { NavBar } from './src/components/navbar/NavBar';
import FlashMessage from 'react-native-flash-message';
import { useState } from 'react';
import { useRef } from 'react';
import { SideBar } from './src/components/sidebar/SideBar';


export default function App() {

  const [currentTab, setCurrentTab] = useState("Home");
  const [showMenu, setShowMenu] = useState(false);
  const offsetValue = useRef(new Animated.Value(0)).current;
  const scaleValue = useRef(new Animated.Value(1)).current;
  const closeButtonOffset = useRef(new Animated.Value(0)).current;

  return (
    <SafeAreaView style={styles.container}>
  <SideBar currentTab={currentTab} setCurrentTab={setCurrentTab}></SideBar>
      <Animated.View style={{
        flexGrow: 1,
        backgroundColor: 'white',
        position: 'absolute',
        top: 0,
        bottom: 0,
        left: 0,
        right: 0,
        borderRadius: showMenu ? 15 : 0,
        // Transforming View...
        transform: [
          { scale: scaleValue },
          { translateX: offsetValue }
        ]
      }}>

        {
          // Menu Button...
        }

        <Animated.View style={{
          transform: [{
            translateY: closeButtonOffset
          }],
          backgroundColor:'white',
          alignItems:'center'
        }}>
          
                <NavBar setShowMenu={setShowMenu} scaleValue={scaleValue} showMenu={showMenu}
                offsetValue={offsetValue} closeButtonOffset={closeButtonOffset}></NavBar>
          <Screen5Letters></Screen5Letters>
         {/*  <Text style={{
            fontSize: 30,
            fontWeight: 'bold',
            color: 'black',
            paddingTop: 20
          }}>{currentTab}</Text>

          <Image source={require( './src/assets/photo.jpg')} style={{
            width: '100%',
            height: 300,
            borderRadius: 15,
            marginTop: 25
          }}></Image>

          <Text style={{
            fontSize: 20,
            fontWeight: 'bold'
            , paddingTop: 15,
            paddingBottom: 5
          }}>Jenna Ezarik</Text>

          <Text style={{
          }}>Techie, YouTuber, PS Lover, Apple Sheep's Sister</Text> */}
        </Animated.View>

      </Animated.View>




      

      <FlashMessage position="top" /> 
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

