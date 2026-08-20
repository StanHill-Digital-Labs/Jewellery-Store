import React from 'react';
import { Sun, Moon, MessageCircle } from 'lucide-react';
import { useStore } from '../context/StoreContext';

export const FloatingControls: React.FC = () => {
  const { theme, toggleTheme, getWhatsAppGeneralUrl } = useStore();

  return (
    <>
      {/* Hanging WhatsApp Icon */}
      <a
        href={getWhatsAppGeneralUrl()}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Direct WhatsApp Message"
        title="Direct WhatsApp Inquiry"
        className="fixed bottom-24 right-4 md:bottom-8 md:right-24 z-50 bg-[#25D366] text-white p-3.5 rounded-full shadow-2xl hover:scale-110 active:scale-95 transition-all duration-300 flex items-center justify-center group"
      >
        <MessageCircle className="w-6 h-6 fill-current text-white stroke-1" />
        <span className="max-w-0 overflow-hidden whitespace-nowrap group-hover:max-w-xs transition-all duration-300 group-hover:ml-2 font-label-caps text-xs uppercase tracking-wider text-white font-semibold">
          Ask Artisan
        </span>
      </a>

      {/* Floating Theme Toggle Switch */}
      <button
        onClick={toggleTheme}
        aria-label="Toggle Light/Dark Theme"
        title={theme === 'light' ? 'Switch to Dark Forge Theme' : 'Switch to Rich Cream Theme'}
        className="fixed bottom-8 right-4 md:bottom-8 md:right-8 z-50 bg-[#fcf9f8]/90 dark:bg-[#313030]/90 backdrop-blur-md border border-[#ddc0b9] dark:border-[#89726c]/40 text-[#1b1b1b] dark:text-[#fcf9f8] p-3.5 rounded-full shadow-xl hover:shadow-2xl hover:border-[#c25a3f] dark:hover:border-[#00A699] active:scale-95 transition-all duration-300 flex items-center justify-center"
      >
        {theme === 'light' ? (
          <Moon className="w-5 h-5 text-[#c25a3f]" />
        ) : (
          <Sun className="w-5 h-5 text-[#00A699]" />
        )}
      </button>
    </>
  );
};
