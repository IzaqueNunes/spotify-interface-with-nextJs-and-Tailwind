import Image from "next/image";

import { SMALL_CARD_DATA as data } from "../utils/fakeBD";

export function SmallCard() {
  return (
    <div className="grid grid-cols-3 gap-8">
      {data.map((item) => (
        <div
          key={item.id}
          className="h-[100px] bg-[#303030] rounded-md flex cursor-pointer hover:bg-zinc-800"
        >
          <div className="w-[100px] h-[100px]">
            <Image src={item.image} alt="cover" />
          </div>
          <div className="flex items-center px-6">
            <h2 className="font-semibold text-lg">{item.name}</h2>
          </div>
        </div>
      ))}
    </div>
  );
}
