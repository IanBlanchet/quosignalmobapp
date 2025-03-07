import React, { useState, useEffect } from 'react';
import { View, ScrollView } from 'react-native';
import { Button,  Provider, Checkbox, Title, TextInput, Text } from 'react-native-paper';
import { getRessources } from '../apiCall';
import ProfileScreen from '../components/profile/profile';
import { styles } from '../styles/generalstyles';



export default function AddAbonneScreen({ navigation }) {
    const [prenom, setPrenom] = useState('');
    const [nom, setNom] = useState('');
    const [telephone, setTelephone] = useState('');
    const [adresse, setAdresse] = useState('');
    const [ville, setVille] = useState('');
    const [heure, setHeure] = useState('');
    const [langue, setLangue] = useState('');
    const [jours, setJours] = useState({
        lundi: false,
        mardi: false,
        mercredi: false,
        jeudi: false,
        vendredi: false,        
    });
    

    const handleAddAbonne = () => {

        // Réinitialiser les champs de saisie
        setPrenom('');
        setNom('');
        setTelephone('');
        setAdresse('');
        setVille('');
        setHeure('');
        setLangue('');
        setJours({
            lundi: false,
            mardi: false,
            mercredi: false,
            jeudi: false,
            vendredi: false,            
        });
        // Naviguer vers une autre page si nécessaire
        navigation.navigate('Abonnes');
    };
    const toggleCheckbox = (day) => {
        setJours({ ...jours, [day]: !jours[day] });
    };

    return (
        <Provider>
            <ScrollView contentContainerStyle={{ flexGrow: 1, padding: 16  }}>
            <Title style={styles.title}>Ajouter un Abonné</Title>
                <TextInput
                    label="Prénom"
                    value={prenom}
                    onChangeText={text => setPrenom(text)}
                    style={styles.input}
                />
                <TextInput
                    label="Nom"
                    value={nom}
                    onChangeText={text => setNom(text)}
                    style={styles.input}
                />
                <TextInput
                    label="Téléphone"
                    value={telephone}
                    onChangeText={text => setTelephone(text)}
                    style={styles.input}
                    keyboardType="phone-pad"
                />
                <TextInput
                    label="Adresse"
                    value={adresse}
                    onChangeText={text => setAdresse(text)}
                    style={styles.input}
                />
                <TextInput
                    label="Ville"
                    value={ville}
                    onChangeText={text => setVille(text)}
                    style={styles.input}
                />
                <TextInput
                    label="Heure"
                    value={heure}
                    onChangeText={text => setHeure(text)}
                    style={styles.input}
                />
                <TextInput
                    label="Langue"
                    value={langue}
                    onChangeText={text => setLangue(text)}
                    style={styles.input}
                />
                {Object.keys(jours).map((day) => (
                    <View key={day} style={styles.checkboxContainer}>
                        <Checkbox
                            status={jours[day] ? 'checked' : 'unchecked'}
                            onPress={() => toggleCheckbox(day)}
                        />
                        <Text>{day.charAt(0).toUpperCase() + day.slice(1)}</Text>
                    </View>
                ))}                       

                <Button mode="contained" onPress={handleAddAbonne} style={styles.button}>
                    Ajouter
                </Button>
            </ScrollView>
        </Provider>

    )
}