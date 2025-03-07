import React, { useState, useEffect } from 'react';
import { View, ScrollView } from 'react-native';
import { Button, Menu, Provider } from 'react-native-paper';
import { getRessources } from '../apiCall';
import ProfileScreen from '../components/profile/profile';
import { styles } from '../styles/generalstyles';

export default function AbonneScreen({ navigation }) {
    const [abonnes, setAbonnes] = useState([]);
    const [selectAbonne, setSelectAbonne] = useState({});
    const [visible, setVisible] = useState(false);

    const openMenu = () => setVisible(true);
    const closeMenu = () => setVisible(false);

    const onSelectAbonne = (id) => {
        
        const abonne = abonnes.find(element => element.id === parseInt(id));
        setSelectAbonne(abonne);
        closeMenu();
    };

    useEffect(() => {
        getRessources('/api/v1/centre/').then(
            lescentres => {
                const CAB = lescentres.find(element => element.id === 1);
                const lesabonnes = CAB.abonnes;
                
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
        <Provider>
            <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
                <View style={styles.picker}>
                    <Menu
                        visible={visible}
                        onDismiss={closeMenu}
                        anchor={<Button onPress={openMenu}>Choisir un abonne</Button>}
                    >
                        {abonnes.map((abonne, index) =>
                            abonne !== undefined ? (
                                <Menu.Item
                                    onPress={() => onSelectAbonne(abonne.id)}
                                    title={abonne.prenom + ' ' + abonne.nom}
                                    key={index.toString()}
                                />
                            ) : null
                        )}
                    </Menu>
                </View>
                <View style={{ flex: 1 }}>
                    <ProfileScreen abonne={selectAbonne} />

                </View>
                <View style={{ padding: 16 }}>
                    <Button
                        mode="contained"
                        onPress={() => navigation.navigate('AddAbonne')}
                    >
                        Ajouter un abonne
                    </Button>
                </View>
             
         
            </ScrollView>
        </Provider>
    );
}


