import React from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import styles from './styles';
import Footer from '../../components/Footer';

export default function HomePage({ navigation }) {
    return (
        <View style={styles.container}>
            <Image source={require('../../../assets/Logo.jpg')} style={styles.logo} />
            <Text style={styles.title}>Open Sea</Text>
            <TouchableOpacity
                style={styles.button}
                onPress={() => navigation.navigate('Form')}
            >
                <Text style={styles.buttonText}>Realizar uma solicitação</Text>
            </TouchableOpacity>
            <TouchableOpacity
                style={[styles.button, { marginTop: 10 }]}
                onPress={() => navigation.navigate('Requests')}
            >
                <Text style={styles.buttonText}>Ver solicitações</Text>
            </TouchableOpacity>
            <Footer />
        </View>
    );
}
