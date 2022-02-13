
import { Dimensions, Pressable, Text, View } from 'react-native';
import { button } from './keyboard.style';

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
            <View style={[button.buttonView,button.enterButtonView]}>
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
