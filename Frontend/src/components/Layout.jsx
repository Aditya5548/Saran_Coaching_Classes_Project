import React from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { useLocation } from 'react-router-dom';
import { ChevronUp, ChevronDown, Phone } from 'lucide-react';
import Navbar from './Navbar';
import Footer from './Footer';

export default function Layout({ children }) {
  const location = useLocation();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const scrollToBottom = () => {
    window.scrollTo({ top: document.body.scrollHeight, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen overflow-x-hidden bg-cream text-ink relative">
      <Navbar />
      <div className="pt-19">
        <AnimatePresence mode="wait" initial={false}>
          <motion.main
            key={location.pathname}
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.24 }}
          >
            {children}
          </motion.main>
        </AnimatePresence>
      </div>
      <Footer />

      <div className="hidden lg:flex fixed right-4 top-1/2 -translate-y-1/2 flex-col gap-3 z-50">
        <button
          onClick={scrollToTop}
          className="p-2.5 rounded-full bg-[#E0B070]/50 hover:bg-[#E0B070] text-black backdrop-blur-sm shadow-md transition-all duration-300"
        >
          <ChevronUp size={24} strokeWidth={2.5} />
        </button>
        <button
          onClick={scrollToBottom}
          className="p-2.5 rounded-full bg-[#E0B070]/50 hover:bg-[#E0B070] text-black backdrop-blur-sm shadow-md transition-all duration-300"
        >
          <ChevronDown size={24} strokeWidth={2.5} />
        </button>
      </div>

      <a
        href="tel:+919005825347"
        className="flex fixed bottom-8 right-8 z-50 p-4 rounded-full bg-blue-500 hover:bg-blue-600 text-white shadow-xl transition-transform duration-300 hover:scale-110 items-center justify-center"
      >
        <Phone size={28} strokeWidth={2.5} />
      </a>
    </div>
  );
}