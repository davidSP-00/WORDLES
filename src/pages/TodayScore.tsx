import React, { useContext } from 'react'
import { Dimensions, Text, View } from 'react-native'
import { WordContext } from '../components/context/WordContext';

export const TodayScore = () => {
    const { wordWin ,} = useContext(WordContext);
    return (
        <View style={
            {
                alignItems: 'center',
            }
        }>
            <Text style={{
                marginBottom: Dimensions.get('window').height / 30,
                fontSize: Dimensions.get('window').width / 15,
            }}>ESTADISTICAS</Text>
            {/* <Score5Letter word={words.word1}></Score5Letter>
            <Score5Letter word={words.word2} ></Score5Letter>
            <Score5Letter word={words.word3} ></Score5Letter>
            <Score5Letter word={words.word4} ></Score5Letter>
            <Score5Letter word={words.word5} ></Score5Letter> */}
            
            <Text>La palabra del día es : {wordWin}</Text>
            <View style={{
                width: '100%',
                flexDirection: 'row',
                justifyContent: 'space-around',
                alignItems: 'center',
                paddingVertical: Dimensions.get('window').height / 10,
            }}>
                <View style={{
                    alignItems: 'center',

                }}>

                    <Text style={{
                        fontSize: Dimensions.get('window').width / 20,
                    }}> % Ganadas</Text>
                    <Text style={{
                        fontSize: Dimensions.get('window').width / 18,
                    }}>2 %</Text>
                </View>
                <View style={{
                    alignItems: 'center',

                }}>

                    <Text style={{
                        fontSize: Dimensions.get('window').width / 20,
                    }}>% Perdidas</Text>
                    <Text style={{
                        fontSize: Dimensions.get('window').width / 18,
                    }}>2 %</Text>
                </View>
                <View style={{
                    alignItems: 'center',

                }}>

                    <Text style={{
                        fontSize: Dimensions.get('window').width / 20,
                    }}>Total</Text>
                    <Text style={{
                        fontSize: Dimensions.get('window').width / 18,
                    }}>2</Text>
                </View>
            </View>
            <View style={{
                alignItems: 'center',
            }}>
            </View>


        </View>
    )
}
