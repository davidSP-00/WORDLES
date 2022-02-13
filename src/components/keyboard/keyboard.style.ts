import { Dimensions, StyleSheet } from "react-native";

 const button=StyleSheet.create({
buttonView:{
    justifyContent: 'center',
    height: Dimensions.get('window').width / 7,
    margin:2,
    borderRadius: 5,
    backgroundColor: '#AEAEAE'
},
letterButtonView:{
    width: Dimensions.get('window').width /11.5,

},
enterButtonView:{
    width: Dimensions.get('window').width /5.45,
}
});
export {button}
