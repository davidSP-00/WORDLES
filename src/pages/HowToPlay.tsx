import React, { useState } from 'react'
import { Alert, Modal, Pressable, StyleSheet } from 'react-native';
import { Text, View } from 'react-native-animatable';
import { Ionicons } from '@expo/vector-icons';
import { Score5Letter } from '../components/score/Score5Letter';

export const HowToPlay = ({modalVisible,setModalVisible}:{modalVisible:boolean,setModalVisible:React.Dispatch<React.SetStateAction<boolean>>}) => {
    return (
        <View style={styles.centeredView}>
            <Modal
                animationType="fade"
                transparent={true}
                visible={modalVisible}
                onRequestClose={() => {
                    Alert.alert('Modal has been closed.');
                    setModalVisible(!modalVisible);
                }}>
                <View style={styles.centeredView}>
                    <View style={styles.modalView}>
                        <Ionicons name="close" size={30} style={{ textAlignVertical: 'center', alignSelf: 'flex-end' }}  onPress={() => setModalVisible(false)}/>

                        <Text style={styles.titleText}>Instrucciones</Text>

                        <Text style={styles.modalText}>
                            El objetivo principal es adivinar la palabra del día en seis intentos.
                        </Text>
                        <Text style={styles.modalText}>
                            En cada intento se mostrara que letras de la palabra del día estan correctas o incorrectas.
                        </Text>
                        <Text style={styles.modalText}>
                            En cada intento se mostrara que letras de la palabra del día estan correctas o incorrectas.
                        </Text>
                        <Score5Letter key="a" word="PERRO" positionStyle={1} style="correctLetter" ></Score5Letter>
                        
                        <Text style={styles.modalText}>
                            La letra E existe en la palabra del día.
                        </Text>
                        <Score5Letter key="b" word="SANTO" positionStyle={3} style="warningLetter" ></Score5Letter>
                        
                        <Text style={styles.modalText}>
                            La letra T existe en la palabra del día pero no esta en la posición correcta.
                        </Text>
                        <Score5Letter key="c" word="SALDO" positionStyle={4} style="wrongLetter" ></Score5Letter>
                        
                        <Text style={styles.modalText}>
                            La letra O no existe en la palabra del día.
                        </Text>
                        
                        <Text style={[styles.modalText,{fontWeight:'bold'}]}>
                            Adivinalos Todos.!!!
                        </Text>

                        <Text style={styles.modalText}>
                            Si ocurre alguna incidencia o deseas enviarnos tus comentarios, contacta al correo wordles.info@gmail.com
                        </Text>
                        <Pressable
                            style={[styles.button, styles.buttonClose]}
                            onPress={() => setModalVisible(!modalVisible)}>
                            <Text style={styles.textStyle}>JUGAR</Text>
                        </Pressable>
                    </View>
                </View>
            </Modal>
            {/* <Pressable style={[styles.button, styles.buttonOpen]} onPress={() => setModalVisible(true)}>
                <Text style={styles.textStyle}>Show Modal</Text>
            </Pressable> */}
        </View>
    )
}
const styles = StyleSheet.create({
    centeredView: {
        flex: 1,/* 
      justifyContent: 'center', */
        alignItems: 'center',
        /* marginTop: 22, */
    },
    modalView: {
        height: '100%',
        width: '100%',
        margin: 20,
        backgroundColor: 'white',
        /*  borderRadius: 20, */
        padding: 35,
       /*  alignItems: 'center', */
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5,
    },
    titleText: {
        fontWeight: 'bold',
        fontSize: 20,
        marginVertical: 10,
    },
    button: {
        borderRadius: 20,
        padding: 10,
        elevation: 2,
    },
    buttonOpen: {
        backgroundColor: '#F194FF',
    },
    buttonClose: {
        alignSelf: 'center',
        width:'50%',
        backgroundColor: 'grey',
    },
    textStyle: {
        color: 'white',
        fontWeight: 'bold',
        textAlign: 'center',
    },
    modalText: {
        marginBottom: 15,
        textAlign:  'left',
    },
});