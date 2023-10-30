import {
  Banner,
  GamesByGenresId,
  GenreList,
  TrendingGames,
} from '@/Components';
import { useGamesContext } from '@/hooks';

export default function Home() {
  const { allGamesList, gameListByGenres } = useGamesContext();

  return (
    <main className="grid grid-cols-4 p-2 gap-3">
      <div className="hidden md:block">
        <GenreList />
      </div>
      <div className="col-span-4 md:col-span-3">
        {allGamesList?.length > 0 && gameListByGenres.length > 0 ? (
          <div>
            <Banner />
            <TrendingGames />
            <GamesByGenresId />
          </div>
        ) : null}
      </div>
    </main>
  );
}
