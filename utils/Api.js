import axios from 'axios';

export default class Api {
    static key = process.env.EXPO_PUBLIC_FIREBASE_KEY;
    static apiUrl = process.env.EXPO_PUBLIC_API_URL;

    static async get(endpoint, params = {}) {
        try {
            const data = await axios.get(`${this.apiUrl}/${endpoint}.json`, {
                params: {
                    ...params,
                    key: this.key
                },
            });
            return data.data;
        } catch (e) {
            console.log(`Error while fetching from ${endpoint}:: ${e}`)
        }
    }
}