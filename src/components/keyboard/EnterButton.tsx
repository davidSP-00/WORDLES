
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useContext, } from 'react';
import {  Pressable, Text } from 'react-native';
import { showMessage } from 'react-native-flash-message';
import { Words5 } from '../../data/5Words';
import { WordContext } from '../context/WordContext';
import { messageOptions } from '../modals/message.style';
import { button } from './keyboard.style';
import jwt_decode from "jwt-decode";
import { saveWordPlayed } from '../../services/saveWordPlayed';
interface Props {

    actualNumber: number;
    setWord: React.Dispatch<any>
}
export const EnterButton = ({ actualNumber, setWord }: Props) => {

    const {wordWin,token} = useContext(WordContext);
    const setW = () => {

        setWord((prev: any) => {
            const actualword=prev['word' + actualNumber];
            if (actualword?.length == 5) {
                
                
                if(Words5.includes(actualword)||
                wordWin==actualword){
                    if(wordWin==actualword){
                        AsyncStorage.getItem('@win').then(win=>{
                        if(win || win=='false'){
                            AsyncStorage.setItem('@win','true');
                            //Guardar ganada en base de datos
                            saveWordPlayed((jwt_decode(token) as any).sub,token).then(res=>{
                                
                            })
                        }
                        });
                        
                    }

                    return { ...prev, ['word' + (actualNumber )]: actualword + '&' };
                
                }else{

                    showMessage({
                        ...messageOptions,
                        message: "La palabra no se encuentra en el diccionario.",
                       
                      });
                }
                   
             }else{
                
                showMessage({
                    ...messageOptions,
                    message: "La palabra debe tener 5 letras",
                  });
             }

            return prev;
        })

    }
    return (
        <>
        <Pressable style={{ justifyContent: 'center' }} onPress={setW}>
                <Text style={[button.buttonView,button.enterStyle]}>JUGAR</Text>
        </Pressable>
        </>
    );
}
