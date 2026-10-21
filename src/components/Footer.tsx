import React from 'react';
import { ShieldCheck, Award, Mail, Phone, MapPin, ExternalLink } from 'lucide-react';

interface FooterProps {
  onNavigate: (page: string) => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate }) => {
  return (
    <footer className="bg-slate-950 border-t border-slate-900 text-slate-400 pt-16 pb-28 md:pb-16 text-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-12 border-b border-slate-900">
          {/* Brand Col */}
          <div className="lg:col-span-2 space-y-4">
            <div className="flex items-center gap-3">
              <img 
                src="/assets/images/profile_pic_150.jpg" 
                alt="Sixth Sense Investments Logo" 
                className="w-10 h-10 rounded-full border border-amber-500/40 object-cover"
              />
              <div>
                <span className="text-base font-bold text-white tracking-tight">SIXTH SENSE</span>{' '}
                <span className="gold-gradient-text font-black">INVESTMENTS</span>
                <p className="text-[11px] text-slate-500 uppercase tracking-widest font-semibold">Founded by Mann Jain (SEBI R.A.)</p>
              </div>
            </div>

            <p className="text-slate-400 text-xs leading-relaxed max-w-md">
              A high-conviction quantitative equity trading desk and wealth advisory firm. 
              Partnered with <strong>Aditya Birla Capital</strong> for institutional execution, 
              depository security, and portfolio management services.
            </p>

            <div className="flex flex-wrap gap-2 pt-2">
              <div className="flex items-center gap-1.5 bg-slate-900/80 border border-slate-800 px-2.5 py-1 rounded text-[11px] text-slate-300">
                <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
                <span>SEBI Reg: INZXXXXX8032</span>
              </div>
              <div className="flex items-center gap-1.5 bg-slate-900/80 border border-slate-800 px-2.5 py-1 rounded text-[11px] text-slate-300">
                <Award className="w-3.5 h-3.5 text-amber-400" />
                <span>NISM Certified (6 Series)</span>
              </div>
            </div>

            <div className="pt-2">
              <a 
                href="https://www.instagram.com/sixthsenseinvestments/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-xs font-semibold text-slate-300 hover:text-amber-400 transition-colors"
              >
                <svg className="w-4 h-4 text-pink-400 fill-current" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                </svg>
                <span>Follow @sixthsenseinvestments (3.7k+ Traders)</span>
                <ExternalLink className="w-3 h-3 text-slate-500" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold text-white uppercase tracking-wider">Navigation</h4>
            <ul className="space-y-2 text-xs">
              <li>
                <button onClick={() => onNavigate('home')} className="hover:text-amber-300 transition-colors">Home Page</button>
              </li>
              <li>
                <button onClick={() => onNavigate('about')} className="hover:text-amber-300 transition-colors">About Mann Jain</button>
              </li>
              <li>
                <button onClick={() => onNavigate('services')} className="hover:text-amber-300 transition-colors">All 8 Services</button>
              </li>
              <li>
                <button onClick={() => onNavigate('academy')} className="hover:text-amber-300 transition-colors">Academy & Trading League</button>
              </li>
              <li>
                <button onClick={() => onNavigate('blog')} className="hover:text-amber-300 transition-colors">Financial Insights & Blog</button>
              </li>
              <li>
                <button onClick={() => onNavigate('contact')} className="hover:text-amber-300 transition-colors">Book Consultation</button>
              </li>
            </ul>
          </div>

          {/* Services Portfolio */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold text-white uppercase tracking-wider">Services</h4>
            <ul className="space-y-2 text-xs">
              <li>Equity Trading & Execution</li>
              <li>Aditya Birla Capital PMS</li>
              <li>SEBI Research Analyst Calls</li>
              <li>IPO Distribution & Syndicate</li>
              <li>Securities Risk Management</li>
              <li>Quantitative Algo Trading</li>
              <li>Offline Mentorship Masterclasses</li>
            </ul>
          </div>

          {/* Contact & Legal */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold text-white uppercase tracking-wider">Advisory Desk</h4>
            <div className="space-y-2 text-xs">
              <div className="flex items-start gap-2">
                <MapPin className="w-3.5 h-3.5 text-amber-400 shrink-0 mt-0.5" />
                <span>Palghar & Mumbai, Maharashtra, India</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-3.5 h-3.5 text-amber-400 shrink-0" />
                <span>advisory@sixthsenseinvestments.com</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                <span>WhatsApp: +91 98765 43210</span>
              </div>
              <div className="pt-2">
                <button 
                  onClick={() => onNavigate('admin')}
                  className="text-[11px] text-amber-400 hover:text-amber-300 underline font-medium"
                >
                  Admin Management Portal →
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Regulatory Disclaimers & Compliance Statement */}
        <div className="py-6 border-b border-slate-900/60 text-[11px] text-slate-500 space-y-2 leading-relaxed">
          <p>
            <strong>Regulatory & Statutory Disclosure:</strong> Sixth Sense Investments operates under the leadership of Mann Jain, 
            holding NISM certifications in Series V-B (Mutual Funds), Series VII (Securities Operations and Risk Management), 
            Series X-A & X-B (Investment Adviser Level 1 & 2), Series XV & XV-B (Research Analyst), and Series XXI-A & XXI-B (Portfolio Managers). 
            Registered with SEBI under Registration Number INZXXXXX8032.
          </p>
          <p>
            <strong>Institutional Association:</strong> Sixth Sense Investments acts in authorized channel alignment with Aditya Birla Capital / Aditya Birla Money 
            for depository operations, equity execution, and Portfolio Management Services (PMS). 
            Investments in the securities market are subject to market risks. Read all scheme-related documents carefully before investing.
          </p>
        </div>

        {/* Copyright & Agency Signature */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <p>© {new Date().getFullYear()} Sixth Sense Investments. All rights reserved.</p>
          <p className="flex items-center gap-1.5 text-[11px]">
            <span>Engineered by</span>
            <span className="font-semibold text-slate-300">WebYodas</span>
            <span className="text-amber-400">★</span>
          </p>
        </div>
      </div>
    </footer>
  );
};
