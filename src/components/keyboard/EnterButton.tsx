
import { Dimensions, Pressable, Text, View } from 'react-native';
import { button } from './keyboard.style';

interface Props {

    actualNumber: number;
    setWord: React.Dispatch<any>
}
export const EnterButton = ({ actualNumber, setWord }: Props) => {

    const setW = () => {

        setWord((prev: any) => {
            if (prev['word' + actualNumber].length == 5) {
                return { ...prev, ['word' + (actualNumber )]: prev['word' + (actualNumber)] + '&' };
            }
            return prev;
        })

    }
    return (
        <Pressable style={{ justifyContent: 'center' }} onPress={setW}>
            <View style={[button.buttonView,button.enterButtonView]}>
                <Text style={button.enterStyle
                }>JUGAR</Text>
            </View>
        </Pressable>
    );
}
