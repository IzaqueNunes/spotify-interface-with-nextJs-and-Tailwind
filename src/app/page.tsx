/* eslint-disable react/no-unescaped-entities */
import Image from "next/image";

import HomeIcon from "../app/assets/icons/home.svg";
import SearchIcon from "../app/assets/icons/search.svg";
import LibraryIcon from "../app/assets/icons/library.svg";
import PlaylistIcon from "../app/assets/icons/createPlaylist.svg";
import LikedIcon from "../app/assets/icons/likedSongs.svg";
import BackIcon from "../app/assets/icons/backIcon.svg";
import NextIcon from "../app/assets/icons/nextIcon.svg";
import { SmallCard } from "./components/smallCard";
import { MenuCard } from "./components/menuCard";
import { BiggerCard } from "./components/biggerCard";
import { Footer } from "./components/footer";

export default function Home() {
  return (
    <div className="h-screen flex flex-col">
      <div className="flex flex-1">
        <aside className="w-72 bg-zinc-950 p-6">
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 bg-red-500 rounded-full" />
            <div className="w-3 h-3 bg-yellow-500 rounded-full" />
            <div className="w-3 h-3 bg-green-500 rounded-full" />
          </div>
          <nav className="space-y-5 mt-10">
            <a
              href=""
              className="flex items-center gap-3 text-sm font-semibold text-zinc-200 hover:text-zinc-400"
            >
              {" "}
              <Image alt="home" src={HomeIcon} />
              Home
            </a>
            <a
              href=""
              className="flex items-center gap-3 text-sm font-semibold text-zinc-200 hover:text-zinc-400"
            >
              <Image alt="home" src={SearchIcon} />
              Search
            </a>
            <a
              href=""
              className="flex items-center gap-3 text-sm font-semibold text-zinc-200 hover:text-zinc-400"
            >
              <Image alt="home" src={LibraryIcon} />
              Your Library
            </a>
          </nav>

          <nav className="space-y-5 mt-10">
            <a
              href=""
              className="flex items-center gap-3 text-sm font-semibold text-zinc-200 hover:text-zinc-400"
            >
              <Image alt="home" src={PlaylistIcon} />
              Create Playlist
            </a>
            <a
              href=""
              className="flex items-center gap-3 text-sm font-semibold text-zinc-200 hover:text-zinc-400"
            >
              <Image alt="home" src={LikedIcon} />
              Liked Songs
            </a>
          </nav>

          <nav className="mt-6 pt-6 border-t border-zinc-700 flex flex-col gap-3">
            <a href="" className="text-sm text-zinc-400 hover:text-zinc-100">
              Orquestra Hymns CCB
            </a>
            <a href="" className="text-sm text-zinc-400 hover:text-zinc-100">
              Rádio de Victor & Leo
            </a>
            <a href="" className="text-sm text-zinc-400 hover:text-zinc-100">
              Pop Music 2023
            </a>
            <a href="" className="text-sm text-zinc-400 hover:text-zinc-100">
              This Is Skank
            </a>
            <a href="" className="text-sm text-zinc-400 hover:text-zinc-100">
              Rádio de Marília Mendonça
            </a>
            <a href="" className="text-sm text-zinc-400 hover:text-zinc-100">
              Track List Doramas
            </a>
            <a href="" className="text-sm text-zinc-400 hover:text-zinc-100">
              Today's Top Hits
            </a>
            <a href="" className="text-sm text-zinc-400 hover:text-zinc-100">
              Throwback Party
            </a>
            <a href="" className="text-sm text-zinc-400 hover:text-zinc-100">
              Rádio de Billie Eilish
            </a>
            <a href="" className="text-sm text-zinc-400 hover:text-zinc-100">
              Rádio de Eminem
            </a>
            <a href="" className="text-sm text-zinc-400 hover:text-zinc-100">
              This Is BTS
            </a>
            <a href="" className="text-sm text-zinc-400 hover:text-zinc-100">
              This Is Ed Sherran
            </a>
          </nav>
        </aside>
        <main className="flex-1 p-6">
          <div className="flex justify-between">
            <div className="flex items-center gap-4">
              <button>
                <Image src={BackIcon} alt="button" width={40} />
              </button>
              <button>
                <Image src={NextIcon} alt="button" width={40} />
              </button>
            </div>
            <div>
              <MenuCard />
            </div>
          </div>

          <h1 className="font-bold text-4xl mt-8">Good morning</h1>

          <div className="py-6">
            <SmallCard />
          </div>

          <div className="flex items-center  mt-8 justify-between">
            <h1 className="font-bold text-2xl">Shows you might like</h1>
            <h3 className="text-zinc-300 font-medium">SEE ALL</h3>
          </div>

          <div className="py-6">
            <BiggerCard />
          </div>
        </main>
      </div>
    </div>
  );
}
