import React from 'react'
import { View } from 'react-native'
import { ScoreLetter } from './ScoreLetter'

export const Score5Letter = ({word,style,positionStyle}:{word:string,
  style?:"warningLetter" | "correctLetter" | "wrongLetter" | "normalLetter",
positionStyle:number}) => {
  return (
    <View style={{
        flexDirection: 'row',
        marginVertical:5,
    }}>
        { Array.from(Array(5).keys()).map((index)=>{
            
if(style &&positionStyle==index){

  return <ScoreLetter key={index} word={word} style={style}  position={index}></ScoreLetter>
}else{
  
  return <ScoreLetter key={index} word={word}  position={index}></ScoreLetter>
}

        })}
        
        </View>
  )
}
