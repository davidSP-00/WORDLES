
import { Text, View, TextInput, Button, Alert, StyleSheet, Dimensions, ActivityIndicator } from "react-native";
import { useForm, Controller } from "react-hook-form";
import { authStyles } from "./Login";
import { useState } from "react";
import { register } from "../services/auth";
import { showMessage } from "react-native-flash-message";
import { messageOptions } from "../components/modals/message.style";

export const Register = () => {
    const { control, handleSubmit, formState: { errors } } = useForm({
        defaultValues: {
            name: '',
            email: '',
            password: '',
            password2: '',
        }
    });

    const [loading, setLoading] = useState(false);
    const onSubmit = (data: any) => {
        setLoading(true);
        let user = { email: data.email, password: data.password, name: data.name }
        console.log(user)
        register(user).then(
            (res) => {
                console.log(res)
                showMessage({
                    ...messageOptions,
                    message: "Registro correcto.",

                });
            }
        ).catch((err) => {
            console.log(err)
            showMessage({
                ...messageOptions,
                message: "Ocurrio un error por favor intentelo de nuevo en un momento.",

            });
        }).finally(() => {

            setLoading(false);
        })
    };


    return (
        <View>
            <Text style={authStyles.head}>Registrarse</Text>
            <Text style={authStyles.title}>Nombre</Text>
            <Controller
                control={control}
                rules={{
                    required: { value: true, message: "Nombre es requerido" },
                    minLength: { value: 3, message: "Nombre debe tener al menos 3 caracteres" },
                }}
                render={({ field: { onChange, onBlur, value } }) => (
                    <TextInput
                        placeholder="Nombre"
                        style={authStyles.input}
                        onBlur={onBlur}
                        onChangeText={onChange}
                        value={value}
                    />
                )}
                name="name"
            />
            {errors.name && <Text
                style={authStyles.invalid}>{errors.name.message}</Text>}

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
                    minLength: { value: 8, message: "Contraseña debe tener al menos 8 caracteres" },
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


            <Text style={authStyles.title}>Repita Contraseña</Text>
            <Controller
                control={control}

                rules={{
                    maxLength: 20,
                    minLength: 8,
                    validate: (value: any) => {
                        console.log(value,)
                        return control._getWatch('password') == value
                    }
                }}
                render={({ field: { onChange, onBlur, value } }) => (
                    <TextInput
                        secureTextEntry={true}
                        autoCompleteType="password"
                        textContentType="password"
                        placeholder="Repita Contraseña"
                        style={authStyles.input}
                        onBlur={onBlur}
                        onChangeText={onChange}
                        value={value}
                    />
                )}
                name="password2"
            />
            {errors.password2 && <Text
                style={authStyles.invalid}>La contraseña debe coincidir</Text>}
            <View style={{
                marginTop: 20,
            }}>

                <Button title="Registrarse" color="#64646E" onPress={handleSubmit(onSubmit)} disabled={loading}></Button>

                {loading && <ActivityIndicator size="large" color="#666666" style={{}} />}
            </View>
        </View>
    )
}