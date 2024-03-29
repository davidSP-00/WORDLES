import { Dimensions, StyleSheet } from "react-native";

 const button=StyleSheet.create({
buttonView:{
    justifyContent: 'center',
    textAlignVertical: 'center',
    textAlign:'center',
    height: Dimensions.get('window').width / 7,
    width: Dimensions.get('window').width /11.5,
    fontSize: Dimensions.get('window').width /20,
    fontWeight:'bold',
    color: 'white',
    margin:2,
    borderRadius: 5,
}
,letterNormal:{
    backgroundColor: 'rgb(165,165,165)'
},
letterWarning:{
    backgroundColor: '#c9b458'
},
letterCorrect:{
    backgroundColor: '#6aaa64'
},
letterPlayed:{
    backgroundColor: '#3a3a3c'
},
  enterStyle: {
    width: Dimensions.get('window').width /5.45,
    backgroundColor: 'rgb(165,165,165)',
    fontSize: Dimensions.get('window').width / 25,
    textAlign: 'center'
}
});
export {button}
