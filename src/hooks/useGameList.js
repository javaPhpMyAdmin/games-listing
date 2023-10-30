import GlobalApi from '@/Services/GlobalApi';
import React from 'react';

export default function useGameList() {
  const [allGamesList, setAllGamesList] = React.useState([]);
  const [genres, setGenres] = React.useState([]);
  const [gameListByGenres, setGameListByGenres] = React.useState([]);

  const getAllGamesList = () => {
    GlobalApi.getAllGames().then((res) => setAllGamesList(res.data.results));
  };

  const getGenreListHeader = () => {
    GlobalApi.getGenreList().then((res) => {
      setGenres(res.data.results);
    });
  };

  const getGameListById = (id) => {
    GlobalApi.getGameListByGenreId(id).then((res) => {
      setGameListByGenres(res.data.results);
    });
  };

  React.useEffect(() => {
    getAllGamesList();
    getGenreListHeader();
    getGameListById(10);
  }, []);

  return {
    allGamesList,
    genres,
    gameListByGenres,
    getGameListById,
  };
}
