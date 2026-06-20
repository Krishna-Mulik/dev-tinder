import axios from 'axios';
import { BACKEND_PORT } from '../config';

export const axiosDevBackend = axios.create({
    baseURL: BACKEND_PORT + '/api/v1/'
});
