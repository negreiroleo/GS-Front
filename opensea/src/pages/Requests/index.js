import React, { useState, useEffect } from 'react';
import { View, Text, FlatList } from 'react-native';
import { firestore } from '../../config/firebase';
import { collection, getDocs } from 'firebase/firestore';
import styles from './styles';
import Footer from '../../components/Footer';

export default function Requests() {
    const [solicitacoes, setSolicitacoes] = useState([]);

    useEffect(() => {
        const fetchSolicitacoes = async () => {
            try {
                const querySnapshot = await getDocs(collection(firestore, 'solicitacoes'));
                const solicitacoesList = querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
                setSolicitacoes(solicitacoesList);
            } catch (error) {
                console.error("Erro ao buscar solicitações: ", error);
            }
        };

        fetchSolicitacoes();
    }, []);

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Solicitações</Text>
            <FlatList
                data={solicitacoes}
                keyExtractor={item => item.id}
                renderItem={({ item }) => (
                    <View style={styles.item}>
                        <Text style={styles.itemTitle}>{item.titulo}</Text>
                        <Text style={styles.itemText}>Endereço: {item.endereco}</Text>
                        <Text style={styles.itemText}>Cidade: {item.cidade}</Text>
                        <Text style={styles.itemText}>Estado: {item.estado}</Text>
                        <Text style={styles.itemText}>País: {item.pais}</Text>
                    </View>
                )}
            />
            <Footer />
        </View>
    );
}
