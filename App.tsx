
import { Platform, SafeAreaView, StyleSheet, Text, StatusBar, View, Button, Pressable, TouchableNativeFeedback } from 'react-native';
import { useState } from 'react';
import { Word5Letter } from './src/components/Word5Letter';
import { Screen5Letters } from './src/pages/Screen5Letters';
import { NavBar } from './src/components/navbar/NavBar';
export default function App() {




  return (
    <SafeAreaView style={styles.container}>
      <NavBar></NavBar>

      <Screen5Letters></Screen5Letters>

    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#383838',
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
    alignItems: 'center',/* 
    justifyContent: 'center', */
  }
});
