import axios from 'axios';

const API_KEY = '572c7f637488492d8033c77f1e6a727a';

export const axiosApi = axios.create({
  baseURL: 'https://api.rawg.io/api',
});

const getGenreList = axiosApi.get('/genres?key=' + API_KEY);

const getAllGames = axiosApi.get('/games?key=' + API_KEY);

export default {
  getGenreList,
  getAllGames,
};
