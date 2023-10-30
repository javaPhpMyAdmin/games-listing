import React from 'react';
import { GamesContext } from '@/Context';
import { useGameList } from '@/hooks';

export const GamesProvider = ({ children }) => {
  const [selectedGenresName, setGenresName] = React.useState('Action');
  const { allGamesList, genres, gameListByGenres, getGameListById } =
    useGameList();

  const handleSelectedName = (name) => {
    setGenresName(name);
  };

  const handleSetterGenreById = (id) => {
    getGameListById(id);
  };

  return (
    <GamesContext.Provider
      value={{
        allGamesList,
        handleSelectedName,
        gameListByGenres,
        selectedGenresName,
        handleSetterGenreById,
        genres,
      }}
    >
      {children}
    </GamesContext.Provider>
  );
};
