import { Image } from '@/Common';

export default function TrendingCard({ item }) {
  return (
    <div
      key={item.id}
      className="bg-[#76a8f75e] rounded-lg group hover:scale-110 transition-all duration-300 ease-in-out cursor-pointer"
    >
      <Image
        url={item.background_image}
        className="h-[270px] rounded-t-lg object-cover"
      />
      <h2 className="dark:text-white text-[20px] font-bold p-2">{item.name}</h2>
    </div>
  );
}
