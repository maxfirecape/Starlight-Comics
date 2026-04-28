import { ComicPage } from '../../types';

export const p0001_p0100: ComicPage[] = [
  {
    id: "0001",
    title: "",
    image: "https://picsum.photos/seed/page0001/650/450",
    text: "A young stargazer stands in their room. It just so happens that tonight, the 27th of April, is this individual's long-awaited expedition day. Though it was many years ago they first looked through a telescope, it is only tonight they will find what they've been searching for!\n\nThe stars are exceptionally bright tonight.",
    nextCommand: "Proceed",
    nextPageId: "0002",
    aspectRatio: "4:3",
  },
  {
    id: "0002",
    title: "NEO: Retrieve star-map.",
    image: "https://picsum.photos/seed/page0002/650/450",
    text: "Your name is NEO. You have a passion for COSMIC PHENOMENA and an irrational fear of VACUUM CLEANERS. Your room is a mess of STAR CHARTS and EMPTY SNACK BAGS.\n\nYou decide it's finally time to get serious. You grab the star-map you spent all last week annotating.",
    nextCommand: "Continue",
    nextPageId: "0003",
    aspectRatio: "4:3",
  },
  {
    id: "0003",
    title: "",
    image: "https://picsum.photos/seed/page0003/650/650",
    text: "You examine the STAR-MAP. It's a bit frayed at the edges, but it contains coordinates for the 'GOSSAMER NEBULA'. You've been tracking a fast-moving signal coming from that direction for weeks.\n\nThe signal is pulsing. It's almost rhythmic.",
    nextCommand: "Check computer",
    nextPageId: "0004",
    aspectRatio: "1:1",
  },
  {
    id: "0004",
    title: "NEO: Experience the void.",
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    text: "Suddenly, the signal takes over your monitor. It's not coordinates. It's a transmission from the ancient past.\n\nYou are mesmerized by the rhythmic movements and the strange, upbeat melody.",
    nextCommand: "Panic",
    nextPageId: null,
    aspectRatio: "4:3",
  },
];
