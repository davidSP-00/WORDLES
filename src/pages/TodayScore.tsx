import React, { useContext, useEffect, useState } from 'react'
import { Dimensions, Text, View } from 'react-native'
import { WordContext } from '../components/context/WordContext';
import jwt_decode from "jwt-decode";
import { getStadistics } from '../services/getStadistics';
import { tabs } from '../data/tabs';


interface Stadistics{
    win:number,
    lose:number,
    percent_win:number,
    percent_lose:number,
}
export const TodayScore = () => {
    const { wordWin ,currentTab,token} = useContext(WordContext);

    const [stadistics, setStadistics] = useState<Stadistics>({
        win: 0,
        lose: 0,
        percent_win: 0,
        percent_lose: 0,
    })
    useEffect(() => {
      /*   if(currentTab== tabs.Estadísticas){ */
        if(token!=''){
        getStadistics((jwt_decode(token) as any).sub,token).then(res=>{
         setStadistics(res);
       
        })
    }
     /*  } */
      }, [currentTab])
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
                    }}>{stadistics.percent_win} %</Text>
                </View>
                <View style={{
                    alignItems: 'center',

                }}>

                    <Text style={{
                        fontSize: Dimensions.get('window').width / 20,
                    }}>% Perdidas</Text>
                    <Text style={{
                        fontSize: Dimensions.get('window').width / 18,
                    }}>{stadistics.percent_lose} %</Text>
                </View>
                <View style={{
                    alignItems: 'center',

                }}>

                    <Text style={{
                        fontSize: Dimensions.get('window').width / 20,
                    }}>Total</Text>
                    <Text style={{
                        fontSize: Dimensions.get('window').width / 18,
                    }}>{stadistics.win+stadistics.lose}</Text>
                </View>
            </View>
            <View style={{
                alignItems: 'center',
            }}>
            </View>


        </View>
    )
}
