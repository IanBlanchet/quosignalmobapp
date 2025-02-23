import AsyncStorage from '@react-native-async-storage/async-storage';
import { REACT_APP_URI } from '@env';
import { getToken } from './auth';

const domain = REACT_APP_URI;

export const getRessources = async (url: string, params = {}, objects = {}, method = 'GET') => {
    const myHeaders = new Headers();
    const token = await getToken();
    
    if (token) {
        myHeaders.append('Authorization', `Bearer ${token}`);
    } else  {
        // Gestion des erreurs pour les tokens expirés ou non autorisés
        console.error('Unauthorized:', 'No token found');
        // Vous pouvez également ajouter une logique pour rafraîchir le token ici
    }

    let options = {
        method,
        headers: myHeaders,
        'Content-Type': 'application/json;charset=utf-8',
    };

    try {
        let response = await fetch(domain + url, options);

        if (response.ok) {
            return await response.json();
        } else {
            const errorResponse = await response.json();
            if (response.status === 400) {
                // Gestion des erreurs pour les tokens invalides
                console.error('Invalid token:', errorResponse);
                return errorResponse;
            } else if (response.status === 401) {
                // Gestion des erreurs pour les tokens expirés ou non autorisés
                console.error('Unauthorized:', errorResponse);
                // Vous pouvez également ajouter une logique pour rafraîchir le token ici
                return errorResponse;
            } else {
                console.error('Error:', errorResponse);
                return errorResponse;
            }
        }
    } catch (error) {
        console.error('Fetch error:', error);
        throw error;
    }
};