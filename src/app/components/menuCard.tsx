import Image from "next/image";

import UserIcon from "../assets/images/new-hits-cover.png";
import ArrowDownIcon from "../assets/icons/arrowDown.svg";
import AccountIcon from "../assets/icons/accountIcon.svg";

export function MenuCard() {
  return (
    <div>
      <div className="w-32 h-10 rounded-3xl flex justify-between bg-zinc-950 cursor-pointer hover:bg-zinc-800">
        <div className="p-1 h-10 w-10">
          <Image src={UserIcon} alt="user" className="flex rounded-full" />
        </div>
        <div className="p-2 flex items-center space-x-4">
          <h4 className="text-sm font-bold">Izaque</h4>
          <Image src={ArrowDownIcon} alt="arrow" />
        </div>
      </div>

      <div className=" absolute w-36 bg-zinc-800 rounded-lg mt-2">
        <ul className="space-y-2">
          <li className="p-2 flex justify-between items-center hover:bg-zinc-950 cursor-pointer">
            <h1 className="font-semibold">Account</h1>
            <Image src={AccountIcon} alt="arrowup" width={15} />
          </li>
          <li className="p-2 flex justify-between items-center hover:bg-zinc-950 cursor-pointer">
            <h1 className="font-semibold">Profile</h1>
          </li>
          <li className="p-2 flex justify-between items-center hover:bg-zinc-950 cursor-pointer">
            <h1 className="font-semibold">Log out</h1>
          </li>
        </ul>
      </div>
    </div>
  );
}
