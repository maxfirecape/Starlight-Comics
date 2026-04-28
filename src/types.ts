export interface ComicPage {
  id: string; // e.g. "0001"
  title: string;
  image?: string;
  videoUrl?: string; 
  text: string;
  nextCommand: string;
  nextPageId: string | null;
  aspectRatio: "4:3" | "1:1";
}

export interface NewsPost {
  date: string;
  author: string;
  title: string;
  content: string;
}
