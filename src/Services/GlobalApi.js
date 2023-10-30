import { axiosApi } from '@/HttpClient';
import { config } from '@/Config';

const URL_SUFIJO = '?key=';

const getGenreList = () =>
  axiosApi.get(`${config.API_ROUTES.GENRES}${URL_SUFIJO}` + config.API_KEY);

const getAllGames = () =>
  axiosApi.get(`${config.API_ROUTES.GAMES}${URL_SUFIJO}` + config.API_KEY);

const getGameListByGenreId = (id) =>
  axiosApi.get(
    `${config.API_ROUTES.GAMES}${URL_SUFIJO}` +
      config.API_KEY +
      '&genres=' +
      id,
  );

export default {
  getGenreList,
  getAllGames,
  getGameListByGenreId,
};
