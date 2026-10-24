import React from 'react';
import { ExternalLink } from 'lucide-react';
import { Logo } from './Logo';

interface FooterProps {
  onNavigate: (page: string) => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate }) => {
  return (
    <footer className="bg-[#05070a] text-[#7d8898] pt-20 pb-28 md:pb-16 text-sm">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Top closing grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 pb-16">
          
          <div className="md:col-span-5 space-y-4 text-left">
            <div className="flex items-center gap-3">
              <Logo className="w-6 h-6 text-[#d4af37]" variant="gold" />
              <h3 className="text-xl font-normal text-white font-editorial">
                Sixth Sense Investments
              </h3>
            </div>
            <p className="text-xs text-[#8b95a5] leading-relaxed max-w-sm">
              Founded by Mann Jain. Quantitative equity trading, Portfolio Management Services (PMS), 
              and institutional research advisory in strategic association with Aditya Birla Capital.
            </p>
            <div className="pt-2">
              <a
                href="https://www.instagram.com/sixthsenseinvestments/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-xs text-[#d4af37] hover:underline"
              >
                <span>Instagram @sixthsenseinvestments</span>
                <ExternalLink className="w-3 h-3" />
              </a>
            </div>
          </div>

          <div className="md:col-span-3 space-y-3 text-left">
            <h4 className="text-xs font-semibold text-white">Sections</h4>
            <ul className="space-y-2 text-xs">
              <li><button onClick={() => onNavigate('home')} className="hover:text-white">Overview</button></li>
              <li><button onClick={() => onNavigate('about')} className="hover:text-white">Founder & Governance</button></li>
              <li><button onClick={() => onNavigate('services')} className="hover:text-white">Services Portfolio</button></li>
              <li><button onClick={() => onNavigate('academy')} className="hover:text-white">Academy & Competitions</button></li>
              <li><button onClick={() => onNavigate('blog')} className="hover:text-white">Research & Insights</button></li>
              <li><button onClick={() => onNavigate('contact')} className="hover:text-white">Consult Advisory</button></li>
            </ul>
          </div>

          <div className="md:col-span-4 space-y-3 text-left">
            <h4 className="text-xs font-semibold text-white">Advisory Desks</h4>
            <div className="space-y-1.5 text-xs text-[#8b95a5]">
              <p>Palghar Commercial Center & Mumbai Corporate Branch</p>
              <p>advisory@sixthsenseinvestments.com</p>
              <p>WhatsApp: +91 98765 43210</p>
              <div className="pt-2">
                <button 
                  onClick={() => onNavigate('admin')}
                  className="text-xs text-[#d4af37] hover:underline"
                >
                  Admin HQ Access
                </button>
              </div>
            </div>
          </div>

        </div>

        {/* Regulatory Disclaimers */}
        <div className="py-8 text-xs text-[#5b6574] space-y-3 text-left leading-relaxed">
          <p>
            Regulatory Disclosure: Mann Jain is a SEBI Registered Research Analyst under registration number INZXXXXX8032 
            with 5+ years of active advisory experience. Certified by the National Institute of Securities Markets (NISM) in 
            Series V-B (Mutual Funds), Series VII (Securities Operations and Risk Management), Series X-A & X-B (Investment Adviser), 
            Series XV & XV-B (Research Analyst), and Series XXI-A & XXI-B (Portfolio Managers).
          </p>
          <p>
            Institutional Alignment: Portfolio Management Services and demat execution are conducted in authorized channel partnership 
            with Aditya Birla Capital. Investments in the securities market are subject to market risks. Read all scheme and offer 
            documents carefully before investing.
          </p>
        </div>

        {/* Copyright */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#5b6574]">
          <p>© {new Date().getFullYear()} Sixth Sense Investments. All rights reserved.</p>
          <p>WebYodas Agency Production</p>
        </div>

      </div>
    </footer>
  );
};
