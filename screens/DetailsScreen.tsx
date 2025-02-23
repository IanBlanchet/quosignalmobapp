import * as React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button } from 'react-native';
import { styles } from '../styles/generalstyles';



function DetailsScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Text>Details Screen</Text>
      <Button
        title="Go back"
        onPress={() => navigation.goBack()}
      />
      <StatusBar style="auto" />
    </View>
  );
}

export default DetailsScreen;