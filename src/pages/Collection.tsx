import { Dimensions, ScrollView, StyleSheet, Text, View } from "react-native"


export const Collection = () => {
    return (
        <ScrollView showsVerticalScrollIndicator={false}  >
            <Text style={styles.title}>Palabras Atrapadas : 5</Text>
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


            </View>

        </ScrollView>

    )
}
const styles = StyleSheet.create({
    title: {
        color: 'black',
        textAlign: 'center',
        fontSize: Dimensions.get('window').width / 20,
    },
    wordList: {
        flex: 1,
        flexDirection: 'row',
        flexWrap: 'wrap',
        width: '100%',
        paddingVertical: Dimensions.get('window').width / 18,
    },
    wordCatched:{
        color: 'green',
        fontSize: Dimensions.get('window').width / 18,
        marginHorizontal: Dimensions.get('window').width / 30,
    },
    wordMissed:{
        color: '#FFA420',
        fontSize: Dimensions.get('window').width / 18,
        marginHorizontal: Dimensions.get('window').width / 30,
    }

});
