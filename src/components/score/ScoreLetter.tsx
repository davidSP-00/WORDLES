import React, { useContext, useState } from 'react'
import { useEffect } from 'react';
import { Dimensions, StyleSheet, Text } from 'react-native'
import { WordContext } from '../context/WordContext';
interface IProps {
  style?:'warningLetter'|'correctLetter'|'wrongLetter'|'normalLetter';
  position:number;
  word:string;
}
interface StyleProps{
  letterStyle:"normalLetter"|"warningLetter"|"correctLetter"
}
export const ScoreLetter = ({style='normalLetter',position,word}:IProps) => {
  /* const [style, setStyle] = useState<StyleProps>({
    letterStyle:"normalLetter"
  }); */
  useEffect(() => {

  
  }, [word])
  
  return (
    <Text style={[styles.letterStyle,styles[style]]}>{word[position]}</Text>
  )
}
const styles=StyleSheet.create<any>({
  letterStyle:{
    borderColor: 'black',
    borderWidth: 1,
    width: Dimensions.get('window').width / 10,
    height: Dimensions.get('window').width / 10,
    marginHorizontal:5,
    fontSize:Dimensions.get('window').width / 15,
    fontWeight:'bold',
    textAlign:'center',
},
warningLetter:{
  backgroundColor:'#c9b458',
  color:'white'
},
correctLetter:{
  backgroundColor:'#6aaa64',
  color:'white'
},

wrongLetter:{
  backgroundColor:'#3a3a3c',
  color:'white'
}
})
