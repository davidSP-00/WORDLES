
import { useContext, useEffect, useState } from 'react';
import { Pressable, Text, View } from 'react-native';
import { Props5Letters } from '../../pages/Screen5Letters';
import { WordContext } from '../context/WordContext';
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
  /* const [style, setStyle] = useState<StyleProps>({
    letterStyle: "letterNormal"
  }); */
  useEffect(() => {


/* 
    for (const key in words) {
      if ((words as any)[key].includes(title)) {
        setStyle({ letterStyle: "letterPlayed" });
        if (wordWin.includes(title) && style.letterStyle!='letterCorrect') {

          setStyle({ letterStyle: "letterWarning" });
        }
        if (wordWin.includes(title)) {
          [...wordWin].forEach(
            (c,index) => {
              console.log(c,index,words["word"+(actualNumber-1)].charAt(index))
              console.log(c==words["word"+(actualNumber-1)].charAt(index))
            if(c==words["word"+(actualNumber-1)].charAt(index)){
              setStyle({ letterStyle: "letterCorrect" });
              console.log(style.letterStyle,'first if')
            }
            }
            
            )
          }
      }
      
    
    } */
  }, [style])

  const setW = () => {
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
