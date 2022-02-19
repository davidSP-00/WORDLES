import React, { useState } from 'react'
import { Pressable } from 'react-native'
import { Ionicons } from '@expo/vector-icons';

interface Props {
    name: any;
    size?: number;
    onPress?: () => {};
}

export const IconButton = ({name,size=32,onPress}:Props) => {

    const [color, setColor] = useState('black');
    const pressHandler = () => {
        setColor('grey');
    }
    const unpressHandler = () => {
  
        setColor('white');
    }

  return (
        <Ionicons name={name} size={size} color={color} style={{ textAlignVertical: 'center' }}  />
  )
}
