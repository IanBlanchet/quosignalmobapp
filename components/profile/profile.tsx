import React from 'react';
import { View, StyleSheet } from 'react-native';
import { Card, Title, Paragraph, Text } from 'react-native-paper';
import { styles } from '../../styles/generalstyles';
import StatutChip from './chip';

const formatPhoneNumber = (phoneNumberString) => {
  const cleaned = ('' + phoneNumberString).replace(/\D/g, '');
  const match = cleaned.match(/^(\d{3})(\d{3})(\d{4})$/);
  if (match) {
    return `(${match[1]}) ${match[2]}-${match[3]}`;
  }
  return phoneNumberString;
};


const ProfileScreen = (props) => {
  return (
    <View style={styles.container}>
      <Card style={styles.card}>
        <Card.Content>
          <View style={styles.header}>
            <Card.Title title={props.abonne.prenom + " " + props.abonne.nom} style={styles.title} titleVariant='titleLarge' />
          </View>
          <View style={styles.infoContainer}>
            <Text style={styles.infoLabel}>Téléphone: </Text>
            <Text style={styles.infoValue}>{formatPhoneNumber(props.abonne.telephone)}</Text>
          </View>
          <View style={styles.infoContainer}>
            <Text style={styles.infoLabel}>Adresse: </Text>
            <Text style={styles.infoValue}>{props.abonne.adresse}</Text>
          </View>
          <View style={styles.infoContainer}>
            <Text style={styles.infoLabel}>Ville: </Text>
            <Text style={styles.infoValue}>{props.abonne.ville}</Text>
          </View>
          <View style={styles.chipContainer}>
            <StatutChip statut={props.abonne.actif}  />
          </View>
        </Card.Content>
      </Card>
    </View>
  );
};

export default ProfileScreen;

