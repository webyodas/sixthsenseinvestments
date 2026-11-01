import React, { useState } from 'react';
import { Menu, X, Send } from 'lucide-react';
import { Logo } from './Logo';

interface NavbarProps {
  currentPage?: string;
  onNavigate: (sectionId: string) => void;
  onScrollTo?: (sectionId: string) => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onNavigate, onScrollTo }) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleNavClick = (id: string) => {
    if (onScrollTo) {
      onScrollTo(id);
    } else {
      onNavigate(id);
    }
    setIsOpen(false);
  };

  const navLinks = [
    { id: 'overview', label: 'Overview' },
    { id: 'alliance', label: 'Aditya Birla Capital' },
    { id: 'capabilities', label: 'Services' },
    { id: 'track-record', label: 'Track Record' },
    { id: 'academy', label: 'Academy' },
    { id: 'consultation', label: 'Contact' },
  ];

  return (
    <header data-ui="navbar" className="fixed top-0 left-0 right-0 z-50 backdrop-blur-md bg-[#090c10]/95 border-b border-[#1e2638]/80">
      {/* Institutional Bar */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between">
        
        {/* Wordmark */}
        <button 
          onClick={() => handleNavClick('overview')}
          className="flex items-center gap-2.5 sm:gap-3 text-left min-w-0 cursor-pointer"
        >
          <Logo className="w-7 h-7 sm:w-8 sm:h-8 text-[#d4af37] shrink-0" variant="gold" />
          <div className="min-w-0">
            <span className="text-sm sm:text-base font-medium tracking-tight text-white block leading-none font-editorial truncate">
              Sixth Sense Investments
            </span>
            <span className="text-[10px] sm:text-xs text-[#7d8898] block mt-1 truncate">
              <span className="sm:hidden">SEBI Regd. Research Analyst</span>
              <span className="hidden sm:inline">Mann Jain · SEBI Registered Research Analyst</span>
            </span>
          </div>
        </button>

        {/* Desktop Navigation Links (In-page smooth anchor jumps) */}
        <nav className="hidden lg:flex items-center gap-6">
          {navLinks.map((link) => (
            <button
              key={link.id}
              onClick={() => handleNavClick(link.id)}
              className="text-sm text-[#8b95a5] hover:text-white transition-colors py-1 font-medium cursor-pointer"
            >
              {link.label}
            </button>
          ))}
        </nav>

        {/* Action CTA */}
        <div className="hidden sm:flex items-center gap-4">
          <button
            onClick={() => handleNavClick('consultation')}
            className="px-4 py-2 bg-[#d4af37] hover:bg-[#e5c158] text-[#090c10] font-semibold text-xs tracking-normal transition-colors rounded-lg cursor-pointer"
          >
            Consult Advisory
          </button>
        </div>

        {/* Mobile Hamburger */}
        <div className="lg:hidden flex items-center gap-2">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="p-2 text-[#8b95a5] hover:text-white rounded-lg hover:bg-[#121720] transition-colors cursor-pointer"
            aria-label="Toggle navigation"
          >
            {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div data-ui="mobile-menu" className="lg:hidden bg-[#0c1017]/98 border-b border-[#1e2638] px-5 py-5 space-y-4 backdrop-blur-xl">
          <div className="space-y-1">
            {navLinks.map((link) => (
              <button
                key={link.id}
                onClick={() => handleNavClick(link.id)}
                className="block w-full text-left py-2.5 px-3 rounded-lg text-sm text-[#8b9bb4] hover:text-[#f1f4f8] hover:bg-[#121720] transition-colors font-medium cursor-pointer"
              >
                {link.label}
              </button>
            ))}
          </div>

          <div className="pt-3 flex flex-col gap-2.5">
            <button
              onClick={() => handleNavClick('consultation')}
              className="w-full h-11 bg-[#d4af37] hover:bg-[#e5c158] text-[#090c10] font-semibold text-xs rounded-xl flex items-center justify-center gap-1.5 transition-colors cursor-pointer"
            >
              <span>Consult Advisory</span>
            </button>

            <a
              href="https://wa.me/919112399843?text=Hi%20Mann%20Jain,%20I%20would%20like%20to%20inquire%20about%20Sixth%20Sense%20Investments%20services."
              target="_blank"
              rel="noopener noreferrer"
              className="w-full h-11 bg-[#121720] border border-emerald-500/30 text-white font-medium text-xs rounded-xl flex items-center justify-center gap-2 transition-colors cursor-pointer"
            >
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              <Send className="w-3.5 h-3.5 text-emerald-400" />
              <span>Chat on WhatsApp (+91 91123 99843)</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
};
export default Navbar;