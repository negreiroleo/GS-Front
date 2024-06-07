import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#DDDDDD',
    justifyContent: 'center',
    alignItems: 'center',
  },
  welcomeText: {
    color: '#A8B7DD',
    fontSize: 40,
    fontWeight: 'bold',
    marginBottom: 100,
  },
  image: {
    width: 200,
    height: 200,
    borderRadius: 100,
    marginBottom: 200,
  },
  button: {
    backgroundColor: '#A8B7DD',
    paddingVertical: 15,
    paddingHorizontal: 120,
    borderRadius: 35,
  },
  buttonText: {
    color: '#FFFFFF',
    fontSize: 20,
    fontWeight: 'bold',
  },
});
