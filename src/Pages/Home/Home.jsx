import { useEffect } from 'react';
import { Banner, GenreList, TrendingGames } from '@/Components';
import GlobalApi from '@/Services/GlobalApi';
import { useState } from 'react';

export default function Home() {
  const [allGamesList, setAllGamesList] = useState([]);

  const getAllGamesList = () => {
    GlobalApi.getAllGames.then((res) => setAllGamesList(res.data.results));
  };

  useEffect(() => {
    getAllGamesList();
  }, []);

  return (
    <div className="grid grid-cols-4 p-2">
      <div className="hidden md:block">
        <GenreList />
      </div>
      <div className="col-span-4 md:col-span-3">
        {allGamesList?.length > 0 ? (
          <div>
            <Banner gameBanner={allGamesList[10]} />
            <TrendingGames gamesList={allGamesList} />
          </div>
        ) : null}
        {/* {allGamesList.map((game) => (
          <div key={game.id}>
            <img src={game.background_image} />
          </div>
        ))} */}
      </div>
    </div>
  );
}
