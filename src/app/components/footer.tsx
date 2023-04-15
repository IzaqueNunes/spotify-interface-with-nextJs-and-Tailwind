import Image from "next/image";

import MiniCover from "../assets/images/miniCover.png";
import LikedIcon from "../assets/icons/liked.svg";
import play from "../assets/icons/play.svg";
import next from "../assets/icons/next.svg";
import back from "../assets/icons/back.svg";
import random from "../assets/icons/random.svg";
import loop from "../assets/icons/loop.svg";
import slider from "../assets/icons/slider.svg";

import Mic from "../assets/icons/mic.svg";
import playlist from "../assets/icons/playlist.svg";
import desktop from "../assets/icons/desktop.svg";
import speaker from "../assets/icons/speaker.svg";
import sliderVol from "../assets/icons/sliderVol.svg";
import expand from "../assets/icons/expand.svg";

export function Footer() {
  return (
    <div className="absolute flex -bottom-2 h-[112px] w-full bg-zinc-800 border-t border-zinc-700 p-2 items-center">
      <div className="flex items-center ">
        <Image src={MiniCover} alt="cover" width={70} />
        <div className="flex flex-col px-6">
          <h1 className="font-medium">Dreaming On</h1>
          <h2 className="text-zinc-300">NEFFEX</h2>
        </div>
        <Image src={LikedIcon} alt="liked" />
      </div>

      <div className="flex flex-col items-center space-y-5 flex-1">
        <div className="flex ml-8 space-x-8">
          <Image src={random} alt="liked" />
          <Image src={back} alt="liked" />
          <Image src={play} alt="liked" />
          <Image src={next} alt="liked" />
          <Image src={loop} alt="liked" />
        </div>

        <div className=" flex space-x-4">
          <h3 className="text-sm text-zinc-300">2:11</h3>
          <Image src={slider} alt="liked" />
          <h3 className="text-sm text-zinc-300">2:42</h3>
        </div>
      </div>

      <div>
        <div className="flex ml-8 space-x-8">
          <Image src={Mic} alt="liked" />
          <Image src={playlist} alt="liked" />
          <Image src={desktop} alt="liked" />
          <Image src={speaker} alt="liked" />
          <Image src={sliderVol} alt="liked" />
          <Image src={expand} alt="liked" />
        </div>
      </div>
    </div>
  );
}
