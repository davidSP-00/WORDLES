import React from 'react'
import { Animated, Dimensions, Platform, StatusBar, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { IconButton } from '../IconButton'
import CountDown from 'react-native-countdown-component';
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
        <View style={
          {
            
          }
        }>
          <CountDown
        until={80*80}
        digitStyle={{backgroundColor: '#FFF'}}
        showSeparator={true}
        timeLabelStyle={{display: 'none'}}
        timeToShow={[ 'H', 'M', 'S']}
        size={12}
          />
  {/*  <CountDown
    
        until={80*80}
        digitStyle={{backgroundColor: '#FFF',
        height:'min-content'}}
        showSeparator={true}
        timeLabels={{h:null, m:null, s: null}}
        timeToShow={[ 'H', 'M', 'S']}
        onFinish={() => alert('finished')}
        onPress={() => alert('hello')}
        size={12}
      /> */}
      <Text style={{
        fontSize: 8,
        textAlign: 'center',
        fontWeight: 'bold',
      }}>Siguiente palabra</Text>
        </View>
       
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
      marginLeft: Dimensions.get('window').width / 6,
      fontSize: 20,
      fontWeight: 'bold',
    },
  });