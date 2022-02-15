import React, { useRef, useState } from 'react'
import { useEffect } from 'react';
import { Alert, Dimensions, StyleSheet, Text } from 'react-native';
import * as Animatable from 'react-native-animatable';
interface IProps {
  letter: string;
}

export const LetterInput = ({letter}:IProps) => {
  const firstUpdate = useRef(true);
  const ref=useRef<any>(null);
  const pulse = () =>{
    ref.current?.pulse();
  }
  
  const flipInX = () =>{
    ref.current?.flipInX();
  }
  
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
        <Text style={styles.inputLetter}>{letter}</Text>
        </Animatable.View>

  )
}

const styles = StyleSheet.create({

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
