import axios from 'axios';

const APP_ID = 'XxADzklnTkRWXlOgSbjV';
export const API_URL = `https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/${APP_ID}/books`;

export default axios.create({
  baseURL: API_URL,
});
