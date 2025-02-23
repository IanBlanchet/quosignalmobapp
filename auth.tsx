// filepath: /home/ian/appPerso/quosignalMobile/auth.tsx
import AsyncStorage from '@react-native-async-storage/async-storage';
import { REACT_APP_URI } from '@env';

const domain = REACT_APP_URI;


export const login = async (username: string, password: string) => {
    const response = await fetch(`${domain}/api/v1/token`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: new URLSearchParams({
            'username': username,
            'password': password
        }).toString(),
    });
    const data = await response.json(); 
    
    if (response.ok) {
        await AsyncStorage.setItem('token', data.access_token);
    }
    return data;
};

export const getToken = async () => {
    return await AsyncStorage.getItem('token');
};