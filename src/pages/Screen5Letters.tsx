import React, { useRef, useState } from 'react'
import { useReducer } from 'react';
import { Button, } from 'react-native'
import { Word5Letter } from '../components/Word5Letter'

export const Screen5Letters = () => {
   const [actualNumber, setActualNumber] = useState(1)

    const [{word1,word2,word3,word4,word5}, setWord] = useState<any>({word1:'',word2:'',word3:'',word4:'',word5:''});

  return (
    
    <>
  <Word5Letter word={word1} />
  <Word5Letter word={word2} />
  <Word5Letter word={word3} />
  <Word5Letter word={word4} />


    
<Button onPress={()=>{
    setWord((prev: any)=>{
        return {...prev,['word'+actualNumber]:prev['word'+actualNumber]+'A'};
    })}} title="A" ></Button>
<Button onPress={()=>{

    setWord((prev:any)=>{
if(prev['word'+actualNumber].length>=5){
    setActualNumber(actualNumber+1);
    return {...prev,['word'+(actualNumber-1)]:prev['word'+(actualNumber-1)]+'&'};
}
return prev;
    })
    
    }} title="Enter" ></Button>
    </>
  
  )
}
