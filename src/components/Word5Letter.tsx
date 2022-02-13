import React, { useEffect, useLayoutEffect, useRef, useState } from 'react'
import { Animated, Dimensions, StyleSheet, Text, View } from 'react-native';

interface IProps {
  word: string;
}


export const Word5Letter = ({ word }: IProps) => {

  const firstUpdate = useRef(true);
  const [{ l1,l2,l3,l4,l5}, setLetter] = useState<any>({ l1: '', l2: '', l3: '', l4: '', l5: '' });

 


  useEffect(() => {
    setLetter((prev:any)=>{
      return{
        l1: word[0],
        l2: word[1],
        l3: word[2],
        l4: word[3],
        l5: word[4],
      }
    });
    if (word.includes('&')) {
      alert('animation')
    }
  }, [word])



  return (
    <View style={styles.wordContainer}>
        <Text style={styles.inputLetter}>{l1}</Text>
      <Text style={styles.inputLetter}>{l2}</Text>
      <Text style={styles.inputLetter}>{l3}</Text>
      <Text style={styles.inputLetter}>{l4}</Text>
      <Text style={styles.inputLetter}>{l5}</Text>
    </View>
  )
}

const styles = StyleSheet.create({

  wordContainer: {
    marginVertical: 5,
    flexDirection: 'row',
  },

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