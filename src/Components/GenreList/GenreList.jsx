import { useEffect, useState } from 'react';
import GlobalApi from '@/Services/GlobalApi';
import { GenreGameCard } from '@/Components';
import { Title } from '@/Common';

export default function GenreList({ genreId, handleSelectedName }) {
  const [genres, setGenres] = useState([]);
  const [activeIndex, setActiveIndex] = useState(0);

  const handleGenreClick = (id, name, index) => {
    setActiveIndex(index);
    genreId(id);
    handleSelectedName(name);
  };

  const getGenreListHeader = () => {
    GlobalApi.getGenreList.then((res) => {
      setGenres(res.data.results);
    });
  };

  useEffect(() => {
    getGenreListHeader();
  }, []);

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
