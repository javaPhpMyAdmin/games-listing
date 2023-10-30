import { Title } from '@/Common';
import { GenreGameByIdCard } from '@/Components';
import { useGamesContext } from '@/hooks';

export default function GamesByGenresId() {
  const { gameListByGenres, selectedGenresName } = useGamesContext();
  return (
    <div className="mt-5 ">
      <Title className="ml-2 font-bold text-[30px] dark:text-white">
        {selectedGenresName === 'Board Games'
          ? selectedGenresName.split(' ')[0]
          : selectedGenresName}{' '}
        Games
      </Title>
      <div className="grid grid-cols-1  md:grid-cols-2 lg:grid-cols-3 px-3 gap-6 mt-5">
        {gameListByGenres?.map((game) => {
          return <GenreGameByIdCard key={game.id} game={game} />;
        })}
      </div>
    </div>
  );
}
