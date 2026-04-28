import React from 'react';
import { LayoutGrid, Play, Info, Newspaper, ChevronLeft, ChevronRight } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { NavLink, useLocation } from 'react-router-dom';

interface LayoutProps {
  children: React.ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  const location = useLocation();
  const activeTab = location.pathname.startsWith('/comic') ? 'comic' : 
                   location.pathname.startsWith('/directory') ? 'directory' :
                   location.pathname.startsWith('/art') ? 'art' :
                   location.pathname.startsWith('/credits') ? 'credits' :
                   location.pathname.startsWith('/news') ? 'news' : 'comic';

  const navItemClass = ({ isActive }: { isActive: boolean }) => 
    `hover:text-white transition-colors flex items-center gap-2 ${isActive ? 'text-white' : ''}`;

  return (
    <div className="min-h-screen bg-[#050505] text-[#ccc] font-mono selection:bg-[#fff] selection:text-[#000] relative overflow-x-hidden">
      {/* Header */}
      <header className="border-b border-[#222] py-4 bg-[#0a0a0a] sticky top-0 z-50">
        <div className="max-w-4xl mx-auto px-4 flex flex-col items-center">
          <NavLink to="/comic/0001">
            <h1 className="text-3xl font-bold tracking-tighter text-white mb-4 hover:text-[#00ff00] cursor-pointer transition-colors">
              STARLIGHT COMICS
            </h1>
          </NavLink>
          <nav className="flex gap-6 text-sm uppercase tracking-widest text-[#888]">
            <NavLink to="/directory" className={navItemClass}>
              <LayoutGrid size={16} /> Directory
            </NavLink>
            <NavLink to="/art" className={navItemClass}>
              <Play size={16} /> Art
            </NavLink>
            <NavLink to="/credits" className={navItemClass}>
              <Info size={16} /> Credits
            </NavLink>
            <NavLink to="/news" className={navItemClass}>
              <Newspaper size={16} /> News
            </NavLink>
          </nav>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 py-8 flex gap-12 relative z-10">
        {/* Left Sidebar - Socials/Support (Mobile hidden) */}
        <aside className="hidden lg:block w-64 shrink-0">
          <div className="sticky top-40 space-y-8">
            <div className="p-6 border border-[#1a1a1a] bg-[#0a0a0a]/90 backdrop-blur-md rounded-lg shadow-2xl relative group overflow-hidden">
              {/* Accents */}
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-[#bb8afb] to-transparent opacity-30" />
              
              <h3 className="text-white text-[10px] mb-4 uppercase font-black tracking-[0.3em] text-center border-b border-[#222] pb-3">Support</h3>
              <ul className="space-y-4 text-xs font-bold">
                <li>
                  <a href="#" className="flex items-center justify-between hover:text-[#bb8afb] transition-all group/link">
                    <span>Ko-Fi</span>
                    <ChevronRight size={14} className="opacity-0 group-hover/link:opacity-100 -translate-x-2 group-hover/link:translate-x-0 transition-all" />
                  </a>
                </li>
                <li>
                  <a href="#" className="flex items-center justify-between hover:text-[#bb8afb] transition-all group/link">
                    <span>Patreon</span>
                    <ChevronRight size={14} className="opacity-0 group-hover/link:opacity-100 -translate-x-2 group-hover/link:translate-x-0 transition-all" />
                  </a>
                </li>
              </ul>
            </div>
            
            <div className="p-6 border border-[#1a1a1a] bg-[#0a0a0a]/50 rounded-lg text-center">
              <p className="text-[9px] text-[#333] uppercase tracking-[0.4em] mb-2">Starlight Engine 2.0</p>
              <p className="text-[10px] text-[#444] font-bold italic">© 2026 Michael</p>
            </div>
          </div>
        </aside>

        {/* Dynamic Content */}
        <div className="flex-1 min-w-0 bg-[#070707]/80 ring-1 ring-[#1a1a1a] p-2 md:p-6 rounded-2xl shadow-inner">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.25, ease: "easeOut" }}
            >
              {children}
            </motion.div>
          </AnimatePresence>

          {/* Mobile support footer (Only visible on small screens when viewing Art or Comic) */}
          {(activeTab === 'art' || activeTab === 'comic') && (
            <div className="lg:hidden mt-24 pt-12 border-t border-[#1a1a1a]">
              <div className="text-center p-8 bg-[#0a0a0a] ring-1 ring-[#222] rounded-xl shadow-xl">
                <h4 className="text-[10px] font-black text-[#555] uppercase tracking-[0.3em] mb-6">Keep the stars shining</h4>
                <div className="flex justify-center gap-10">
                  <a href="#" className="text-white font-black text-sm uppercase hover:text-[#bb8afb] transition-colors border-b-2 border-[#111] hover:border-[#bb8afb] pb-1">Ko-Fi</a>
                  <a href="#" className="text-white font-black text-sm uppercase hover:text-[#bb8afb] transition-colors border-b-2 border-[#111] hover:border-[#bb8afb] pb-1">Patreon</a>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Right Sidebar - Layout Balancing */}
        <aside className="hidden xl:block w-56 shrink-0">
          <div className="sticky top-40 space-y-4">
            {/* Added for symmetry - could hold 'Recent Pages' in the future */}
            <div className="h-64 border-l border-[#111] opacity-20 pointer-events-none" />
          </div>
        </aside>
      </main>

      {/* Footer */}
      <footer className="border-t border-[#222] py-8 text-center text-[#444] text-[10px] uppercase tracking-widest mt-20">
        <p>Starlight Comics is an independent web production</p>
        <p className="mt-2">Privacy Policy | Terms of Service</p>
      </footer>
    </div>
  );
}
