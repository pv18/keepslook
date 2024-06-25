import axios from 'axios';
const AUTH_URL = process.env.REACT_APP_BASE_URL;

export const instance = axios.create({
    baseURL: AUTH_URL,
    timeout: 10 * 1000,
    headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
});
