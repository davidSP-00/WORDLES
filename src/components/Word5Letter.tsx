import React, { useEffect } from 'react'
import { Dimensions, StyleSheet, Text, View } from 'react-native';

interface IProps {
    word: string;
}


export const Word5Letter = ({word}:IProps) => {
    useEffect(() => {
      if(word.includes('&')){
alert('animation')
      }
    }, [word])
    
    
  return (
    <View style={styles.wordContainer}>
        <Text style={styles.inputLetter}>{word.charAt(0)}</Text>
        <Text style={styles.inputLetter}>{word.charAt(1)}</Text>
        <Text style={styles.inputLetter}>{word.charAt(2)}</Text>
        <Text style={styles.inputLetter}>{word.charAt(3)}</Text>
        <Text style={styles.inputLetter}>{word.charAt(4)}</Text>
      </View>
  )
}

const styles = StyleSheet.create({
   
    wordContainer: {
      marginVertical: 5,
      flexDirection: 'row',
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