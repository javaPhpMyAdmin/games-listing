export default function TrendingGames({ gamesList }) {
  return (
    <div className="mt-5">
      <h2 className="font-bold text-[20px] dark:text-white">Trending Games</h2>
      <div className="hidden md:grid md:grid-cols-3 lg:grid-cols-4 px-3 gap-3">
        {gamesList.map(
          (item, index) =>
            index < 4 && (
              <div key={item.id} className="bg-[#76a8f75e] rounded-lg">
                <img
                  src={item.background_image}
                  className="h-[270px] rounded-lg object-cover"
                />
                <h2 className="dark:text-white text-[20px] font-bold p-2">
                  {item.name}
                </h2>
              </div>
            ),
        )}
      </div>
    </div>
  );
}
