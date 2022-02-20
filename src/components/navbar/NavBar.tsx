import React from 'react'
import { Animated, Dimensions, Platform, StatusBar, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { IconButton } from '../IconButton'

export const NavBar = ({setShowMenu,showMenu,offsetValue,closeButtonOffset}:any) => {
  return (
    <View style={styles.navbar}>
<TouchableOpacity onPress={() => {
            // Do Actions Here....
            // Scaling the view...
         /*    Animated.timing(scaleValue, {
              toValue: showMenu ? 1 : 1,
              duration: 300,
              useNativeDriver: true
            })
              .start() */

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
          }}>


           <IconButton name="menu" />
          </TouchableOpacity>
        <Text style={styles.navbarText}>WORDLES</Text>
        
        <Text style={
          {fontWeight: 'bold',
          fontSize: 15,
          }
        }>12:20:20</Text>
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
      marginTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
    },
  
    navbarText: {
      marginLeft: Dimensions.get('window').width / 15,
      fontSize: 20,
      fontWeight: 'bold',
    },
  });