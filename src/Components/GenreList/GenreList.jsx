import { useState } from 'react';
import { GenreGameCard } from '@/Components';
import { Title } from '@/Common';
import { useGamesContext } from '@/hooks';

export default function GenreList() {
  const [activeIndex, setActiveIndex] = useState(0);
  const { handleSetterGenreById, handleSelectedName, genres } =
    useGamesContext();

  const handleGenreClick = (id, name, index) => {
    setActiveIndex(index);
    handleSetterGenreById(id);
    handleSelectedName(name);
  };

  return (
    <div>
      <Title className="text-[30px] font-bold dark:text-white">Genres</Title>

      {genres.map((item, index) => (
        <GenreGameCard
          key={item.id}
          index={index}
          item={item}
          activeIndex={activeIndex}
          handleGenreClick={handleGenreClick}
        />
      ))}
    </div>
  );
}
