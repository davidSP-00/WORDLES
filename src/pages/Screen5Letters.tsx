import AsyncStorage from '@react-native-async-storage/async-storage'
import React, { useContext, useEffect, useState } from 'react'
import { View } from 'react-native'
import { WordContext } from '../components/context/WordContext'
import { DeleteButton } from '../components/keyboard/DeleteButton'
import { EnterButton } from '../components/keyboard/EnterButton'
import { LetterButton } from '../components/keyboard/LetterButton'
import { Word5Letter } from '../components/word/Word5Letter'
import { keyboardLine1, keyboardLine2, keyboardLine3, keyboardProps } from '../data/keyboardLine1'
import { getWordDay } from '../services/getWordDay'

export interface Props5Letters {
    word1: string;
    word2: string;
    word3: string;
    word4: string;
    word5: string;
}

export const Screen5Letters = () => {
    const [actualNumber, setActualNumber] = useState(1)

    const [words, setWords] = useState<Props5Letters>({ word1: '', word2: '', word3: '', word4: '', word5: '' });

    const [keyboardLines, setKeyboardLines] = useState<{
        keyboardLine1: keyboardProps[];
        keyboardLine2: keyboardProps[];
        keyboardLine3: keyboardProps[]
    }>
        ({ keyboardLine1, keyboardLine2, keyboardLine3 });
    const { wordWin, setWordWin } = useContext(WordContext);
    useEffect(() => {
        getWordDay().then(async res => {
            const jsonValue = await AsyncStorage.getItem('@word_day')
            await AsyncStorage.setItem('@word_day', res).then(() => {
                console.log("word saved");
            })
            if (jsonValue == res) {
                //obtener words played
                const wordsPlayed = await AsyncStorage.getItem('@words_played');
                setWords(JSON.parse(wordsPlayed ? wordsPlayed : "{ word1: '', word2: '', word3: '', word4: '', word5: '' }"));

            } else {
                //vaciar words_played
                await AsyncStorage.setItem('@words_played', JSON.stringify({ word1: '', word2: '', word3: '', word4: '', word5: '' }));
            }
            setWordWin(res);
            
            return res;
        }).catch((reason) => {
            console.log(reason);
        })

    }, [])
    return (

        <>

            <Word5Letter word={words.word1} words={words} setActualNumber={setActualNumber} setKeyboardLines={setKeyboardLines} />
            <Word5Letter word={words.word2} words={words} setActualNumber={setActualNumber} setKeyboardLines={setKeyboardLines} />
            <Word5Letter word={words.word3} words={words} setActualNumber={setActualNumber} setKeyboardLines={setKeyboardLines} />
            <Word5Letter word={words.word4} words={words} setActualNumber={setActualNumber} setKeyboardLines={setKeyboardLines} />
            <Word5Letter word={words.word5} words={words} setActualNumber={setActualNumber} setKeyboardLines={setKeyboardLines} />

            <View style={{
                flexDirection: 'row',
                marginTop: '10%'
            }}>
                {
                    keyboardLines.keyboardLine1.map((key, index) => (
                        <LetterButton key={key.letter} title={key.letter} style={key.style} words={words} setWord={setWords} actualNumber={actualNumber} />
                    ))
                }

            </View>
            <View style={{ flexDirection: 'row', }}>
                {
                    keyboardLines.keyboardLine2.map((key, index) => (
                        <LetterButton key={key.letter} title={key.letter} style={key.style} words={words} setWord={setWords} actualNumber={actualNumber} />
                    ))
                }
            </View>

            <View style={{ flexDirection: 'row', }} >
                <EnterButton actualNumber={actualNumber} setWord={setWords}></EnterButton>
                {
                    keyboardLines.keyboardLine3.map((key, index) => (
                        <LetterButton key={key.letter} title={key.letter} style={key.style} words={words} setWord={setWords} actualNumber={actualNumber} />
                    ))
                }
                <DeleteButton actualNumber={actualNumber} setWord={setWords}></DeleteButton>
            </View>
        </>
    )
}
