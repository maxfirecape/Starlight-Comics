/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

// 1. Data Types
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

// 2. Importing Chunks (Scale this by adding more imports as you grow)
import { p0001_p0100 } from './pages/p0001_p0100';
// import { p0101_p0200 } from './pages/p0101_p0200'; // Example for your next 100 pages

// 3. Exporting the master registry
export const COMIC_PAGES: ComicPage[] = [
  ...p0001_p0100,
  // ...p0101_p0200,
];

// 4. Export News (Moved to separate file for cleanliness)
import { NEWS_POSTS as news } from './newsData';
export const NEWS_POSTS = news;
