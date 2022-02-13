
import { Dimensions, Platform, SafeAreaView, StyleSheet, Text, StatusBar, View, Button, Pressable, TouchableNativeFeedback } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useState } from 'react';
export default function App() {


  const [first, setfirst] = useState('white')
  const pressHandler = () => {
  setfirst('grey');
  }
  const unpressHandler = () => {

  setfirst('white');
  }
  const onPress = () => {
 alert('Presionado')
  }

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.navbar} >
      
          <TouchableNativeFeedback background={TouchableNativeFeedback.Ripple('white', true)} >
            <View style={{
              justifyContent: 'center',
            }}>
            <Text>
            <Ionicons name="md-checkmark-circle" size={32} color="green" style={{ textAlignVertical: 'center' }} />
            </Text>
            </View>
         
          </TouchableNativeFeedback>
 
        <Text style={styles.navbarText}>WORDLES</Text>
        <Pressable style={{justifyContent:'center'}} onPressIn={pressHandler} onPressOut={unpressHandler} onPress={onPress}>

        <Ionicons name="md-checkmark-circle" size={32} color={first} style={{ textAlignVertical: 'center' }}  />
        </Pressable>
      </View>

      <View style={styles.wordContainer}>
        <Text style={styles.inputLetter}>D</Text>
        <Text style={styles.inputLetter}>A</Text>
        <Text style={styles.inputLetter}>V</Text>
        <Text style={styles.inputLetter}>I</Text>
        <Text style={styles.inputLetter}>D</Text>
      </View>
      <View style={styles.wordContainer}>
        <Text style={styles.inputLetter}>D</Text>
        <Text style={styles.inputLetter}>A</Text>
        <Text style={styles.inputLetter}>V</Text>
        <Text style={styles.inputLetter}>I</Text>
        <Text style={styles.inputLetter}>D</Text>
      </View>
      <View style={styles.wordContainer}>
        <Text style={styles.inputLetter}>D</Text>
        <Text style={styles.inputLetter}>A</Text>
        <Text style={styles.inputLetter}>V</Text>
        <Text style={styles.inputLetter}>I</Text>
        <Text style={styles.inputLetter}>D</Text>
      </View>
      <View style={styles.wordContainer}>
        <Text style={styles.inputLetter}>D</Text>
        <Text style={styles.inputLetter}>A</Text>
        <Text style={styles.inputLetter}>V</Text>
        <Text style={styles.inputLetter}>I</Text>
        <Text style={styles.inputLetter}>D</Text>
      </View>
      <View style={styles.wordContainer}>
        <Text style={styles.inputLetter}>D</Text>
        <Text style={styles.inputLetter}>A</Text>
        <Text style={styles.inputLetter}>V</Text>
        <Text style={styles.inputLetter}>I</Text>
        <Text style={styles.inputLetter}>D</Text>
      </View>
      <View style={styles.wordContainer}>
        <Text style={styles.inputLetter}>D</Text>
        <Text style={styles.inputLetter}>A</Text>
        <Text style={styles.inputLetter}>V</Text>
        <Text style={styles.inputLetter}>I</Text>
        <Text style={styles.inputLetter}>D</Text>
      </View>
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
  },
  wordContainer: {
    marginVertical: 5,
    flexDirection: 'row',
  },
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

  inputLetter: {

    backgroundColor: '#FBFBFB',
    borderWidth: 2,
    borderRadius: 5,
    fontSize: Dimensions.get('window').width / 10,
    textAlign: 'center',
    textAlignVertical: 'center',

    borderColor: '#B0B0B0',
    width: Dimensions.get('window').width / 6,
    marginHorizontal: 5,
    height: Dimensions.get('window').width / 6
  }
});
