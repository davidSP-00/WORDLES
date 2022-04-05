
import { Text, View, TextInput, Button, Alert, StyleSheet, Dimensions, ActivityIndicator } from "react-native";
import { useForm, Controller } from "react-hook-form";
import { useContext, useState } from "react";
import { login } from "../services/auth";
import { messageOptions } from "../components/modals/message.style";
import { showMessage } from "react-native-flash-message";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { WordContext } from "../components/context/WordContext";

export const Login = () => {
    const { control, handleSubmit, formState: { errors },reset } = useForm({
        defaultValues: {
            email: '',
            password: '',
        }
    });
    const {setCurrentTab,setAuth,setToken} = useContext(WordContext)

    const [loading, setLoading] = useState(false);
    const onSubmit = (data: any) => {
        setLoading(true);
        let user = { email: data.email, password: data.password, name: " " };
        console.log(user)
        login(user).then(async (res) => {
            console.log('fds')
            showMessage({
                ...messageOptions,
                message: "Inicio Exitoso.",

            });
            await AsyncStorage.setItem('@token', res.jwtToken).then(() => {
                console.log("token saved",res.jwtToken);
                
                setCurrentTab('WordDay');
                setToken(res.jwtToken);
              
            })
            
             reset();
        }).catch(err => {
            showMessage({
                ...messageOptions,
                message: "Email o contraseña incorrectas.",

            });
        }).finally(() => {
            setAuth(true);
            setLoading(false);
        });
        console.log(data)
    }
        ;
    return (
        <View>
            <Text style={authStyles.head}>Iniciar Sesion</Text>

            <Text style={authStyles.title}>Email</Text>
            <Controller
                control={control}
                rules={{
                    maxLength: 50,
                    required: { value: true, message: "Email es requerido" },
                    pattern: {
                        value: /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
                        message: "Email no es valido"
                    },
                }}
                render={({ field: { onChange, onBlur, value } }) => (
                    <TextInput
                        placeholder="Email"
                        style={authStyles.input}
                        onBlur={onBlur}
                        onChangeText={onChange}
                        value={value}
                    />
                )}
                name="email"
            />
            {errors.email && <Text
                style={authStyles.invalid}>{errors.email.message}</Text>}
            <Text style={authStyles.title}>Contraseña</Text>
            <Controller
                control={control}

                rules={{
                    maxLength: 20,
                    required: { value: true, message: "Contraseña es requerido" },
                }}
                render={({ field: { onChange, onBlur, value } }) => (
                    <TextInput
                        secureTextEntry={true}
                        autoCompleteType="password"
                        textContentType="password"
                        placeholder="Contraseña"
                        style={authStyles.input}
                        onBlur={onBlur}
                        onChangeText={onChange}
                        value={value}
                    />
                )}
                name="password"
            />
            {errors.password && <Text
                style={authStyles.invalid}>{errors.password.message}</Text>}


            <View style={{
                marginTop: 20,
            }}>


                <Button title="Iniciar Sesion" color="#64646E" onPress={handleSubmit(onSubmit)} disabled={loading}></Button>

                {loading && <ActivityIndicator size="large" color="#666666" style={{}} />}
            </View>
        </View>
    )
}
export const authStyles = StyleSheet.create({
    input: {
        borderColor: 'black',
        borderRadius: 5,
        width: Dimensions.get('screen').width * 0.98,
        borderWidth: 1,
        paddingLeft: 12,
        paddingVertical: 10,
        alignSelf:'center'

    },
    invalid: {
        color: 'red'
    },
    title: {
        marginLeft: 10,
        marginTop: 15
    },
    head: {
        alignSelf: "center",
        fontSize: 20,
        fontWeight: "bold",
        marginVertical: 20,
        color: "#888"
    }
})