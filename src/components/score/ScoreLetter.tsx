import React, { useContext, useState } from 'react'
import { useEffect } from 'react';
import { Dimensions, StyleSheet, Text } from 'react-native'
import { WordContext } from '../context/WordContext';
interface IProps {
  letter: string;
  position:number;
  word:string;
}
interface StyleProps{
  letterStyle:"normalLetter"|"warningLetter"|"correctLetter"
}
export const ScoreLetter = ({letter,position,word}:IProps) => {
  const [style, setStyle] = useState<StyleProps>({
    letterStyle:"normalLetter"
  });
  useEffect(() => {

  
  }, [word])
  
  return (
    <Text style={[styles.letterStyle,styles[style.letterStyle]]}></Text>
  )
}
const styles=StyleSheet.create<any>({
  letterStyle:{
    borderColor: 'black',
    borderWidth: 1,
    width: Dimensions.get('window').width / 10,
    height: Dimensions.get('window').width / 10,
    marginHorizontal:5,
},
normalLetter:{

},
warningLetter:{
  backgroundColor:'#F8F32B'
},
correctLetter:{
  backgroundColor:'#57A639'
}
})
