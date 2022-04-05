import React, { useState } from 'react'
import { Ionicons } from '@expo/vector-icons';

interface Props {
    name: any;
    size?: number;
    color?: string;
    onPress?: () => {};
}

export const IconButton = ({name,size=32,color='black'}:Props) => {

   

  return (
        <Ionicons name={name} size={size} color={color} style={{ textAlignVertical: 'center' }}  />
  )
}
