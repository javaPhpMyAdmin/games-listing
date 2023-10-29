import { Image, Title } from '@/Common';

export default function GenreGame({
  item,
  index,
  handleGenreClick,
  activeIndex,
}) {
  return (
    <div
      onClick={() => handleGenreClick(item.id, item.name, index)}
      key={item.id}
      className={`flex gap-2 items-center mb-2 cursor-pointer hover:bg-gray-300 p-2 group rounded-lg hover:dark:bg-gray-600 ${
        activeIndex === index ? 'bg-gray-300 dark:bg-gray-600' : null
      }`}
    >
      <Image
        url={item.image_background}
        className={`w-[40px] h-[40px] object-cover rounded-lg group-hover:scale-105 transition-all ease-out duration-300 ${
          activeIndex === index ? 'group-hover:scale-105 ' : null
        }`}
      />
      <Title
        className={`dark:text-white text-[18px] font-extralight group-hover:font-extrabold transition-all ease-out duration-300 ${
          activeIndex === index ? 'group-hover:font-extrabold' : null
        }`}
      >
        {item.name}
      </Title>
    </div>
  );
}
