
import {  Dimensions, Pressable, Text, View } from 'react-native';
import { button } from './keyboard.style';

interface Props {

  actualNumber: number;
  title: string;
  setWord: React.Dispatch<any>
}
export const LetterButton = ({ actualNumber, title, setWord }: Props) => {

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
      <View  style={[button.buttonView,button.letterButtonView]}>

        <Text style={
          {
            color: 'white',
            fontWeight:'bold',
            fontSize: Dimensions.get('window').width /20,
            textAlign:'center'
          }
        }>{title}</Text>
      </View>
    </Pressable>
  );
}
