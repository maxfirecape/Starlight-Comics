/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { ComicPage, NewsPost } from '../types';

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
