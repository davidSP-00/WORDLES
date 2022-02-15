import React, { useReducer, useState } from 'react'
import { View } from 'react-native'
import { WordContext } from '../components/context/WordContext'
import { DeleteButton } from '../components/keyboard/DeleteButton'
import { EnterButton } from '../components/keyboard/EnterButton'
import { LetterButton } from '../components/keyboard/LetterButton'
import { Word5Letter } from '../components/word/Word5Letter'

export interface Props5Letters {
word1:string;
word2:string;
word3:string;
word4:string;
word5:string;
}

export const Screen5Letters = () => {
    const [actualNumber, setActualNumber] = useState(1)

    const [words, setWords] = useState<Props5Letters>({ word1: '', word2: '', word3: '', word4: '', word5: '' });

   
    const [wordWin, setWordWin] = useState("DAVID")
    return (

        <WordContext.Provider value={{wordWin,setWordWin}}>
        <>
       
            <Word5Letter word={words.word1} setActualNumber={setActualNumber}/>
            <Word5Letter word={words.word2} setActualNumber={setActualNumber}/>
            <Word5Letter word={words.word3} setActualNumber={setActualNumber}/>
            <Word5Letter word={words.word4} setActualNumber={setActualNumber}/>
            <Word5Letter word={words.word5} setActualNumber={setActualNumber}/>

            <View style={{ flexDirection: 'row',
        marginTop:'10%'}}>
            <LetterButton actualNumber={actualNumber} setWord={setWords} title='Q' words={words}></LetterButton>
            <LetterButton actualNumber={actualNumber} setWord={setWords} title='W' words={words}></LetterButton>
            <LetterButton actualNumber={actualNumber} setWord={setWords} title='E' words={words}></LetterButton>
            <LetterButton actualNumber={actualNumber} setWord={setWords} title='R' words={words}></LetterButton>
            <LetterButton actualNumber={actualNumber} setWord={setWords} title='T' words={words}></LetterButton>
            <LetterButton actualNumber={actualNumber} setWord={setWords} title='Y' words={words}></LetterButton>
            <LetterButton actualNumber={actualNumber} setWord={setWords} title='U' words={words}></LetterButton>
            <LetterButton actualNumber={actualNumber} setWord={setWords} title='I' words={words}></LetterButton>
            <LetterButton actualNumber={actualNumber} setWord={setWords} title='O' words={words}></LetterButton>
            <LetterButton actualNumber={actualNumber} setWord={setWords} title='P' words={words}></LetterButton>
            </View>
            <View style={{ flexDirection: 'row',}}>
            <LetterButton actualNumber={actualNumber} setWord={setWords} title='A' words={words}></LetterButton>
            <LetterButton actualNumber={actualNumber} setWord={setWords} title='S' words={words}></LetterButton>
            <LetterButton actualNumber={actualNumber} setWord={setWords} title='D' words={words}></LetterButton>
            <LetterButton actualNumber={actualNumber} setWord={setWords} title='F' words={words}></LetterButton>
            <LetterButton actualNumber={actualNumber} setWord={setWords} title='G' words={words}></LetterButton>
            <LetterButton actualNumber={actualNumber} setWord={setWords} title='H' words={words}></LetterButton>
            <LetterButton actualNumber={actualNumber} setWord={setWords} title='J' words={words}></LetterButton>
            <LetterButton actualNumber={actualNumber} setWord={setWords} title='K' words={words}></LetterButton>
            <LetterButton actualNumber={actualNumber} setWord={setWords} title='L' words={words}></LetterButton>
            <LetterButton actualNumber={actualNumber} setWord={setWords} title='Ñ' words={words}></LetterButton>
            </View>

            <View style={{ flexDirection: 'row',}} >
            <EnterButton actualNumber={actualNumber} setWord={setWords}></EnterButton>
            <LetterButton actualNumber={actualNumber} setWord={setWords} title='Z' words={words}></LetterButton>
            <LetterButton actualNumber={actualNumber} setWord={setWords} title='X' words={words}></LetterButton>
            <LetterButton actualNumber={actualNumber} setWord={setWords} title='C' words={words}></LetterButton>
            <LetterButton actualNumber={actualNumber} setWord={setWords} title='V' words={words}></LetterButton>
            <LetterButton actualNumber={actualNumber} setWord={setWords} title='B' words={words}></LetterButton>
            <LetterButton actualNumber={actualNumber} setWord={setWords} title='N' words={words}></LetterButton>
            <LetterButton actualNumber={actualNumber} setWord={setWords} title='M' words={words}></LetterButton>
            <DeleteButton actualNumber={actualNumber} setWord={setWords}></DeleteButton>
            </View>
        </>
</WordContext.Provider>
    )
}
