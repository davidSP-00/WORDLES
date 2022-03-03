import { Dimensions, FlatList, ScrollView, SectionList, StyleSheet, Text, View } from "react-native"


export const Collection = () => {
    return (
        <View
        style={{
            height:Dimensions.get('window').height * 0.92,
        }} >
           {/*  <Text style={styles.title}>Palabras Atrapadas : 5</Text>
            <View style={
               styles.wordList}>
                {Array.from(Array(19).keys()).map((index) => (
                    <Text key={index} style={styles.wordCatched}>PAPER</Text>
                ))}


            </View>
            <Text  style={styles.title}>Palabras Perdidas : 5</Text>
            <View style={
               styles.wordList
            }>
                {Array.from(Array(90).keys()).map((index) => (
                    <Text key={index} style={styles.wordMissed}>PAPER</Text>
                ))}


            </View> */}
   <SectionList
        style={{backgroundColor:'#B4E0B0'}}
        stickySectionHeadersEnabled={true}
          sections={[
            {title: 'Palabras Ganadas : 29', data: []},
          ]}
          renderItem={({item}) => <Text style={styles.item}>{item}</Text>}
          renderSectionHeader={({section}) => <Text key={section.title} style={styles.sectionHeader}>{section.title}</Text>}
        />
        <SectionList
        stickySectionHeadersEnabled={true}
        style={{backgroundColor:'#DEE0B0'}}
               sections={[
                 {title: 'Palabras Perdidas : 10', data: []},
               ]}
               renderItem={({item}) => <Text style={styles.item}>{item}</Text>}
               renderSectionHeader={({section}) => <Text key={section.title} style={styles.sectionHeader2}>{section.title}</Text>}
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
