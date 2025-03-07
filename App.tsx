import * as React from 'react';
import { useEffect, useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button } from 'react-native';
import { styles } from './styles/generalstyles';
import HomeScreen  from './screens/Home'
import DetailsScreen from './screens/DetailsScreen'
import { getToken } from './auth';
import LoginScreen from './screens/LoginScreen';
import AbonneScreen from './screens/abonnes';
import AddAbonneScreen from './screens/addAbonne';

const Stack = createNativeStackNavigator();




export default function App() {
  const [initialRoute, setInitialRoute] = useState('LoginScreen');

  useEffect(() => {
    const checkToken = async () => {
      const token = await getToken();
      if (token) {
        setInitialRoute('Home');
      } else {
        setInitialRoute('LoginScreen');
      }
    };

    checkToken();
  }, []);


  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="LoginScreen">
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Details" component={DetailsScreen} />
        <Stack.Screen name="LoginScreen" component={LoginScreen} />
        <Stack.Screen name="Abonnes" component={AbonneScreen} />
        <Stack.Screen name="AddAbonne" component={AddAbonneScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
