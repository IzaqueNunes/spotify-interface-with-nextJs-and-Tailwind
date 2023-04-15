import { BiggerCardProps, SmallCardProps } from "../types";

import LikedSongsCover from "../assets/images/liked-songs-cover.png";
import NeffexCover from "../assets/images/neffex-cover.png";
import KDACover from "../assets/images/kda-cover.png";
import NewHitsCover from "../assets/images/new-hits-cover.png";
import EletronicCover from "../assets/images/eletronic-cover.png";

import WeeklyCover from "../assets/images/weeklyCover.png";
import MeditationCover from "../assets/images/meditationCover.png";
import AlexaCover from "../assets/images/alexaCover.png";
import StoriesCover from "../assets/images/storiesCover.png";
import MotivationCover from "../assets/images/motivationCover.png";
import WordsCover from "../assets/images/wordsCover.png";

export const SMALL_CARD_DATA: SmallCardProps[] = [
  {
    id: "0",
    name: "Liked Songs",
    image: LikedSongsCover,
  },
  {
    id: "1",
    name: "Neffex Playlist",
    image: NeffexCover,
  },
  {
    id: "2",
    name: "K/ DA",
    image: KDACover,
  },
  {
    id: "3",
    name: "New Hits",
    image: NewHitsCover,
  },
  {
    id: "4",
    name: "Electronic Mix",
    image: EletronicCover,
  },
];

export const LARGE_CARD_DATA: BiggerCardProps[] = [
  {
    id: "0",
    name: "Weekly Motivatio...",
    singer: "Ben Ina Scott",
    image: WeeklyCover,
  },
  {
    id: "1",
    name: "MEDITATION SELF",
    singer: "Ibn Hussain Aleen",
    image: MeditationCover,
  },
  {
    id: "2",
    name: "Words beyond act...",
    singer: "Samuel Scott",
    image: AlexaCover,
  },
  {
    id: "3",
    name: "The Alexa Show",
    singer: "Adriana Tom",
    image: StoriesCover,
  },
  {
    id: "4",
    name: "The Stories of Ma...",
    singer: "Lexus",
    image: MotivationCover,
  },
  {
    id: "5",
    name: "Motivation Daily b...",
    singer: "Georgina Martha",
    image: WordsCover,
  },
  {
    id: "6",
    name: "The Alexa Show",
    singer: "Adriana Tom",
    image: StoriesCover,
  },
  {
    id: "7",
    name: "The Stories of Ma...",
    singer: "Lexus",
    image: MotivationCover,
  },
];
