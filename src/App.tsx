import { useState } from 'react';
import Layout from './components/Layout';
import ComicReader from './components/ComicReader';
import { COMIC_PAGES, NEWS_POSTS } from './data/comicData';

type Tab = 'comic' | 'directory' | 'art' | 'credits' | 'news';

export default function App() {
  const [activeTab, setActiveTab] = useState<Tab>('comic');
  const [currentPageId, setCurrentPageId] = useState<string>(COMIC_PAGES[0].id);

  const renderContent = () => {
    switch (activeTab) {
      case 'comic':
        return <ComicReader pageId={currentPageId} onNavigate={setCurrentPageId} />;
      case 'directory':
        return (
          <div className="max-w-2xl mx-auto">
            <h2 className="text-2xl font-bold mb-6 text-white font-mono uppercase tracking-tighter">Directory</h2>
            <div className="space-y-4">
              <div className="flex justify-between text-[10px] uppercase tracking-widest text-[#444] border-b border-[#222] pb-2 mb-4">
                <span>Page</span>
                <span>Title</span>
              </div>
              {COMIC_PAGES.map(page => (
                <button 
                  key={page.id}
                  onClick={() => {
                    setCurrentPageId(page.id);
                    setActiveTab('comic');
                  }}
                  className="w-full flex justify-between items-center py-2 hover:bg-[#111] px-2 rounded transition-colors group"
                >
                  <span className="font-mono text-[#666] group-hover:text-white">{page.id}</span>
                  <span className="text-[#ccc] group-hover:text-[#bb8afb] lowercase font-bold">{page.title}</span>
                </button>
              ))}
            </div>
          </div>
        );
      case 'news':
        return (
          <div className="max-w-3xl mx-auto space-y-12">
            <h2 className="text-4xl font-black text-white italic tracking-tighter border-b-4 border-[#bb8afb] inline-block mb-8">NEWS</h2>
            {NEWS_POSTS.map((post, i) => (
              <article key={i} className="border-l-2 border-[#222] pl-6 py-2">
                <header className="mb-4">
                  <div className="text-[10px] uppercase tracking-widest text-[#555] mb-1">
                    Posted on {post.date} by <span className="text-[#bb8afb]">{post.author}</span>
                  </div>
                  <h3 className="text-xl font-bold text-white">{post.title}</h3>
                </header>
                <div className="text-[#888] leading-relaxed text-sm">
                  {post.content}
                </div>
              </article>
            ))}
          </div>
        );
      case 'art':
        return (
          <div className="max-w-2xl mx-auto space-y-12">
            <div className="text-center py-10 border-b border-[#222]">
              <h2 className="text-3xl font-black text-white italic tracking-tighter mb-2">ART GALLERY</h2>
              <p className="text-[#666] text-sm uppercase tracking-widest">Selected illustrations & commission works</p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {[1, 2, 3, 4].map(i => (
                <div key={i} className="aspect-square bg-[#111] border border-[#222] group relative overflow-hidden">
                  <div className="absolute inset-0 flex items-center justify-center text-[#222] font-black italic text-4xl group-hover:scale-110 transition-transform">
                    {i.toString().padStart(2, '0')}
                  </div>
                  <div className="absolute inset-0 bg-[#bb8afb]/10 opacity-0 group-hover:opacity-100 transition-opacity" />
                </div>
              ))}
            </div>

            <div className="p-8 bg-[#0a0a0a] border border-[#222] rounded-sm text-center space-y-4">
              <h3 className="text-white font-bold uppercase tracking-widest text-xs">Want to see more?</h3>
              <p className="text-[#666] text-sm leading-relaxed max-w-sm mx-auto">
                Commission logs and process sketches are posted weekly for our supporters.
              </p>
              <a 
                href="#" 
                className="inline-block px-8 py-3 bg-[#bb8afb] text-black font-black text-sm uppercase tracking-tighter hover:bg-white transition-colors"
              >
                Support on Ko-Fi
              </a>
            </div>
          </div>
        );
      case 'credits':
        return (
          <div className="max-w-xl mx-auto text-center space-y-8 py-10">
            <h2 className="text-2xl font-bold text-white uppercase tracking-widest">Credits</h2>
            <div className="space-y-4">
              <div>
                <h3 className="text-[#555] uppercase text-[10px] tracking-[0.2em] mb-1">Story & Art</h3>
                <p className="text-white font-bold">Michael</p>
              </div>
              <div>
                <h3 className="text-[#555] uppercase text-[10px] tracking-[0.2em] mb-1">Development</h3>
                <p className="text-white font-bold">The Starlight Engine 2.0</p>
              </div>
              <div className="pt-8 text-xs text-[#444]">
                <p>Inspired by the work of Andrew Hussie and the MS Paint Adventures team.</p>
              </div>
            </div>
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <Layout activeTab={activeTab} setActiveTab={setActiveTab}>
      {renderContent()}
    </Layout>
  );
}
