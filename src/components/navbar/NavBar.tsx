import React from 'react'
import { Animated, Dimensions, Platform, StatusBar, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { IconButton } from '../IconButton'

export const NavBar = ({setShowMenu,scaleValue,showMenu,offsetValue,closeButtonOffset}:any) => {
  return (
    <View style={styles.navbar}>
<TouchableOpacity onPress={() => {
            // Do Actions Here....
            // Scaling the view...
            console.log('Pressed')
            Animated.timing(scaleValue, {
              toValue: showMenu ? 1 : 1,
              duration: 300,
              useNativeDriver: true
            })
              .start()

            Animated.timing(offsetValue, {
              // YOur Random Value...
              toValue: showMenu ? 0 : 230,
              duration: 300,
              useNativeDriver: true
            })
              .start()

            Animated.timing(closeButtonOffset, {
              // YOur Random Value...
              toValue: !showMenu ? 0 : 0,
              duration: 300,
              useNativeDriver: true
            })
              .start()

            setShowMenu(!showMenu);
          }}>

            {/* <Image source={showMenu ? require( './src/assets/close.png') : require( './src/assets/menu.png')} style={{
              width: 20,
              height: 20,
              tintColor: 'black',
              marginTop: 40,

            }}></Image> */}

           <IconButton name="menu" />
          </TouchableOpacity>
        <Text style={styles.navbarText}>WORDLES</Text>
        <IconButton  name="cog" />
      </View>
  )
}
const styles = StyleSheet.create({
    
    navbar: {
      height: Dimensions.get('window').height * 0.08,
      backgroundColor: 'transparent',
      width: '100%',
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-around',
      borderBottomWidth:2,
      borderBottomColor: '#d8d6d6',
      marginBottom:'8%',
      marginTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
    },
  
    navbarText: {
      
      fontSize: 20,
      fontWeight: 'bold',
    },
  });