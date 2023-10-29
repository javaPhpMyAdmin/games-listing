import { Image, Title } from '@/Common';

export default function Banner({ gameBanner }) {
  return (
    <div className="relative">
      <div className="absolute bottom-0 p-5 bg-gradient-to-t from-slate-900 to-transparent w-full ">
        <Title className="text-[24px] text-white font-bold">
          {gameBanner.name}
        </Title>
        <button className="bg-blue-700 rounded-xl text-white px-2 p-1">
          Get Now
        </button>
      </div>
      <Image
        url={gameBanner.background_image}
        className="md:h-[320] w-full object-cover rounded-xl"
      />
    </div>
  );
}
