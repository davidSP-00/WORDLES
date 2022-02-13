import React, { useState } from 'react'
import { Pressable } from 'react-native'
import { Ionicons } from '@expo/vector-icons';

interface Props {
    name: any;
    size?: number;
    onPress?: () => {};
}

export const IconButton = ({name,size=32,onPress}:Props) => {

    const [color, setColor] = useState('white')
    const pressHandler = () => {
        setColor('grey');
    }
    const unpressHandler = () => {
  
        setColor('white');
    }

  return (
    <Pressable style={{justifyContent:'center'}} onPressIn={pressHandler} onPressOut={unpressHandler} onPress={onPress}>
        <Ionicons name={name} size={size} color={color} style={{ textAlignVertical: 'center' }}  />
    </Pressable>
  )
}
