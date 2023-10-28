import { useEffect } from 'react';
import {
  Banner,
  GamesByGenresId,
  GenreList,
  TrendingGames,
} from '@/Components';
import GlobalApi from '@/Services/GlobalApi';
import { useState } from 'react';

export default function Home() {
  const [allGamesList, setAllGamesList] = useState([]);
  const [gameListByGenres, setGameListByGenres] = useState([]);
  const [selectedGenresName, setGenresName] = useState('Action');

  const getAllGamesList = () => {
    GlobalApi.getAllGames.then((res) => setAllGamesList(res.data.results));
  };

  const getGameListById = (id) => {
    GlobalApi.getGameListByGenreId(id).then((res) => {
      setGameListByGenres(res.data.results);
    });
  };

  const handleSetterGenreById = (id) => {
    getGameListById(id);
  };

  const handleSelectedName = (name) => {
    setGenresName(name);
  };

  useEffect(() => {
    getAllGamesList();
    getGameListById(4);
  }, []);

  return (
    <div className="grid grid-cols-4 p-2">
      <div className="hidden md:block">
        <GenreList
          genreId={handleSetterGenreById}
          handleSelectedName={handleSelectedName}
        />
      </div>
      <div className="col-span-4 md:col-span-3">
        {allGamesList?.length > 0 && gameListByGenres.length > 0 ? (
          <div>
            <Banner gameBanner={allGamesList[10]} />
            <TrendingGames gamesList={allGamesList} />
            <GamesByGenresId
              gameListByGenres={gameListByGenres}
              selectedGenresName={selectedGenresName}
            />
          </div>
        ) : null}
      </div>
    </div>
  );
}
