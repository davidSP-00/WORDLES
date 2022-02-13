
import { Dimensions, Platform, SafeAreaView, StyleSheet, Text, StatusBar , View } from 'react-native';

export default function App() {

  
  return (
    <SafeAreaView style={styles.container}>
      
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
  wordContainer:{
    marginVertical: 5,
    flexDirection: 'row',
  },
  inputLetter:{

    backgroundColor: '#FBFBFB',
    borderWidth:2,
    borderRadius:5,
    fontSize:Dimensions.get('window').width/10,
    textAlign: 'center',
    textAlignVertical: 'center',
    
    borderColor:'#B0B0B0',
    width:Dimensions.get('window').width/6,
    marginHorizontal:5,
    height:Dimensions.get('window').width/6
  }
});
