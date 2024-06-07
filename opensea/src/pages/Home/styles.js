import { StyleSheet } from 'react-native';

export default StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#FFFFFF',
    },
    logo: {
        width: 100,
        height: 100,
        marginBottom: 20,
    },
    title: {
        color: '#A8B7DD',
        fontSize: 32,
        fontWeight: 'bold',
        marginBottom: 20,
    },
    button: {
        backgroundColor: '#A8B7DD',
        paddingVertical: 15,
        paddingHorizontal: 50,
        borderRadius: 25,
        marginTop: 20,
    },
    buttonText: {
        color: '#FFFFFF',
        fontSize: 18,
        fontWeight: 'bold',
        textAlign: 'center',
    },
});
