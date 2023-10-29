import { Image, Title } from '@/Common';

export default function GenreGameByIdCard({ game }) {
  return (
    <div
      key={game.id}
      className="bg-[#76a8f75e] p-3 rounded-lg pb-12 h-full hover:scale-110 transition-all duration-500 cursor-pointer ease-in-out"
    >
      <Image
        url={game.background_image}
        className="w-full h-[80%] object-cover rounded-lg"
      />
      <Title className="text-[20px] dark:text-white font-bold">
        {game.name}
        <span className="p-1 rounded-sm ml-2 text-[10px] bg-green-100 text-green-700 font-medium">
          {game.metacritic}
        </span>
      </Title>
      <Title className="text-gray-500 dark:text-gray-300">
        ⭐ {game.rating} 💬 {game.reviews_count}
        🔥 {game.suggestions_count}
      </Title>
    </div>
  );
}
