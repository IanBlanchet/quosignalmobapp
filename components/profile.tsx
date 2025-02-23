import React from 'react';
import { View, Text, Image } from 'react-native';
import { styles } from '../styles/generalstyles'

const ProfileScreen = (props) => {
  return (
    <View style={styles.container}>
      
      <Image
        source={{ uri: 'https://www.bootdey.com/image/900x400/FF7F50/000000' }}
        style={styles.coverImage}
      />
      <View style={styles.avatarContainer}>
        <Image
          source={{ uri: 'https://www.bootdey.com/img/Content/avatar/avatar1.png' }}
          style={styles.avatar}
        />
        <Text style={[styles.name]}>{props.abonne.prenom + ' ' + props.abonne.nom}</Text>
      </View>
      
      <View style={styles.content}>
        <View style={styles.infoContainer}>
          
          <Text style={styles.infoLabel}>Téléphone</Text>
          <Text style={styles.infoValue}>{props.abonne.telephone}</Text>
        </View>
        <View style={styles.infoContainer}>
          <Text style={styles.infoLabel}>Ville</Text>
          <Text style={styles.infoValue}>{props.abonne.ville}</Text>
        </View>
        <View style={styles.infoContainer}>
          <Text style={styles.infoLabel}>Heure</Text>
          <Text style={styles.infoValue}>{props.abonne.heure}</Text>
        </View>
        <View style={styles.infoContainer}>
          <Text style={styles.infoLabel}>Email</Text>
          <Text style={styles.infoValue}>{props.abonne.email}</Text>
        </View>
      </View>
    </View>
  );
};

export default ProfileScreen;

