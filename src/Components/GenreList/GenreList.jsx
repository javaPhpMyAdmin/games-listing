import { useEffect } from 'react';
import GlobalApi from '../../Services/GlobalApi';
import { useState } from 'react';

export default function GenreList() {
  const [genres, setGenres] = useState([]);
  const [activeIndex, setActiveIndex] = useState(0);

  const getGenreListHeader = () => {
    GlobalApi.getGenreList.then((res) => {
      setGenres(res.data.results);
    });
  };

  const handleGenreClick = (index) => {
    setActiveIndex(index);
  };

  useEffect(() => {
    getGenreListHeader();
  }, []);

  return (
    <div>
      <h2 className="text-[30px] font-bold dark:text-white">
        {genres.map((item, index) => (
          <div
            onClick={() => handleGenreClick(index)}
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
