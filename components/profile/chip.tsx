import React from 'react';
import { View, Image } from 'react-native';
import { Button, Card, Title, Paragraph, Text, Chip } from 'react-native-paper';
import { styles } from '../../styles/generalstyles';

const StatutChip = ({statut}) => (
    <Chip style={styles.chip}>{statut?"Actif":"inactif"}</Chip>
  );
  
  export default StatutChip;