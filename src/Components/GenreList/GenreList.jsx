import { useEffect, useState } from 'react';
import GlobalApi from '@/Services/GlobalApi';

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
      <h2 className="text-[30px] font-bold dark:text-white">
        {genres.map((item, index) => (
          <div
            onClick={() => handleGenreClick(item.id, item.name, index)}
            key={item.id}
            className={`flex gap-2 items-center mb-2 cursor-pointer hover:bg-gray-300 p-2 group rounded-lg hover:dark:bg-gray-600 ${
              activeIndex === index ? 'bg-gray-300 dark:bg-gray-600' : null
            }`}
          >
            <img
              src={item.image_background}
              className={`w-[40px] h-[40px] object-cover rounded-lg group-hover:scale-105 transition-all ease-out duration-300 ${
                activeIndex === index ? 'group-hover:scale-105 ' : null
              }`}
            />
            <h3
              className={`dark:text-white text-[18px] font-extralight group-hover:font-extrabold transition-all ease-out duration-300 ${
                activeIndex === index ? 'group-hover:font-extrabold' : null
              }`}
            >
              {item.name}
            </h3>
          </div>
        ))}
      </h2>
    </div>
  );
}
