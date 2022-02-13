
import {  Dimensions, Pressable, View } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

interface Props {

    actualNumber: number;
    setWord: React.Dispatch<any>
}
export const DeleteButton = ({ actualNumber, setWord }: Props) => {

    const setW = () => {
        setWord((prev: any) => {
            return { ...prev, ['word' + actualNumber]: prev['word' + actualNumber].slice(0, -1) };
        })
    }
    return (
        <Pressable style={{ justifyContent: 'center' }}  onPress={setW}>
            <View style={{
                justifyContent: 'center',
                height: Dimensions.get('window').width / 7,
                width: Dimensions.get('window').width /11.5,
                margin:2,
                borderRadius: 5,
                backgroundColor: '#AEAEAE'
            }}>

                <Ionicons name="backspace-outline" size={32} style={{ textAlignVertical: 'center' }} color='white'/>

            </View>
        </Pressable>

    );
}
