export default function GamesByGenresId({
  gameListByGenres,
  selectedGenresName,
}) {
  return (
    <div className="mt-5 ">
      <h2 className="ml-2 font-bold text-[30px] dark:text-white">
        {selectedGenresName} Games
      </h2>
      <div className="grid grid-cols-1  md:grid-cols-2 lg:grid-cols-3 px-3 gap-6 mt-5">
        {gameListByGenres?.map((game) => {
          return (
            <div
              key={game.id}
              className="bg-[#76a8f75e] p-3 rounded-lg pb-12 h-full hover:scale-110 transition-all duration-500 cursor-pointer ease-in-out"
            >
              <img
                src={game.background_image}
                className="w-full h-[80%] object-cover rounded-lg"
              />
              <h2 className="text-[20px] dark:text-white font-bold">
                {game.name}
                <span className="p-1 rounded-sm ml-2 text-[10px] bg-green-100 text-green-700 font-medium">
                  {game.metacritic}
                </span>
              </h2>
              <h2 className="text-gray-500 dark:text-gray-300">
                ⭐ {game.rating} 💬 {game.reviews_count}
                🔥 {game.suggestions_count}
              </h2>
            </div>
          );
        })}
      </div>
    </div>
  );
}
