import { Text, View, Button, StyleSheet } from 'react-native';
import { getRessources } from '../apiCall';
import { useState, useEffect } from 'react';
import { Picker } from '@react-native-picker/picker';
import ProfileScreen from '../components/profile';
import { styles } from '../styles/generalstyles';

export default function AbonneScreen({ navigation }) {
    const [abonnes, setAbonnes] = useState([]);
    const [selectAbonne, setSelectAbonne] = useState({});

    const onSelectAbonne = (id) => {        
        const abonne = abonnes.find((element) => element.id === parseInt(id));
        
        setSelectAbonne(abonne);
    };

    useEffect(() => {
        getRessources('/api/v1/centre/').then(
            lescentres => {
                const CAB = lescentres.find((element) => element.id === 1)
                const lesabonnes = CAB.abonnes;
                
                // Vérifiez que les données sont correctement définies
                if (Array.isArray(lesabonnes) && lesabonnes.length > 0) {
                    setAbonnes(lesabonnes);
                } else {
                    console.error('Invalid data:', lesabonnes);
                }
            }
        ).catch(error => {
            console.error('API error:', error);
        });
    }, []);

    return (
        <>
            <View style={styles.container}>
                <Picker
                    style={styles.picker}
                    selectedValue={selectAbonne.id}
                    onValueChange={(itemId) => onSelectAbonne(itemId)}
                >
                    {abonnes.map((abonne, index) =>
                        abonne !== undefined ? (
                            <Picker.Item
                                label={abonne.prenom + ' ' + abonne.nom}
                                value={String(abonne.id)}
                                key={abonne.id.toString()} // Assurez-vous que la clé est une chaîne unique
                            />
                        ) : null
                    )}
                </Picker>
            </View>
            <View>
                <ProfileScreen abonne={selectAbonne} />
            </View>
            <Button
                title="Home"
                onPress={() => navigation.navigate('Home')}
            />
        </>
    );
};


