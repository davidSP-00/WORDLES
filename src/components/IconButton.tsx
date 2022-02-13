import React, { useState } from 'react'
import { Pressable } from 'react-native'
import { Ionicons } from '@expo/vector-icons';

export const IconButton = () => {

    const [color, setColor] = useState('white')
    const pressHandler = () => {
        setColor('grey');
    }
    const unpressHandler = () => {
  
        setColor('white');
    }
    const onPress = () => {
   /* alert('Presionado') */
    }

  return (
    <Pressable style={{justifyContent:'center'}} onPressIn={pressHandler} onPressOut={unpressHandler}>
        <Ionicons name="md-checkmark-circle" size={32} color={color} style={{ textAlignVertical: 'center' }}  />
    </Pressable>
  )
}
