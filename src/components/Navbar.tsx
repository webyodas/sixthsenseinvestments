import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowUpRight, ShieldCheck, Phone, MessageSquare } from 'lucide-react';

interface NavbarProps {
  currentPage: string;
  onNavigate: (page: string) => void;
}

export const Navbar: React.FC<NavbarProps> = ({ currentPage, onNavigate }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About Founder' },
    { id: 'services', label: 'Services' },
    { id: 'academy', label: 'Academy' },
    { id: 'blog', label: 'Insights' },
    { id: 'contact', label: 'Contact' },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50">
      {/* Institutional Top Trust Bar */}
      <div className="bg-slate-900/90 text-xs text-slate-300 border-b border-slate-800/80 px-4 py-1.5 backdrop-blur-md">
        <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-2">
          <div className="flex items-center gap-2">
            <span className="flex h-2 w-2 rounded-full bg-emerald-400 animate-pulse"></span>
            <span className="font-semibold text-emerald-400">SEBI Registered R.A.</span>
            <span className="text-slate-600">|</span>
            <span className="hidden sm:inline text-slate-300">Institutional Partner: <strong className="text-amber-300">Aditya Birla Capital</strong></span>
            <span className="hidden md:inline text-slate-600">|</span>
            <span className="hidden md:inline text-slate-400">NISM Certified (6 Series)</span>
          </div>
          <div className="flex items-center gap-3 text-slate-300">
            <a 
              href="https://wa.me/919876543210?text=Hi%20Mann%20Jain,%20I%20would%20like%20to%20inquire%20about%20Sixth%20Sense%20Investments%20services." 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 text-emerald-400 hover:text-emerald-300 transition-colors"
            >
              <MessageSquare className="w-3.5 h-3.5" />
              <span>WhatsApp Advisory</span>
            </a>
            <span className="text-slate-700">|</span>
            <button 
              onClick={() => onNavigate('admin')}
              className={`text-xs px-2 py-0.5 rounded transition-all ${
                currentPage === 'admin' 
                  ? 'bg-amber-500/20 text-amber-300 font-semibold' 
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              Admin Portal
            </button>
          </div>
        </div>
      </div>

      {/* Main Navigation */}
      <nav className={`transition-all duration-300 ${scrolled ? 'bg-slate-950/90 backdrop-blur-xl border-b border-slate-800/80 shadow-2xl shadow-black/50 py-3' : 'bg-gradient-to-b from-slate-950/90 to-transparent py-4'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 flex items-center justify-between">
          {/* Logo & Brand */}
          <button 
            onClick={() => onNavigate('home')}
            className="flex items-center gap-3 text-left group"
          >
            <div className="relative">
              <img 
                src="/assets/images/profile_pic_150.jpg" 
                alt="Sixth Sense Investments Logo" 
                className="w-10 h-10 rounded-full border border-amber-500/40 object-cover shadow-lg shadow-amber-500/10 group-hover:border-amber-400 transition-colors"
              />
              <span className="absolute -bottom-1 -right-1 bg-amber-500 text-[9px] font-bold text-slate-950 px-1 rounded-full border border-slate-950">
                ⚡
              </span>
            </div>
            <div>
              <div className="text-base sm:text-lg font-bold tracking-tight text-white flex items-center gap-1.5">
                <span>SIXTH SENSE</span>
                <span className="gold-gradient-text font-black">INVESTMENTS</span>
              </div>
              <div className="text-[10px] text-slate-400 tracking-wider uppercase font-medium flex items-center gap-1.5">
                <span>By Mann Jain</span>
                <span className="text-slate-600">•</span>
                <span className="text-emerald-400 font-semibold">5+ Yrs RIA</span>
              </div>
            </div>
          </button>

          {/* Desktop Navigation Links */}
          <div className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => (
              <button
                key={link.id}
                onClick={() => onNavigate(link.id)}
                className={`px-3.5 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
                  currentPage === link.id
                    ? 'text-amber-300 bg-amber-500/10 shadow-sm border border-amber-500/20'
                    : 'text-slate-300 hover:text-white hover:bg-slate-800/50'
                }`}
              >
                {link.label}
              </button>
            ))}
          </div>

          {/* Action CTAs */}
          <div className="hidden sm:flex items-center gap-3">
            <button
              onClick={() => onNavigate('contact')}
              className="relative inline-flex items-center justify-center p-0.5 overflow-hidden rounded-lg font-medium group bg-gradient-to-r from-amber-500 to-amber-600 text-slate-950 hover:from-amber-400 hover:to-amber-500 shadow-lg shadow-amber-500/20 transition-all duration-200 active:scale-95"
            >
              <span className="px-4 py-2 text-xs font-bold uppercase tracking-wider flex items-center gap-1.5">
                <span>Schedule Consultation</span>
                <ArrowUpRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </span>
            </button>
          </div>

          {/* Mobile Hamburger Button */}
          <div className="lg:hidden flex items-center gap-2">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 rounded-lg bg-slate-900 border border-slate-800 text-slate-300 hover:text-white"
              aria-label="Toggle menu"
            >
              {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>

        {/* Mobile Dropdown Menu */}
        {isOpen && (
          <div className="lg:hidden bg-slate-950/95 border-b border-slate-800 px-4 pt-3 pb-6 mt-3 space-y-1 backdrop-blur-2xl">
            {navLinks.map((link) => (
              <button
                key={link.id}
                onClick={() => {
                  onNavigate(link.id);
                  setIsOpen(false);
                }}
                className={`w-full text-left px-4 py-2.5 rounded-lg text-sm font-medium transition-colors ${
                  currentPage === link.id
                    ? 'text-amber-300 bg-amber-500/10 border-l-2 border-amber-400'
                    : 'text-slate-300 hover:text-white hover:bg-slate-900'
                }`}
              >
                {link.label}
              </button>
            ))}
            <div className="pt-3 border-t border-slate-800/80 mt-2 space-y-2">
              <button
                onClick={() => {
                  onNavigate('contact');
                  setIsOpen(false);
                }}
                className="w-full py-2.5 bg-gradient-to-r from-amber-500 to-amber-600 text-slate-950 font-bold rounded-lg text-sm shadow-md"
              >
                Schedule Consultation
              </button>
              <button
                onClick={() => {
                  onNavigate('admin');
                  setIsOpen(false);
                }}
                className="w-full py-2 bg-slate-900 text-slate-300 hover:text-white border border-slate-800 rounded-lg text-xs font-semibold text-center"
              >
                Admin Management Portal
              </button>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};
