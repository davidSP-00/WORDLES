import React, { useEffect, useRef, useState } from 'react'
import { Dimensions, StyleSheet, Text, TouchableWithoutFeedback, View } from 'react-native';
import * as Animatable from 'react-native-animatable';
interface IProps {
  word: string;
}


export const Word5Letter = ({ word }: IProps) => {

  const firstUpdate = useRef(true);
  const ref=useRef<any>(null);

  const bounce = () =>{
    ref.current?.bounce();
  }

  

  useEffect(() => {
    if (word.includes('&')) {
      alert('animation')
    }
  }, [word])
  

  useEffect(() => {
    if (firstUpdate.current) {
      firstUpdate.current = false;
      return;
    }else{
      
    bounce();
    }
  }, [word[0]])



  return (
    <View style={styles.wordContainer}>
    <Animatable.View ref={ref}>
        <Text style={styles.inputLetter}>{word[0]}</Text>
        </Animatable.View>
      <Text style={styles.inputLetter}>{word[1]}</Text>
      <Text style={styles.inputLetter}>{word[2]}</Text>
      <Text style={styles.inputLetter}>{word[3]}</Text>
      <Text style={styles.inputLetter}>{word[4]}</Text>
    </View>
  )
}

const styles = StyleSheet.create({

  wordContainer: {
    marginVertical: 5,
    flexDirection: 'row',
  },

  inputLetter: {

    backgroundColor: '#f7f7f7',
    fontWeight: 'bold',
    color: '#666666',
    borderWidth: 1,
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