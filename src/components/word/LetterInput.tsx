import React, { useContext, useRef, useState } from 'react'
import { useEffect } from 'react';
import { Alert, Dimensions, StyleSheet, Text } from 'react-native';
import * as Animatable from 'react-native-animatable';
import { WordContext } from '../context/WordContext';
interface IProps {
  letter: string;
  word:string;
  position:number;
}
interface StyleProps{
  letterStyle:"normalLetter"|"warningLetter"|"correctLetter"|"wrongLetter"
}

export const LetterInput = ({letter,word,position}:IProps) => {
  const firstUpdate = useRef(true);
  const ref=useRef<any>(null);

  const [style, setStyle] = useState<StyleProps>({
    letterStyle:"normalLetter"
  });

  
  const {wordWin} = useContext(WordContext);

  const pulse = () =>{
    ref.current?.pulse();
  }
  
  const flipInX = () =>{
    ref.current?.flipInX();
  }
  useEffect(() => {
  
    if(word.indexOf('&') > -1){
      if(letter===wordWin[position]){
        setStyle({letterStyle:"correctLetter"});
      }else{
        if(wordWin.includes(letter)){
          setStyle({letterStyle:"warningLetter"});
        }else{
          setStyle({letterStyle:"wrongLetter"});
        }
      }
    flipInX();
  }
}, [word])


  useEffect(() => {
    if (firstUpdate.current) {
      firstUpdate.current = false;
      return;
    }else{
      
      pulse();
    }
  }, [letter])
  return (
    <Animatable.View ref={ref}  >
        <Text style={[styles.inputLetter,styles[style.letterStyle] ] }>{letter}</Text>
        </Animatable.View>

  )
}

const styles = StyleSheet.create<any>({

  inputLetter: {

    fontWeight: 'bold',
    borderWidth: 1.5,
    borderRadius: 5,
    fontSize: Dimensions.get('window').width / 10,
    textAlign: 'center',
    textAlignVertical: 'center',

    width: Dimensions.get('window').width / 6,
    marginHorizontal: 5,
    height: Dimensions.get('window').width / 6,
  },
  correctLetter:{
    color: '#eeeeee',
    borderColor: '#44733f',
    backgroundColor: '#6aaa64',
  },
  warningLetter:{
    color: '#eeeeee',
    borderColor: '#ab9844',
    backgroundColor: '#c9b458',
  },
  normalLetter:{
    color: '#666666',
    borderColor: '#B0B0B0',
    backgroundColor: '#f7f7f7', 
  },
  wrongLetter:{
    color: '#eeeeee',
    borderColor: '#202022',
    backgroundColor: '#3a3a3c', 
  }
});
