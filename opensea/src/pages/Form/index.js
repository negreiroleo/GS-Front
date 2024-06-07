import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, Alert, KeyboardAvoidingView, Platform } from 'react-native';
import styles from './styles';
import { firestore } from '../../config/firebase';
import { collection, addDoc } from 'firebase/firestore';
import Footer from '../../components/Footer';
import { getAuth } from 'firebase/auth';

export default function Form() {
    const [titulo, setTitulo] = useState('');
    const [endereco, setEndereco] = useState('');
    const [cidade, setCidade] = useState('');
    const [estado, setEstado] = useState('');
    const [pais, setPais] = useState('');
    const auth = getAuth();
    const currentUser = auth.currentUser;

    const handleSubmit = async () => {
        if (currentUser) {
            try {
                await addDoc(collection(firestore, 'solicitacoes'), {
                    uid: currentUser.uid, // Adicionar o ID do usuário
                    titulo,
                    endereco,
                    cidade,
                    estado,
                    pais,
                    timestamp: new Date(),
                });
                Alert.alert("Obrigado!", "Recebemos sua solicitação e faremos uma visita.");
                // Limpar os campos após a submissão
                setTitulo('');
                setEndereco('');
                setCidade('');
                setEstado('');
                setPais('');
            } catch (error) {
                console.error("Erro ao enviar solicitação: ", error);
                Alert.alert("Erro", `Erro ao enviar solicitação: ${error.message}`);
            }
        } else {
            Alert.alert("Erro", "Usuário não autenticado. Por favor, faça login.");
        }
    };

    return (
        <KeyboardAvoidingView behavior={Platform.OS === "ios" ? "padding" : "height"} style={styles.container}>
            <Text style={styles.title}>Formulário de Solicitação</Text>
            <TextInput
                style={styles.input}
                placeholder="Título"
                value={titulo}
                onChangeText={setTitulo}
            />
            <TextInput
                style={styles.input}
                placeholder="Endereço"
                value={endereco}
                onChangeText={setEndereco}
            />
            <TextInput
                style={styles.input}
                placeholder="Cidade"
                value={cidade}
                onChangeText={setCidade}
            />
            <TextInput
                style={styles.input}
                placeholder="Estado"
                value={estado}
                onChangeText={setEstado}
            />
            <TextInput
                style={styles.input}
                placeholder="País"
                value={pais}
                onChangeText={setPais}
            />
            <TouchableOpacity
                style={styles.button}
                onPress={handleSubmit}
            >
                <Text style={styles.buttonText}>Enviar</Text>
            </TouchableOpacity>
            <Footer />
        </KeyboardAvoidingView>
    );
}
