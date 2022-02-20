import React from 'react'
import { Dimensions, Text, View } from 'react-native'
import { Score5Letter } from '../components/score/Score5Letter'

export const TodayScore = () => {
    return (
        <>
            <Text style={{
                marginBottom: Dimensions.get('window').height / 30,
                fontSize: Dimensions.get('window').width / 15,
            }}>ESTADISTICAS</Text>
            <Score5Letter ></Score5Letter>
            <Score5Letter ></Score5Letter>
            <Score5Letter ></Score5Letter>
            <Score5Letter ></Score5Letter>
            <Score5Letter ></Score5Letter>
            
            <Text>La palabra del día es : PAPER</Text>
            <View style={{
                width: '100%',
                flexDirection: 'row',
                justifyContent: 'space-between',
                paddingHorizontal: Dimensions.get('window').width / 18,
                alignItems: 'center',
                paddingVertical: Dimensions.get('window').height / 10,
            }}>
                <View style={{
                    alignItems: 'center',

                }}>

                    <Text style={{
                        fontSize: Dimensions.get('window').width / 20,
                    }}>Ganadas</Text>
                    <Text style={{
                        fontSize: Dimensions.get('window').width / 18,
                    }}>2</Text>
                </View>
                <View style={{
                    alignItems: 'center',

                }}>

                    <Text style={{
                        fontSize: Dimensions.get('window').width / 20,
                    }}>Perdidas</Text>
                    <Text style={{
                        fontSize: Dimensions.get('window').width / 18,
                    }}>2</Text>
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
                <Text style={{
                        fontSize: Dimensions.get('window').width / 18,
                    }}>
                    SIGUIENTE PALABRA:
                </Text>
                
                <Text style={{
                    fontWeight: 'bold',
                        fontSize: Dimensions.get('window').width / 18,
                    }}>
                    00:30:39
                </Text>
            </View>


        </>
    )
}
