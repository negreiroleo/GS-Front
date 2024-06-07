import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, TouchableOpacity, KeyboardAvoidingView, Platform, Image } from 'react-native';
import { app, auth } from '../../config/firebase';
import styles from './styles';
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth';
import { MaterialCommunityIcons } from '@expo/vector-icons';

export default function Login({ navigation }) {
    const [email, setEmail] = useState('');
    const [senha, setSenha] = useState('');
    const [errorLogin, setErrorLogin] = useState('');

    const loginFirebase = async () => {
        const auth = getAuth(app);
        try {
            await signInWithEmailAndPassword(auth, email, senha);
            navigation.navigate('Home'); // Navegar para HomePage após login bem-sucedido
        } catch (error) {
            setErrorLogin(error.message);
        }
    };

    useEffect(() => {}, []);

    return (
        <KeyboardAvoidingView behavior={Platform.OS === "ios" ? "padding" : "height"} style={styles.container}>
            <Image source={require('../../../assets/Logo.jpg')} style={styles.logo} />
            <TextInput
                style={styles.input}
                placeholder="Digite seu e-mail"
                type="text"
                value={email}
                onChangeText={text => setEmail(text)}
            />
            <TextInput
                style={styles.input}
                placeholder="Digite sua senha"
                value={senha}
                onChangeText={text => setSenha(text)}
                secureTextEntry={true}
            />
            {errorLogin ? (
                <View style={styles.contentAlert}>
                    <MaterialCommunityIcons
                        name="alert-circle"
                        size={24}
                        color="#FF0000"
                    />
                    <Text style={styles.warningAlert}>E-mail ou senha inválidos</Text>
                </View>
            ) : (
                <View />
            )}
            {email === "" || senha === "" ? (
                <TouchableOpacity style={styles.buttonLogin} disabled={true}>
                    <Text style={styles.textButtonLogin}>Entrar</Text>
                </TouchableOpacity>
            ) : (
                <TouchableOpacity style={styles.buttonLogin} onPress={loginFirebase}>
                    <Text style={styles.textButtonLogin}>Entrar</Text>
                </TouchableOpacity>
            )}
            <Text style={styles.linkSubscribe}>
                Não tem uma conta?{" "}
                <Text
                    style={styles.linkSubscribeText}
                    onPress={() => navigation.navigate("NewUser")}
                >
                    Cadastre-se
                </Text>
            </Text>
            <View style={{ height: 100 }} />
        </KeyboardAvoidingView>
    );
}
