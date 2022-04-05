import { useContext, useEffect } from "react";
import { Dimensions, SectionList, StyleSheet, Text, View } from "react-native"
import { WordContext } from "../components/context/WordContext";
import { getWordsPlayed } from "../services/getWordsPlayed";
import jwt_decode from "jwt-decode";
import { useState } from "react";
import { tabs } from "../data/tabs";


export const Collection = () => {
  const { currentTab, token } = useContext(WordContext);

  const [wordsWin, setWordsWin] = useState([]);
  const [wordsLose, setWordsLose] = useState([]);

  useEffect(() => {
    if (currentTab == tabs.MiColección) {

      getWordsPlayed((jwt_decode(token) as any).sub, token).then(res => {

        setWordsWin(res.filter((item: any) => item.win == true))
        setWordsLose(res.filter((item: any) => item.win == false))
      })

    }
  }, [currentTab])

  return (
    <View
    key="collection"
      style={{
        height: Dimensions.get('window').height * 0.92,
      }} >
      <SectionList
      key="s1"
        style={{ backgroundColor: '#B4E0B0' }}
        stickySectionHeadersEnabled={true}
        sections={[
          { title: 'Palabras Ganadas : ' + wordsWin.length, data: wordsWin, key: 'win',keyExtractor: (item, index) => index.toString() },
        ]}
        renderItem={({ item }: any) => <Text style={styles.item}/*  key={item.word_id} */>{item.word_id}</Text>}
        renderSectionHeader={(info) => <Text key="h1" style={styles.sectionHeader}>{info.section.title}</Text>}
      />
      <SectionList
      key="s2"
        stickySectionHeadersEnabled={true}
        style={{ backgroundColor: '#DEE0B0' }}
        sections={[
          { title: 'Palabras Perdidas : ' + wordsLose.length, data: wordsLose, key: 'lose',keyExtractor: (item: any) => item.word_id },
        ]}
        renderItem={({ item }: any) => <Text style={styles.item} /* key={item.word_id} */>{item.word_id}</Text>}
        renderSectionHeader={(info) => <Text key="h2" style={styles.sectionHeader2}>{info.section.title}</Text>}
      />
    </View>

  )
}
const styles = StyleSheet.create({
  sectionHeader: {
    padding: 5,
    fontSize: 14,
    color: '#129309',
    fontWeight: 'bold',
    backgroundColor: '#B4E0B0',
    borderBottomWidth: 1,
    borderBottomColor: '#129309'
  },
  sectionHeader2: {
    padding: 5,
    fontSize: 14,
    width: Dimensions.get('window').width,
    color: '#8B9309',
    fontWeight: 'bold',
    backgroundColor: '#DEE0B0',
    borderBottomWidth: 1,
    borderBottomColor: '#8B9309'
  },
  item: {
    padding: 7,
    fontSize: 18,
    height: 44,
  },

});
