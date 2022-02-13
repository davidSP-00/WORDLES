
import { Dimensions, Pressable, Text, View } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

interface Props {

    actualNumber: number;
    setActualNumber: React.Dispatch<any>;
    setWord: React.Dispatch<any>
}
export const EnterButton = ({ actualNumber, setWord, setActualNumber }: Props) => {

    const setW = () => {

        setWord((prev: any) => {
            if (prev['word' + actualNumber].length == 5) {
                setActualNumber(actualNumber + 1);
                return { ...prev, ['word' + (actualNumber - 1)]: prev['word' + (actualNumber - 1)] + '&' };
            }
            return prev;
        })

    }
    return (
        <Pressable style={{ justifyContent: 'center' }} onPress={setW}>
            <View style={{
                justifyContent: 'center',
                height: Dimensions.get('window').width /  7,
                width: Dimensions.get('window').width /5.45,
                margin: 2,
                borderRadius: 5,
                backgroundColor: '#AEAEAE'
            }}>
                <Text style={
                    {
                        color: 'white',
                        fontWeight: 'bold',
                        fontSize: Dimensions.get('window').width / 25,
                        textAlign: 'center'
                    }
                }>JUGAR</Text>
            </View>
        </Pressable>
    );
}
