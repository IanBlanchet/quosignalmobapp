import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button } from 'react-native';
import { styles } from '../styles/generalstyles';

function HomeScreen({ navigation }) {
    return (
      <View style={styles.container}>
        <Text>Home Screen</Text>
        <Button
          title="Go to Details"
          onPress={() => navigation.navigate('Details')}
        />
        <Button
          title="Go to Abonne"
          onPress={() => navigation.navigate('Abonne')}
        />
        <StatusBar style="auto" />
      </View>
    );
  }

export default HomeScreen;