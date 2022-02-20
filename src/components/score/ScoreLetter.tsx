import React from 'react'
import { Dimensions, StyleSheet, Text } from 'react-native'

export const ScoreLetter = () => {
  return (
    <Text style={[style.letterStyle]}></Text>
  )
}
const style=StyleSheet.create({
  letterStyle:{
    borderColor: 'black',
    borderWidth: 1,
    width: Dimensions.get('window').width / 10,
    height: Dimensions.get('window').width / 10,
    marginHorizontal:5,
},
letterWarning:{
  backgroundColor:'#F8F32B'
},
letterCorrect:{
  backgroundColor:'#57A639'
}
})
