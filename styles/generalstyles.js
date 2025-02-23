import { StyleSheet } from 'react-native';


export const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
    title: {
      fontSize: 24,
      marginBottom: 16,
      textAlign: 'center',
    },
    input: {
      height: 40,
      borderColor: 'gray',
      borderWidth: 1,
      marginBottom: 12,
      paddingHorizontal: 8,
    },
    error: {
      color: 'red',
      marginBottom: 12,
      textAlign: 'center',
    },
    coverImage: {
      height: 150,
      position: 'absolute',
      top: 0,
      left: 0,
      right: 0,
    },
    avatarContainer: {
      alignItems: 'center',
      marginTop: 20,
    },
    avatar: {
      width: 120,
      height: 120,
      borderRadius: 60,
    },
    name: {
      fontSize: 10,
      fontWeight: 'bold',
      marginTop: 5,
      color:'black'
    },
    content: {
      marginTop: 5,
    },
    infoContainer: {
      marginTop: 5,
    },
    infoLabel: {
      fontWeight: 'bold',
    },
    infoValue: {
      marginTop: 5,
    },
    picker:{
      height: 50,
      width: 150,
      marginTop: 10,
    },
  });

