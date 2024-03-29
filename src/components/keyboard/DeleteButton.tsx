
import {   Pressable, View } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { button } from './keyboard.style';

interface Props {

    actualNumber: number;
    setWord: React.Dispatch<any>
}
export const DeleteButton = ({ actualNumber, setWord }: Props) => {

    const setW = () => {
        if(actualNumber==7){
            return;
        }
        setWord((prev: any) => {
            
           
            return { ...prev, ['word' + actualNumber]: prev['word' + actualNumber].slice(0, -1) };
        })
    }
    return (
        <Pressable style={{ justifyContent: 'center' }}  onPress={setW}>
            <View style={[button.buttonView,button.letterNormal,]}>

                <Ionicons name="backspace-outline" size={32} style={{ textAlignVertical: 'center',alignSelf:'center' }} color='white'/>

            </View>
        </Pressable>

    );
}
