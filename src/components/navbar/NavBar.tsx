import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { IconButton } from '../IconButton'

export const NavBar = () => {
  return (
    <View style={styles.navbar}>

        <IconButton/>
        <Text style={styles.navbarText}>WORDLES</Text>
        <IconButton/>
      </View>
  )
}
const styles = StyleSheet.create({
    
    navbar: {
      height: '8%',
      backgroundColor: 'red',
      width: '100%',
      flexDirection: 'row',
      justifyContent: 'space-around',
    },
  
    navbarText: {
      color: '#fff',
      textAlignVertical: 'center',
      fontSize: 20,
      fontWeight: 'bold',
    },
  });