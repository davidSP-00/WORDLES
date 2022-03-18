
import { useContext, useEffect, useState } from 'react';
import { Pressable, Text, View } from 'react-native';
import { showMessage } from 'react-native-flash-message';
import { Props5Letters } from '../../pages/Screen5Letters';
import { WordContext } from '../context/WordContext';
import { messageOptions } from '../modals/message.style';
import { button } from './keyboard.style';

interface Props {

  actualNumber: number;
  title: string;
  words: any;
  style:"letterNormal" | "letterPlayed" | "letterCorrect" | "letterWarning";
  setWord: React.Dispatch<any>
}
interface StyleProps {
  letterStyle: "letterNormal" | "letterPlayed" | "letterCorrect" | "letterWarning"
}
export const LetterButton = ({ actualNumber, title, words,style, setWord }: Props) => {


  const { wordWin } = useContext(WordContext);

  useEffect(() => {


  }, [style])

  const setW = () => {

    if(wordWin==words['word' + (actualNumber-1)]?.slice(0, -1)||actualNumber==7){
      showMessage({
        ...messageOptions,
        message: "Juego terminado",
       
      });
return;
    }
    setWord((prev: any) => {
      if (prev['word' + actualNumber].length == 5) {
        return prev;
      }
      return { ...prev, ['word' + actualNumber]: prev['word' + actualNumber] + title };
    })
  }
  return <Pressable style={{ justifyContent: 'center' }} onPress={setW} >

      <Text style={[button.buttonView, button[style]]

      }>{title}</Text>

    </Pressable>;
}
