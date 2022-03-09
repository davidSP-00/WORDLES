import AsyncStorage from '@react-native-async-storage/async-storage';
import React, { Dispatch, SetStateAction, useContext } from 'react'
import { useEffect } from 'react';
import { StyleSheet, View } from 'react-native';
import { keyboardLine1, keyboardProps } from '../../data/keyboardLine1';
import { Props5Letters } from '../../pages/Screen5Letters';
import { WordContext } from '../context/WordContext';
import { button } from '../keyboard/keyboard.style';
import { LetterInput } from './LetterInput';
interface IProps {
  word: string;
  words: Props5Letters;
  setActualNumber: React.Dispatch<any>;
  setKeyboardLines: Dispatch<SetStateAction<{ keyboardLine1: keyboardProps[]; keyboardLine2: keyboardProps[]; keyboardLine3: keyboardProps[]; }>>;
}


export const Word5Letter = ({ word, words, setActualNumber, setKeyboardLines }: IProps) => {


  const { wordWin,auth } = useContext(WordContext);

  useEffect(() => {
console.log(word,wordWin)
    if (word.indexOf('&') > -1) {
      setActualNumber((prev: any) => prev + 1);
      //guardar el storare la palabra actual.
      AsyncStorage.setItem('@words_played',JSON.stringify(words));


      setKeyboardLines((prev: {
        keyboardLine1: keyboardProps[];
        keyboardLine2: keyboardProps[];
        keyboardLine3: keyboardProps[]
      }) => {
        [...new Set(word.split(''))].forEach((letter: string) => {

          prev.keyboardLine1.map((item: keyboardProps) => {
            if (item.letter === letter) {
              if (wordWin.includes(letter)) {
                
                if (item.style == 'letterCorrect') {
                }else{
                  item.style = "letterWarning";
                }
                [...wordWin].forEach(
                  (c, index) => {
                    if (c == word.charAt(index)) {
                      item.style = "letterCorrect";
                    }
                  }
                )

              } else {
                  
                  item.style = "letterPlayed";
                

              }
            }
          })
          prev.keyboardLine2.map((item: keyboardProps) => {
            if (item.letter === letter) {
              if (wordWin.includes(letter)) {
                if (item.style == 'letterCorrect') {
                }else{
                  item.style = "letterWarning";
                }
                [...wordWin].forEach(
                  (c, index) => {
                    if (c == word.charAt(index)) {
                      item.style = "letterCorrect";
                    }
                  }
                )

              } else {
                if (item.style == 'letterCorrect') {
                }else{
                  
                  item.style = "letterPlayed";
                }

              }
            }
          })
          prev.keyboardLine3.map((item: keyboardProps) => {
            if (item.letter === letter) {
              if (wordWin.includes(letter)) {
                if (item.style == 'letterCorrect') {
                }else{
                  item.style = "letterWarning";
                }
                [...wordWin].forEach(
                  (c, index) => {
                    if (c == word.charAt(index)) {
                      item.style = "letterCorrect";
                    }
                  }
                )

              } else {
                if (item.style == 'letterCorrect') {
                }else{
                  
                  item.style = "letterPlayed";
                }

              }
            }
          })
        });

        return prev;
      }
      );

    }




  }, [word])
  return (
    <View style={styles.wordContainer}>
      {
        Array.from(Array(5).keys()).map((key) => (
          <LetterInput key={key} letter={word[key]} word={word} position={key}></LetterInput>
        ))
      }
    </View>
  )
}

const styles = StyleSheet.create({

  wordContainer: {
    marginVertical: 5,
    flexDirection: 'row',
  }
});