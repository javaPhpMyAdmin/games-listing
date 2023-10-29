import { Title } from '@/Common';
import { TrendingCard } from '@/Components';

export default function TrendingGames({ gamesList }) {
  return (
    <div className="mt-5 hidden md:block">
      <Title className="ml-2 font-bold text-[20px] dark:text-white">
        Trending Games
      </Title>
      <div className="hidden md:grid md:grid-cols-3 lg:grid-cols-4 px-3 gap-3 mt-5">
        {gamesList.map(
          (item, index) =>
            index < 4 && <TrendingCard key={item.id} item={item} />,
        )}
      </div>
    </div>
  );
}
