import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 2,
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
        width: '100%',
        height: 200,
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
    },
    avatarContainer: {
        alignItems: 'center',
        marginTop: -50,
    },
    avatar: {
        width: 100,
        height: 100,
        borderRadius: 50,
    },
    name: {
        fontSize: 10,
        fontWeight: 'bold',
        marginTop: 5,
        color: 'black',
    },
    content: {
        padding: 16,
        marginTop: 5,
    },    
    infoLabel: {
        fontWeight: 'bold',
    },
    infoValue: {
        color: '#555',
        marginTop: 5,
    },
    picker: {
        height: 50,
        width: '100%',
        marginTop: 10,
    },
    card: {
        width: '90%',
        marginTop: 20,
        marginBottom: 20,
        padding: 10,
        borderRadius: 10,
        backgroundColor: '#ffbc63',
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
    },
    chip: {
        margin: 10,
        padding: 2,
        backgroundColor: '#ffa000'
    },
    header: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      marginBottom: 16,
  },
  infoContainer: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      marginBottom: 8,
  },
  infoLabel: {
      fontWeight: 'bold',
      color: '#333',
  },
  infoValue: {
      color: '#555',
  },
  chipContainer: {
      flexDirection: 'row',
      justifyContent: 'flex-end',
      marginTop: 16,
  },

});

