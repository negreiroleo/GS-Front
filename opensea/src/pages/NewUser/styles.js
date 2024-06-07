import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#DDDDDD',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  logo: {
    width: 100,
    height: 100,
    marginBottom: 20,
    borderRadius: 100,
  },
  title: {
    color: '#A8B7DD',
    fontSize: 32,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  input: {
    width: '100%',
    height: 50,
    backgroundColor: '#FFFFFF',
    borderRadius: 10,
    paddingHorizontal: 10,
    marginVertical: 10,
    fontSize: 16,
    color: '#000',
  },
  buttonRegister: {
    backgroundColor: '#A8B7DD',
    paddingVertical: 15,
    paddingHorizontal: 50,
    borderRadius: 25,
    marginTop: 20,
  },
  textButtonRegister: {
    color: '#FFFFFF',
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  contentAlert: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 10,
  },
  warningAlert: {
    color: '#FF0000',
    fontSize: 14,
    marginLeft: 10,
  },
  linkLogin: {
    marginTop: 20,
    fontSize: 14,
    color: '#000',
  },
  linkLoginText: {
    color: '#A8B7DD',
    fontWeight: 'bold',
    fontSize: 14,
  }
});
