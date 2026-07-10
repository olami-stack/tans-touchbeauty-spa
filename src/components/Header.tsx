import { useEffect, useState } from 'react';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

interface HeaderProps {
  onOpenMemberArea: () => void;
}

export default function Header({ onOpenMemberArea }: HeaderProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close menu when a link is clicked
  const handleNavLinkClick = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 border-b ${
          isScrolled
            ? 'bg-[#120E0A]/95 backdrop-blur-md py-3 border-gold/10 shadow-lg'
            : 'bg-transparent py-6 border-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 sm:px-10 flex items-center justify-between">
          {/* Logo Wordmark (Left) */}
          <a href="#" className="flex flex-col group focus:outline-none" id="header-logo">
            <span className="font-serif italic font-semibold text-2xl tracking-wide text-gold group-hover:text-gold-light transition-colors duration-300 whitespace-nowrap">
              Tan's Touch
            </span>
            <span className="text-[9px] font-bold tracking-[0.25em] text-cream-dark/60 mt-0.5 leading-none">
              BEAUTY SPA
            </span>
          </a>

          {/* Desktop Navigation Links (Center) - Matches reference style */}
          <nav className="hidden md:flex items-center gap-8">
            <a
              href="#services"
              className="font-sans text-[10.5px] font-semibold uppercase tracking-widest text-cream/70 hover:text-gold transition-colors duration-300"
            >
              Services
            </a>
            <a
              href="#gallery"
              className="font-sans text-[10.5px] font-semibold uppercase tracking-widest text-cream/70 hover:text-gold transition-colors duration-300"
            >
              Gallery
            </a>
            <a
              href="#membership"
              className="font-sans text-[10.5px] font-semibold uppercase tracking-widest text-cream/70 hover:text-gold transition-colors duration-300"
            >
              Membership
            </a>
            <a
              href="#why-us"
              className="font-sans text-[10.5px] font-semibold uppercase tracking-widest text-cream/70 hover:text-gold transition-colors duration-300"
            >
              Why Us
            </a>
            <a
              href="#gift-cards"
              className="font-sans text-[10.5px] font-semibold uppercase tracking-widest text-cream/70 hover:text-gold transition-colors duration-300"
            >
              Gift Cards
            </a>
          </nav>

          {/* Navigation Actions (Right) */}
          <div className="flex items-center gap-4">
            {/* Desktop-only Buttons */}
            <div className="hidden md:flex items-center gap-6">
              <button
                id="btn-member-area"
                onClick={onOpenMemberArea}
                className="font-sans text-[10.5px] font-bold uppercase tracking-widest text-cream/80 hover:text-gold transition-colors duration-300 focus:outline-none cursor-pointer whitespace-nowrap"
              >
                Member Area
              </button>
              <a
                href="#services"
                id="btn-header-book"
                className="inline-flex items-center justify-center px-5 py-2.5 rounded-full bg-gold text-cream font-sans text-[10.5px] font-bold uppercase tracking-widest hover:bg-gold-light active:scale-95 transition-all duration-300 shadow-md hover:shadow-gold/15 hover:-translate-y-0.5 whitespace-nowrap"
              >
                Book Now
              </a>
            </div>

            {/* Mobile Hamburger Button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="md:hidden flex items-center justify-center p-2 rounded-lg text-cream hover:text-gold focus:outline-none transition-colors duration-300"
              aria-label="Toggle Menu"
            >
              {isMobileMenuOpen ? (
                <X className="w-6 h-6 text-gold" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Drawer Navigation with Motion */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3, ease: 'easeInOut' }}
            className="fixed inset-0 z-40 bg-[#120E0A] pt-24 px-8 pb-10 flex flex-col justify-between md:hidden"
          >
            {/* Nav Links */}
            <nav className="flex flex-col gap-6 mt-6">
              <a
                href="#services"
                onClick={handleNavLinkClick}
                className="font-serif italic text-3xl text-cream hover:text-gold transition-colors duration-300 py-2 border-b border-gold/5"
              >
                Services
              </a>
              <a
                href="#gallery"
                onClick={handleNavLinkClick}
                className="font-serif italic text-3xl text-cream hover:text-gold transition-colors duration-300 py-2 border-b border-gold/5"
              >
                Gallery
              </a>
              <a
                href="#membership"
                onClick={handleNavLinkClick}
                className="font-serif italic text-3xl text-cream hover:text-gold transition-colors duration-300 py-2 border-b border-gold/5"
              >
                Membership
              </a>
              <a
                href="#why-us"
                onClick={handleNavLinkClick}
                className="font-serif italic text-3xl text-cream hover:text-gold transition-colors duration-300 py-2 border-b border-gold/5"
              >
                Why Us
              </a>
              <a
                href="#gift-cards"
                onClick={handleNavLinkClick}
                className="font-serif italic text-3xl text-cream hover:text-gold transition-colors duration-300 py-2 border-b border-gold/5"
              >
                Gift Cards
              </a>
            </nav>

            {/* Actions Footer inside Mobile Drawer */}
            <div className="flex flex-col gap-4 mt-auto">
              <button
                onClick={() => {
                  onOpenMemberArea();
                  setIsMobileMenuOpen(false);
                }}
                className="w-full inline-flex items-center justify-center py-4 rounded-full border border-gold/30 text-cream font-sans text-xs font-bold uppercase tracking-widest hover:bg-gold/10 transition-colors duration-300"
              >
                Member Area
              </button>
              <a
                href="#services"
                onClick={handleNavLinkClick}
                className="w-full inline-flex items-center justify-center py-4 rounded-full bg-gold text-cream font-sans text-xs font-bold uppercase tracking-widest hover:bg-gold-light transition-all duration-300 shadow-lg text-center"
              >
                Book Now
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

