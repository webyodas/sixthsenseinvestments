import React from 'react';
import { ExternalLink } from 'lucide-react';
import { Logo } from './Logo';

interface FooterProps {
  onNavigate?: (page: string) => void;
  onScrollTo?: (sectionId: string) => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate, onScrollTo }) => {
  const handleLinkClick = (id: string) => {
    if (onScrollTo) {
      onScrollTo(id);
    } else if (onNavigate) {
      onNavigate(id);
    } else {
      document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
    }
  };

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

            <div className="inline-flex items-center gap-2.5 px-3 py-1.5 rounded bg-[#121720] border border-[#1e2638]">
              <img 
                src="/assets/images/aditya_birla_sun.png" 
                alt="Aditya Birla Capital" 
                className="h-4 w-auto object-contain" 
              />
              <span className="text-[11px] text-[#8b95a5]">
                Authorized Channel Partner · <strong className="text-white font-medium">Aditya Birla Capital</strong>
              </span>
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
            <h4 className="text-xs font-semibold text-white">Navigation</h4>
            <ul className="space-y-2 text-xs">
              <li><button onClick={() => handleLinkClick('overview')} className="hover:text-white transition-colors">Overview</button></li>
              <li><button onClick={() => handleLinkClick('alliance')} className="hover:text-white transition-colors">Aditya Birla Capital</button></li>
              <li><button onClick={() => handleLinkClick('capabilities')} className="hover:text-white transition-colors">Advisory Matrix</button></li>
              <li><button onClick={() => handleLinkClick('track-record')} className="hover:text-white transition-colors">Live Track Record</button></li>
              <li><button onClick={() => handleLinkClick('academy')} className="hover:text-white transition-colors">Academy & League</button></li>
              <li><button onClick={() => handleLinkClick('consultation')} className="hover:text-white transition-colors">Consult Advisory</button></li>
            </ul>
          </div>

          <div className="md:col-span-4 space-y-3 text-left">
            <h4 className="text-xs font-semibold text-white">Advisory Desks</h4>
            <div className="space-y-1.5 text-xs text-[#8b95a5]">
              <p>Palghar Commercial Center, Maharashtra</p>
              <p>sixthsenseinvestments.official@gmail.com</p>
              <p>mannjain.abm@gmail.com</p>
              <p>Direct / WhatsApp: +91 91123 99843 / +91 80809 07126</p>
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

        {/* Copyright & WebYodas Interactive Signature Badge */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#5b6574]">
          <p>© {new Date().getFullYear()} Sixth Sense Investments. All rights reserved.</p>
          
          <a
            href="https://webyodas.com"
            target="_blank"
            rel="noopener noreferrer"
            className="webyodas-link inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#121720] border border-[#d4af37]/40 text-[#d4af37] hover:bg-[#d4af37]/15 transition-colors text-xs font-medium cursor-pointer"
          >
            <span>Crafted by WebYodas</span>
            <ExternalLink className="w-3 h-3 text-[#d4af37]" />
          </a>
        </div>

      </div>
    </footer>
  );
};
export default Footer;