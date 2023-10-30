import axios from 'axios';
import { config } from '@/Config';

export const axiosApi = axios.create({
  baseURL: config.BASE_URL,
});
