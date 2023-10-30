import { Image, Title } from '@/Common';
import { useGamesContext } from '@/hooks';

export default function Banner() {
  const { allGamesList } = useGamesContext();

  return (
    <div className="relative">
      <div className="absolute bottom-0 p-5 bg-gradient-to-t from-slate-900 to-transparent w-full ">
        <Title className="text-[24px] text-white font-bold">
          {allGamesList[0].name}
        </Title>
        <button className="bg-blue-700 rounded-xl text-white px-2 p-1">
          Get Now
        </button>
      </div>
      <Image
        url={allGamesList[0].background_image}
        className="md:h-[320] w-full object-cover rounded-xl"
      />
    </div>
  );
}
