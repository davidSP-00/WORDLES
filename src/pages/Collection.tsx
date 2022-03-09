import { useContext, useEffect } from "react";
import { Dimensions, FlatList, ScrollView, SectionList, StyleSheet, Text, View } from "react-native"
import { WordContext } from "../components/context/WordContext";
import { getWordsPlayed } from "../services/getWordsPlayed";
import jwt_decode from "jwt-decode";
import { useState } from "react";


export const Collection = () => {
  const {currentTab,token} = useContext(WordContext);

  const [wordsWin, setWordsWin] = useState([]);
  const [wordsLose, setWordsLose] = useState([]);
  
  useEffect(() => {
    if(currentTab== 'Mi Colección'){
    
    getWordsPlayed((jwt_decode(token) as any).sub,token).then(res=>{
     
      setWordsWin(res.filter((item:any)=>item.win==true))
      setWordsLose(res.filter((item:any)=>item.win==false))
    })
   
  }
  }, [currentTab])
  
    return (
        <View
        style={{
            height:Dimensions.get('window').height * 0.92,
        }} >
   <SectionList
        style={{backgroundColor:'#B4E0B0'}}
        stickySectionHeadersEnabled={true}
          sections={[
            {title: 'Palabras Ganadas : 29', data: wordsWin,key:'win'},
          ]}
          renderItem={({item}:any) => <Text style={styles.item} key={item.word_id}>{item.word_id}</Text>}
          renderSectionHeader={() => <Text  style={styles.sectionHeader}>Palabras Ganadas : 29</Text>}
        />
        <SectionList
        stickySectionHeadersEnabled={true}
        style={{backgroundColor:'#DEE0B0'}}
               sections={[
                 {title: 'Palabras Perdidas : 10', data: wordsLose,key:'lose'},
               ]}
               renderItem={({item}:any) => <Text style={styles.item}  key={item.word_id}>{item.word_id}</Text>}
               renderSectionHeader={() => <Text  style={styles.sectionHeader2}>Palabras Perdidas : 10</Text>}
             />
        </View>

    )
}
const styles = StyleSheet.create({
    sectionHeader: {
        padding:5,
      fontSize: 14,
      color:'#129309',
      fontWeight: 'bold',
      backgroundColor: '#B4E0B0',
      borderBottomWidth:1,
      borderBottomColor:'#129309'
    },
    sectionHeader2: {
        padding:5,
      fontSize: 14,
      width: Dimensions.get('window').width,
      color:'#8B9309',
      fontWeight: 'bold',
      backgroundColor: '#DEE0B0',
      borderBottomWidth:1,
      borderBottomColor:'#8B9309'
    },
    item: {
      padding: 7,
      fontSize: 18,
      height: 44,
    },

});
