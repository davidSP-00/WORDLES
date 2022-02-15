
import { useEffect, useState } from 'react';
import {   Pressable, Text, View } from 'react-native';
import { Props5Letters } from '../../pages/Screen5Letters';
import { button } from './keyboard.style';

interface Props {

  actualNumber: number;
  title: string;
  words:Props5Letters;
  setWord: React.Dispatch<any>
}
interface StyleProps{
  letterStyle:"letterNormal"|"letterPlayed"
}
export const LetterButton = ({ actualNumber, title,words, setWord }: Props) => {
  const [style, setStyle] = useState<StyleProps>({
    letterStyle:"letterNormal"
  });
  useEffect(() => {
    for (const key in words){
      if((words as any)[key].includes(title)){
        setStyle({letterStyle:"letterPlayed"});
      }
    }
  }, [actualNumber])
  

  const setW = () => {
    setWord((prev: any) => {
      if (prev['word' + actualNumber].length == 5) {
        return prev;
      }
      return { ...prev, ['word' + actualNumber]: prev['word' + actualNumber] + title };
    })
  }
  return (
    <Pressable style={{ justifyContent: 'center' }} onPress={setW}>
      
        <Text style={[button.buttonView,button[style.letterStyle]]
          
        }>{title}</Text>
    
    </Pressable>
  );
}
