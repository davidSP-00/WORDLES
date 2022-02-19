import React from 'react'
import { Dimensions, StyleSheet, Text, View } from 'react-native'
import { IconButton } from '../IconButton'

export const NavBar = () => {
  return (
    <View style={styles.navbar}>

        <IconButton name="menu" />
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
      justifyContent: 'space-around',
      borderBottomWidth:2,
      borderBottomColor: '#d8d6d6',
      marginBottom:'8%'
    },
  
    navbarText: {
      color: '#fff',
      textAlignVertical: 'center',
      fontSize: 20,
      fontWeight: 'bold',
    },
  });