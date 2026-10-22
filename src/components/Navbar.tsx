import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';

interface NavbarProps {
  currentPage: string;
  onNavigate: (page: string) => void;
}

export const Navbar: React.FC<NavbarProps> = ({ currentPage, onNavigate }) => {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { id: 'home', label: 'Overview' },
    { id: 'about', label: 'Founder & Governance' },
    { id: 'services', label: 'Services' },
    { id: 'academy', label: 'Academy' },
    { id: 'blog', label: 'Research' },
    { id: 'contact', label: 'Contact' },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-[#090c10]">
      {/* Institutional Bar */}
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
        
        {/* Wordmark */}
        <button 
          onClick={() => onNavigate('home')}
          className="flex items-center gap-3 text-left"
        >
          <img 
            src="/assets/images/profile_pic_150.jpg" 
            alt="Sixth Sense Investments" 
            className="w-8 h-8 rounded-full object-cover"
          />
          <div>
            <span className="text-base font-medium tracking-tight text-white block leading-none font-editorial">
              Sixth Sense Investments
            </span>
            <span className="text-xs text-[#7d8898] block mt-1">
              Mann Jain · SEBI Registered Research Analyst
            </span>
          </div>
        </button>

        {/* Desktop Navigation Links */}
        <nav className="hidden lg:flex items-center gap-6">
          {navLinks.map((link) => (
            <button
              key={link.id}
              onClick={() => onNavigate(link.id)}
              className={`text-sm transition-colors py-1 ${
                currentPage === link.id
                  ? 'text-white font-medium'
                  : 'text-[#8b95a5] hover:text-white'
              }`}
            >
              {link.label}
            </button>
          ))}
        </nav>

        {/* Action CTAs */}
        <div className="hidden sm:flex items-center gap-4">
          <button 
            onClick={() => onNavigate('admin')}
            className={`text-xs transition-colors px-2 py-1 ${
              currentPage === 'admin' 
                ? 'text-white font-semibold' 
                : 'text-[#7d8898] hover:text-white'
            }`}
          >
            Admin HQ
          </button>

          <button
            onClick={() => onNavigate('contact')}
            className="px-4 py-2 bg-[#d4af37] hover:bg-[#c49f2e] text-[#090c10] font-semibold text-xs tracking-normal transition-colors rounded-none"
          >
            Consult Advisory
          </button>
        </div>

        {/* Mobile Hamburger */}
        <div className="lg:hidden flex items-center gap-3">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="p-2 text-[#8b95a5] hover:text-white"
            aria-label="Toggle navigation"
          >
            {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="lg:hidden bg-[#090c10] px-6 py-6 space-y-3">
          {navLinks.map((link) => (
            <button
              key={link.id}
              onClick={() => {
                onNavigate(link.id);
                setIsOpen(false);
              }}
              className={`block w-full text-left py-2 text-sm ${
                currentPage === link.id ? 'text-white font-semibold' : 'text-[#8b95a5]'
              }`}
            >
              {link.label}
            </button>
          ))}
          <div className="pt-4 flex flex-col gap-3">
            <button
              onClick={() => {
                onNavigate('contact');
                setIsOpen(false);
              }}
              className="w-full py-2.5 bg-[#d4af37] text-[#090c10] font-semibold text-xs text-center"
            >
              Consult Advisory
            </button>
            <button
              onClick={() => {
                onNavigate('admin');
                setIsOpen(false);
              }}
              className="w-full py-2 text-[#7d8898] text-xs text-center"
            >
              Admin HQ
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
