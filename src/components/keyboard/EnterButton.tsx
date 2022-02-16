
import { useContext } from 'react';
import { Dimensions, Pressable, Text, View } from 'react-native';
import { Words5 } from '../../data/5Words';
import { WordContext } from '../context/WordContext';
import { button } from './keyboard.style';

interface Props {

    actualNumber: number;
    setWord: React.Dispatch<any>
}
export const EnterButton = ({ actualNumber, setWord }: Props) => {

    const {wordWin} = useContext(WordContext);
    const setW = () => {

        setWord((prev: any) => {
            const actualword=prev['word' + actualNumber];
            if (actualword.length == 5) {
                
                
                if(Words5.includes(actualword)||
                wordWin==actualword){

                    return { ...prev, ['word' + (actualNumber )]: actualword + '&' };
                
                }else{
                    alert('Palabra no en el diccionario')
                }
                   
             }

            return prev;
        })

    }
    return (
        <Pressable style={{ justifyContent: 'center' }} onPress={setW}>
                <Text style={[button.buttonView,button.enterStyle]}>JUGAR</Text>
        </Pressable>
    );
}
