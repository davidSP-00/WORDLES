import React, { useState } from 'react'
import { View } from 'react-native'
import { DeleteButton } from '../components/keyboard/DeleteButton'
import { EnterButton } from '../components/keyboard/EnterButton'
import { LetterButton } from '../components/keyboard/LetterButton'
import { Word5Letter } from '../components/Word5Letter'

export const Screen5Letters = () => {
    const [actualNumber, setActualNumber] = useState(1)

    const [{ word1, word2, word3, word4, word5 }, setWord] = useState<any>({ word1: '', word2: '', word3: '', word4: '', word5: '' });

    return (

        <>
       
            <Word5Letter word={word1} />
            <Word5Letter word={word2} />
            <Word5Letter word={word3} />
            <Word5Letter word={word4} />
            <Word5Letter word={word5} />

            <View style={{ flexDirection: 'row',
        marginTop:'10%'}}>
            <LetterButton actualNumber={actualNumber} setWord={setWord} title='Q'></LetterButton>
            <LetterButton actualNumber={actualNumber} setWord={setWord} title='W'></LetterButton>
            <LetterButton actualNumber={actualNumber} setWord={setWord} title='E'></LetterButton>
            <LetterButton actualNumber={actualNumber} setWord={setWord} title='R'></LetterButton>
            <LetterButton actualNumber={actualNumber} setWord={setWord} title='T'></LetterButton>
            <LetterButton actualNumber={actualNumber} setWord={setWord} title='Y'></LetterButton>
            <LetterButton actualNumber={actualNumber} setWord={setWord} title='U'></LetterButton>
            <LetterButton actualNumber={actualNumber} setWord={setWord} title='I'></LetterButton>
            <LetterButton actualNumber={actualNumber} setWord={setWord} title='O'></LetterButton>
            <LetterButton actualNumber={actualNumber} setWord={setWord} title='P'></LetterButton>
            </View>
            <View style={{ flexDirection: 'row',}}>
            <LetterButton actualNumber={actualNumber} setWord={setWord} title='A'></LetterButton>
            <LetterButton actualNumber={actualNumber} setWord={setWord} title='S'></LetterButton>
            <LetterButton actualNumber={actualNumber} setWord={setWord} title='D'></LetterButton>
            <LetterButton actualNumber={actualNumber} setWord={setWord} title='F'></LetterButton>
            <LetterButton actualNumber={actualNumber} setWord={setWord} title='G'></LetterButton>
            <LetterButton actualNumber={actualNumber} setWord={setWord} title='H'></LetterButton>
            <LetterButton actualNumber={actualNumber} setWord={setWord} title='J'></LetterButton>
            <LetterButton actualNumber={actualNumber} setWord={setWord} title='K'></LetterButton>
            <LetterButton actualNumber={actualNumber} setWord={setWord} title='L'></LetterButton>
            <LetterButton actualNumber={actualNumber} setWord={setWord} title='Ñ'></LetterButton>
            </View>

            <View style={{ flexDirection: 'row',}} >
            <EnterButton actualNumber={actualNumber} setWord={setWord} setActualNumber={setActualNumber}></EnterButton>
            <LetterButton actualNumber={actualNumber} setWord={setWord} title='Z'></LetterButton>
            <LetterButton actualNumber={actualNumber} setWord={setWord} title='X'></LetterButton>
            <LetterButton actualNumber={actualNumber} setWord={setWord} title='C'></LetterButton>
            <LetterButton actualNumber={actualNumber} setWord={setWord} title='V'></LetterButton>
            <LetterButton actualNumber={actualNumber} setWord={setWord} title='B'></LetterButton>
            <LetterButton actualNumber={actualNumber} setWord={setWord} title='N'></LetterButton>
            <LetterButton actualNumber={actualNumber} setWord={setWord} title='M'></LetterButton>
            <DeleteButton actualNumber={actualNumber} setWord={setWord}></DeleteButton>
            </View>
        </>

    )
}
