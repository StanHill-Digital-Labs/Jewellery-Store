import React, { useState } from 'react';
import { NavLink, Link, useNavigate, useLocation } from 'react-router-dom';
import { Search, ShoppingBag, Sun, Moon, MessageCircle, ShieldCheck, Menu, X, BookOpen, Ruler, Store, Lock } from 'lucide-react';
import { useStore } from '../context/StoreContext';

export const Header: React.FC = () => {
  const {
    cartCount,
    theme,
    toggleTheme,
    searchQuery,
    setSearchQuery,
    setIsCartOpen,
    getWhatsAppGeneralUrl,
    setIsSizingGuideOpen
  } = useStore();

  const navigate = useNavigate();
  const location = useLocation();
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const handleSearchChange = (value: string) => {
    setSearchQuery(value);
    // If not already on collection page and searching, navigate to collection
    if (value.trim() && location.pathname !== '/' && location.pathname !== '/collection') {
      navigate('/');
    }
  };

  const handleMobileNav = (path: string) => {
    setIsMobileMenuOpen(false);
    navigate(path);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const isCollectionActive = location.pathname === '/' || location.pathname === '/collection';
  const isAdminActive = location.pathname === '/admin';
  const isJournalActive = location.pathname === '/journal';
  const isInquiriesActive = location.pathname === '/inquiries' || location.pathname === '/contact';

  return (
    <header className="fixed top-0 left-0 right-0 z-40 bg-[#fcf9f8]/95 dark:bg-[#1C1C1C]/95 backdrop-blur-md border-b border-[#ddc0b9]/40 dark:border-[#89726c]/30 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
        
        {/* Left: Mobile Menu Trigger & Search */}
        <div className="flex items-center space-x-3">
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden text-[#1b1b1b] dark:text-[#fcf9f8] p-2 hover:opacity-70 transition-opacity"
            aria-label="Toggle Menu"
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>

          <div className="relative">
            {isSearchOpen ? (
              <div className="flex items-center bg-[#f0eded] dark:bg-[#313030] rounded-full px-3 py-1.5 border border-[#ddc0b9] dark:border-[#89726c]/50 transition-all">
                <Search className="w-4 h-4 text-[#89726c] dark:text-[#ddc0b9] mr-2" />
                <input
                  type="text"
                  placeholder="Search turquoise, rings, cuffs..."
                  value={searchQuery}
                  onChange={(e) => handleSearchChange(e.target.value)}
                  autoFocus
                  className="bg-transparent border-none text-xs sm:text-sm text-[#1b1b1b] dark:text-[#fcf9f8] focus:outline-none w-36 sm:w-56 placeholder:text-[#89726c] dark:placeholder:text-[#89726c]"
                />
                <button
                  onClick={() => {
                    setSearchQuery('');
                    setIsSearchOpen(false);
                  }}
                  className="text-xs text-[#89726c] dark:text-[#ddc0b9] hover:text-[#c25a3f] dark:hover:text-[#00A699] ml-1"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>
            ) : (
              <button
                onClick={() => setIsSearchOpen(true)}
                className="flex items-center text-[#56423d] dark:text-[#ddc0b9] hover:text-[#c25a3f] dark:hover:text-[#00A699] p-2 transition-colors"
                title="Search Jewelry"
              >
                <Search className="w-5 h-5" />
                <span className="hidden lg:inline-block ml-2 text-xs font-label-caps uppercase tracking-wider">
                  Search
                </span>
              </button>
            )}
          </div>
        </div>

        {/* Center: Logo */}
        <Link
          to="/"
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          className="text-center cursor-pointer group"
        >
          <h1 className="font-serif-header text-xl sm:text-2xl md:text-3xl font-bold tracking-widest text-[#1b1b1b] dark:text-[#fcf9f8] uppercase group-hover:text-[#c25a3f] dark:group-hover:text-[#00A699] transition-colors">
            SILVER & STONE
          </h1>
          <p className="hidden sm:block text-[10px] font-label-caps tracking-[0.25em] text-[#89726c] dark:text-[#ddc0b9] uppercase mt-0.5">
            Artisan Silversmith & Hand-Cut Gems
          </p>
        </Link>

        {/* Right: Controls & Bag */}
        <div className="flex items-center space-x-2 sm:space-x-4">
          
          {/* Direct WhatsApp button */}
          <a
            href={getWhatsAppGeneralUrl()}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden sm:flex items-center text-[#56423d] dark:text-[#ddc0b9] hover:text-[#25D366] dark:hover:text-[#25D366] p-2 transition-colors"
            title="WhatsApp Inquiry"
          >
            <MessageCircle className="w-5 h-5" />
          </a>

          {/* Theme Toggle Button */}
          <button
            onClick={toggleTheme}
            className="p-2 text-[#56423d] dark:text-[#ddc0b9] hover:text-[#c25a3f] dark:hover:text-[#00A699] transition-colors rounded-full hover:bg-[#ddc0b9]/20 dark:hover:bg-[#313030]"
            title={theme === 'light' ? 'Switch to Dark Forge Theme' : 'Switch to Rich Cream Theme'}
            aria-label="Toggle Theme"
          >
            {theme === 'light' ? <Moon className="w-5 h-5 text-[#c25a3f]" /> : <Sun className="w-5 h-5 text-[#00A699]" />}
          </button>

          {/* Cart Bag Button */}
          <button
            onClick={() => setIsCartOpen(true)}
            className="relative p-2 text-[#1b1b1b] dark:text-[#fcf9f8] hover:text-[#c25a3f] dark:hover:text-[#00A699] transition-colors"
            aria-label="Shopping Bag"
          >
            <ShoppingBag className="w-6 h-6" />
            {cartCount > 0 && (
              <span className="absolute top-1 right-1 bg-[#c25a3f] dark:bg-[#00A699] text-white text-[10px] font-bold w-4 h-4 rounded-full flex items-center justify-center animate-pulse">
                {cartCount}
              </span>
            )}
          </button>

          {/* Admin Navigation Link */}
          <NavLink
            to="/admin"
            className={`hidden md:flex items-center gap-1 px-3 py-1.5 rounded text-xs font-label-caps uppercase tracking-wider transition-colors ${
              isAdminActive
                ? 'bg-[#c25a3f] text-white dark:bg-[#00A699] shadow-sm font-semibold'
                : 'border border-[#ddc0b9] dark:border-[#89726c] text-[#56423d] dark:text-[#ddc0b9] hover:bg-[#f0eded] dark:hover:bg-[#313030]'
            }`}
            title="Owner Administrative Inventory Dashboard"
          >
            <Lock className="w-3.5 h-3.5" />
            <span>Admin</span>
          </NavLink>
        </div>
      </div>

      {/* Desktop Main Navigation Bar */}
      <nav className="hidden md:flex justify-center items-center gap-8 py-2.5 border-t border-[#ddc0b9]/30 dark:border-[#89726c]/20 bg-[#fcf9f8]/80 dark:bg-[#1C1C1C]/80">
        <NavLink
          to="/"
          className={`text-xs font-label-caps uppercase tracking-[0.15em] transition-colors ${
            isCollectionActive
              ? 'text-[#c25a3f] dark:text-[#00A699] font-bold border-b-2 border-[#c25a3f] dark:border-[#00A699] pb-0.5'
              : 'text-[#56423d] dark:text-[#ddc0b9] hover:text-[#c25a3f] dark:hover:text-[#00A699]'
          }`}
        >
          Collection
        </NavLink>

        <NavLink
          to="/journal"
          className={`text-xs font-label-caps uppercase tracking-[0.15em] transition-colors ${
            isJournalActive
              ? 'text-[#c25a3f] dark:text-[#00A699] font-bold border-b-2 border-[#c25a3f] dark:border-[#00A699] pb-0.5'
              : 'text-[#56423d] dark:text-[#ddc0b9] hover:text-[#c25a3f] dark:hover:text-[#00A699]'
          }`}
        >
          Artisan's Journal
        </NavLink>

        <button
          onClick={() => setIsSizingGuideOpen(true)}
          className="text-xs font-label-caps uppercase tracking-[0.15em] text-[#56423d] dark:text-[#ddc0b9] hover:text-[#c25a3f] dark:hover:text-[#00A699] transition-colors flex items-center gap-1 cursor-pointer"
        >
          <Ruler className="w-3.5 h-3.5" />
          <span>Sizing Guide</span>
        </button>

        <NavLink
          to="/inquiries"
          className={`text-xs font-label-caps uppercase tracking-[0.15em] transition-colors ${
            isInquiriesActive
              ? 'text-[#c25a3f] dark:text-[#00A699] font-bold border-b-2 border-[#c25a3f] dark:border-[#00A699] pb-0.5'
              : 'text-[#56423d] dark:text-[#ddc0b9] hover:text-[#c25a3f] dark:hover:text-[#00A699]'
          }`}
        >
          Inquiries & Ethics
        </NavLink>
      </nav>

      {/* Mobile Navigation Drawer */}
      {isMobileMenuOpen && (
        <div className="md:hidden border-t border-[#ddc0b9]/40 dark:border-[#89726c]/30 bg-[#fcf9f8] dark:bg-[#1C1C1C] px-6 py-6 space-y-4 shadow-xl">
          <button
            onClick={() => handleMobileNav('/')}
            className={`w-full text-left py-2 text-sm font-label-caps uppercase tracking-wider flex items-center gap-3 ${
              isCollectionActive ? 'text-[#c25a3f] dark:text-[#00A699] font-bold' : 'text-[#1b1b1b] dark:text-[#fcf9f8]'
            }`}
          >
            <Store className="w-4 h-4" />
            <span>Shop Collection</span>
          </button>

          <button
            onClick={() => handleMobileNav('/journal')}
            className={`w-full text-left py-2 text-sm font-label-caps uppercase tracking-wider flex items-center gap-3 ${
              isJournalActive ? 'text-[#c25a3f] dark:text-[#00A699] font-bold' : 'text-[#1b1b1b] dark:text-[#fcf9f8]'
            }`}
          >
            <BookOpen className="w-4 h-4" />
            <span>Artisan's Journal</span>
          </button>

          <button
            onClick={() => {
              setIsSizingGuideOpen(true);
              setIsMobileMenuOpen(false);
            }}
            className="w-full text-left py-2 text-sm font-label-caps uppercase tracking-wider flex items-center gap-3 text-[#1b1b1b] dark:text-[#fcf9f8]"
          >
            <Ruler className="w-4 h-4" />
            <span>Custom Sizing Guide</span>
          </button>

          <button
            onClick={() => handleMobileNav('/inquiries')}
            className={`w-full text-left py-2 text-sm font-label-caps uppercase tracking-wider flex items-center gap-3 ${
              isInquiriesActive ? 'text-[#c25a3f] dark:text-[#00A699] font-bold' : 'text-[#1b1b1b] dark:text-[#fcf9f8]'
            }`}
          >
            <MessageCircle className="w-4 h-4" />
            <span>Inquiries & Ethics</span>
          </button>

          <div className="pt-4 border-t border-[#ddc0b9]/30 dark:border-[#89726c]/20">
            <button
              onClick={() => handleMobileNav('/admin')}
              className={`w-full py-2.5 rounded text-xs font-label-caps uppercase tracking-widest flex items-center justify-center gap-2 ${
                isAdminActive
                  ? 'bg-[#c25a3f] dark:bg-[#00A699] text-white'
                  : 'bg-[#f0eded] dark:bg-[#313030] text-[#1b1b1b] dark:text-[#fcf9f8]'
              }`}
            >
              <ShieldCheck className="w-4 h-4" />
              <span>Owner Admin Dashboard</span>
            </button>
          </div>
        </div>
      )}
    </header>
  );
};

