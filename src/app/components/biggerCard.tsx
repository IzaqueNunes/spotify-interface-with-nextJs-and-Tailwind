import Image from "next/image";

import { LARGE_CARD_DATA as data } from "../utils/fakeBD";

export function BiggerCard() {
  return (
    <div className="flex space-x-8 overscroll-auto">
      {data.map((item) => (
        <div
          key={item.id}
          className="bg-zinc-800 w-56 space-y-6 p-4  flex flex-col "
        >
          <div className="flex items-center justify-center">
            <Image src={item.image} alt="cover" width={200} />
          </div>
          <div className="flex flex-col text-left">
            <h2 className="text-xl font-semibold">{item.name}</h2>
            <h3 className="font-light text-zinc-300 mt-2">{item.singer}</h3>
          </div>
        </div>
      ))}
    </div>
  );
}
