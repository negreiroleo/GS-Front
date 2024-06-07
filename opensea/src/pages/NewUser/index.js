import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, KeyboardAvoidingView, Platform, Image } from 'react-native';
import styles from './styles';
import { getAuth, createUserWithEmailAndPassword } from 'firebase/auth';
import { app, auth } from '../../config/firebase';
import { MaterialCommunityIcons } from '@expo/vector-icons';

export default function NewUser({ navigation }) {
    const [email, setEmail] = useState('');
    const [senha, setSenha] = useState('');
    const [confirmSenha, setConfirmSenha] = useState('');
    const [errorCadastro, setErrorCadastro] = useState('');

    const registerFirebase = async () => {
        if (senha !== confirmSenha) {
            setErrorCadastro("As senhas não coincidem");
            return;
        }

        try {
            await createUserWithEmailAndPassword(auth, email, senha);
            navigation.navigate('Home'); // Navegar para HomePage após cadastro bem-sucedido
        } catch (error) {
            setErrorCadastro(error.message);
        }
    };

    return (
        <KeyboardAvoidingView behavior={Platform.OS === "ios" ? "padding" : "height"} style={styles.container}>
            <Image source={require('../../../assets/Logo.jpg')} style={styles.logo} />
            <Text style={styles.title}>Cadastro</Text>
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
            <TextInput
                style={styles.input}
                placeholder="Confirme sua senha"
                value={confirmSenha}
                onChangeText={text => setConfirmSenha(text)}
                secureTextEntry={true}
            />
            {errorCadastro ? (
                <View style={styles.contentAlert}>
                    <MaterialCommunityIcons
                        name="alert-circle"
                        size={24}
                        color="#FF0000"
                    />
                    <Text style={styles.warningAlert}>{errorCadastro}</Text>
                </View>
            ) : (
                <View />
            )}
            {email === "" || senha === "" || confirmSenha === "" ? (
                <TouchableOpacity style={styles.buttonRegister} disabled={true}>
                    <Text style={styles.textButtonRegister}>Cadastrar</Text>
                </TouchableOpacity>
            ) : (
                <TouchableOpacity style={styles.buttonRegister} onPress={registerFirebase}>
                    <Text style={styles.textButtonRegister}>Cadastrar</Text>
                </TouchableOpacity>
            )}
            <Text style={styles.linkLogin}>
                Já tem uma conta?{" "}
                <Text
                    style={styles.linkLoginText}
                    onPress={() => navigation.navigate("Login")}
                >
                    Faça login
                </Text>
            </Text>
            <View style={{ height: 100 }} />
        </KeyboardAvoidingView>
    );
}
