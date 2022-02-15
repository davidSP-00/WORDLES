import React from 'react'
import { useEffect } from 'react';
import { StyleSheet, View } from 'react-native';
import { LetterInput } from './LetterInput';
interface IProps {
  word: string;
  setActualNumber: React.Dispatch<any>;
}


export const Word5Letter = ( {word,setActualNumber} : IProps) => {
  useEffect(() => {
  
    if(word.indexOf('&') > -1){
    setActualNumber((prev:any)=>prev+1);
    
    }
  }, [word])
  return (
    <View style={styles.wordContainer}>
      {
      Array.from(Array(5).keys()).map((key)=>(
        <LetterInput key={key} letter={word[key]} word={word} position={key}></LetterInput>
      ))
      }
    </View>
  )
}

const styles = StyleSheet.create({

  wordContainer: {
    marginVertical: 5,
    flexDirection: 'row',
  }
});