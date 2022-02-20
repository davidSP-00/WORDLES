import React from 'react'
import { View } from 'react-native'
import { ScoreLetter } from './ScoreLetter'

export const Score5Letter = ({word='DAVID'}:{word?:string}) => {
  return (
    <View style={{
        flexDirection: 'row',
        marginVertical:5,
    }}>
        { Array.from(Array(5).keys()).map((index)=>(
            <ScoreLetter key={index} ></ScoreLetter>
        ))}
        
        </View>
  )
}
