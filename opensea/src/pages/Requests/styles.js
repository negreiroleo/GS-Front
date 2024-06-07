import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
    padding: 20,
  },
  title: {
    color: '#A8B7DD',
    fontSize: 32,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  item: {
    backgroundColor: '#FFFFFF',
    padding: 20,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#A8B7DD',
    marginVertical: 10,
    width: '100%',
  },
  itemTitle: {
    color: '#A8B7DD',
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  itemText: {
    color: '#000',
    fontSize: 16,
    marginBottom: 5,
  },
});
