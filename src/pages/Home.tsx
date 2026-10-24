import React from 'react';
import { ShieldCheck, ArrowRight, ChevronRight, Check } from 'lucide-react';
import { SERVICES } from '../data/servicesData';
import { LeadForm } from '../components/LeadForm';
import { Calculator } from '../components/Calculator';
import { Logo } from '../components/Logo';

interface HomeProps {
  onNavigate: (page: string) => void;
  onOpenBooking: () => void;
}

export const Home: React.FC<HomeProps> = ({ onNavigate, onOpenBooking }) => {
  return (
    <div className="space-y-24 md:space-y-32">
      {/* HERO SECTION */}
      <section className="pt-36 md:pt-44 pb-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            
            {/* Left Column: Editorial Proposition */}
            <div className="lg:col-span-7 space-y-8 text-left">
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <Logo className="w-8 h-8 text-[#d4af37]" variant="gold" />
                  <span className="text-xs text-[#8b9bb4] font-medium">Sixth Sense Investments</span>
                </div>
                <p className="text-xs text-[#d4af37] font-medium tracking-wide">
                  SEBI Registration INZXXXXX8032 · NISM Series V to XXI
                </p>
                <h1 className="font-serif text-4xl sm:text-6xl text-[#f1f4f8] leading-[1.08] tracking-tight">
                  Institutional financial intelligence. Disciplined capital growth.
                </h1>
              </div>

              <p className="text-base sm:text-lg text-[#8b9bb4] leading-relaxed max-w-2xl font-normal">
                Founded by Mann Jain, SEBI Registered Research Analyst. We combine proprietary quantitative price-action models, institutional risk management, and Portfolio Management Services in direct channel partnership with Aditya Birla Capital.
              </p>

              <div className="flex flex-col sm:flex-row items-start sm:items-center gap-5 pt-2">
                <button
                  onClick={onOpenBooking}
                  className="px-8 py-3.5 rounded bg-[#d4af37] hover:bg-[#e5c158] text-[#090c10] font-medium text-sm transition-colors flex items-center gap-2"
                >
                  <span>Schedule portfolio consultation</span>
                  <ArrowRight className="w-4 h-4" />
                </button>

                <button
                  onClick={() => onNavigate('services')}
                  className="text-sm text-[#f1f4f8] hover:text-[#d4af37] flex items-center gap-1.5 py-2 font-medium transition-colors"
                >
                  <span>Explore advisory services</span>
                  <ChevronRight className="w-4 h-4" />
                </button>
              </div>

              {/* Quiet Social Grounding */}
              <div className="pt-2 text-xs text-[#8b9bb4] flex items-center gap-3">
                <span>Followed by 3,770+ active investors on Instagram</span>
                <span className="text-[#374151]">/</span>
                <a 
                  href="https://www.instagram.com/sixthsenseinvestments/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-[#d4af37] hover:underline"
                >
                  @sixthsenseinvestments
                </a>
              </div>
            </div>

            {/* Right Column: Hero Visual from Authentic Trade Desk */}
            <div className="lg:col-span-5">
              <figure className="space-y-3">
                <div className="aspect-[4/3] rounded-xl overflow-hidden bg-[#121720]">
                  <img 
                    src="/assets/images/img_18.jpg" 
                    alt="Budget day execution terminal at Sixth Sense Investments Palghar desk" 
                    className="w-full h-full object-cover object-bottom"
                  />
                </div>
                <figcaption className="text-left text-xs text-[#8b9bb4] flex justify-between items-baseline px-1">
                  <span>Budget Day Execution Terminal</span>
                  <span className="text-[#d4af37]">Palghar trading desk</span>
                </figcaption>
              </figure>
            </div>

          </div>
        </div>
      </section>

      {/* REFINED METRICS STRIP */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 py-10 text-left">
          <div className="space-y-1">
            <span className="font-serif text-3xl sm:text-4xl text-[#f1f4f8]">5+ Years</span>
            <p className="text-xs text-[#8b9bb4]">Registered investment advisory experience</p>
          </div>
          <div className="space-y-1">
            <span className="font-serif text-3xl sm:text-4xl text-[#d4af37]">6 Series</span>
            <p className="text-xs text-[#8b9bb4]">Verified NISM statutory certifications</p>
          </div>
          <div className="space-y-1">
            <span className="font-serif text-3xl sm:text-4xl text-[#f1f4f8]">₹4.15 Lakh</span>
            <p className="text-xs text-[#8b9bb4]">Single-session budget day net alpha</p>
          </div>
          <div className="space-y-1">
            <span className="font-serif text-3xl sm:text-4xl text-[#f1f4f8]">3,770+</span>
            <p className="text-xs text-[#8b9bb4]">Active traders and investors in community</p>
          </div>
        </div>
      </section>

      {/* INSTITUTIONAL PARTNERSHIP SECTION */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="bg-[#121720] rounded-xl p-8 sm:p-12 text-left space-y-6">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-6">
            <div className="space-y-2">
              <p className="text-xs text-[#d4af37] font-medium">Strategic alliance</p>
              <h2 className="font-serif text-2xl sm:text-3xl text-[#f1f4f8]">
                Authorized channel partnership with Aditya Birla Capital
              </h2>
            </div>
            <button
              onClick={() => onNavigate('about')}
              className="text-xs text-[#8b9bb4] hover:text-[#f1f4f8] flex items-center gap-1 font-medium"
            >
              <span>Review alliance disclosures</span>
              <ChevronRight className="w-3.5 h-3.5" />
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-sm text-[#8b9bb4]">
            <div className="space-y-2">
              <h3 className="text-base font-serif text-[#f1f4f8]">Direct custodial security</h3>
              <p className="leading-relaxed">
                Client capital and demat securities remain under direct institutional custody at Aditya Birla Capital with zero commingling of client funds.
              </p>
            </div>
            <div className="space-y-2">
              <h3 className="text-base font-serif text-[#f1f4f8]">SEBI-regulated PMS</h3>
              <p className="leading-relaxed">
                Access statutory Portfolio Management Services structured with institutional asset allocation, systematic rebalancing, and independent auditing.
              </p>
            </div>
            <div className="space-y-2">
              <h3 className="text-base font-serif text-[#f1f4f8]">Primary market syndicate</h3>
              <p className="leading-relaxed">
                Direct allotment channels for Initial Public Offerings (IPO distribution) and physical share dematerialization through institutional RTA desks.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* EDITORIAL SERVICES INDEX */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 space-y-12 text-left">
        <div className="space-y-3 max-w-2xl">
          <p className="text-xs text-[#d4af37] font-medium">Services index</p>
          <h2 className="font-serif text-3xl sm:text-4xl text-[#f1f4f8]">
            Advisory and execution matrix
          </h2>
          <p className="text-sm text-[#8b9bb4]">
            Comprehensive capital management spanning high-conviction research calls, quantitative execution, and retirement advisory.
          </p>
        </div>

        <div className="space-y-4">
          {SERVICES.map((srv) => (
            <div 
              key={srv.id}
              className="py-6 flex flex-col md:flex-row md:items-start justify-between gap-6 group hover:bg-[#121720]/50 px-2 rounded transition-colors"
            >
              <div className="md:w-1/3 space-y-1">
                <p className="text-xs text-[#d4af37]">{srv.badge}</p>
                <h3 className="font-serif text-xl text-[#f1f4f8] group-hover:text-[#d4af37] transition-colors">
                  {srv.title}
                </h3>
              </div>

              <div className="md:w-1/2 space-y-2">
                <p className="text-sm text-[#8b9bb4] leading-relaxed">
                  {srv.description}
                </p>
                <p className="text-xs text-[#8b9bb4]">
                  <strong className="text-[#f1f4f8]">Target profile:</strong> {srv.idealFor}
                </p>
              </div>

              <div className="md:w-1/6 flex md:justify-end items-center">
                <button
                  onClick={() => onNavigate('services')}
                  className="text-xs font-medium text-[#f1f4f8] group-hover:text-[#d4af37] flex items-center gap-1 transition-colors"
                >
                  <span>Specifications</span>
                  <ChevronRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* FOUNDER PROFILE & CREDENTIALS */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center text-left">
          
          <div className="lg:col-span-5 space-y-4">
            <figure className="space-y-3">
              <div className="aspect-[3/4] rounded-xl overflow-hidden bg-[#121720]">
                <img 
                  src="/assets/images/img_3.jpg" 
                  alt="Mann Jain, Founder of Sixth Sense Investments" 
                  className="w-full h-full object-cover object-top"
                />
              </div>
              <figcaption className="text-xs text-[#8b9bb4]">
                Mann Jain, Founder & Research Analyst at Sixth Sense Investments
              </figcaption>
            </figure>
          </div>

          <div className="lg:col-span-7 space-y-6">
            <div className="space-y-2">
              <p className="text-xs text-[#d4af37] font-medium">Leadership & governance</p>
              <h2 className="font-serif text-3xl sm:text-4xl text-[#f1f4f8]">
                Groundwork, discipline, and verifiable edge
              </h2>
            </div>

            <div className="space-y-4 text-sm text-[#8b9bb4] leading-relaxed">
              <p>
                Sixth Sense Investments was founded by Mann Jain to provide retail traders and family wealth offices with the same analytical depth, discipline, and capital preservation standards employed by institutional desks.
              </p>
              <p>
                With over five years of active registered advisory practice, his trading philosophy centers around mechanical rule adherence, statistical edge, and rigorous pre-market preparation.
              </p>
            </div>

            {/* Certifications Table */}
            <div className="space-y-3 pt-2">
              <p className="text-xs text-[#f1f4f8] font-medium">NISM Statutory Certification Suite</p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
                <div className="p-3 bg-[#121720] rounded space-y-1">
                  <span className="text-[#d4af37] font-medium">Series XV & XV-B</span>
                  <p className="text-[#8b9bb4]">SEBI Research Analyst Certification</p>
                </div>
                <div className="p-3 bg-[#121720] rounded space-y-1">
                  <span className="text-[#d4af37] font-medium">Series XXI (A, B)</span>
                  <p className="text-[#8b9bb4]">Portfolio Managers Regulatory Certification</p>
                </div>
                <div className="p-3 bg-[#121720] rounded space-y-1">
                  <span className="text-[#d4af37] font-medium">Series VII</span>
                  <p className="text-[#8b9bb4]">Securities Operations & Risk Management</p>
                </div>
                <div className="p-3 bg-[#121720] rounded space-y-1">
                  <span className="text-[#d4af37] font-medium">Series X(A, B) & V(B)</span>
                  <p className="text-[#8b9bb4]">Investment Adviser & Mutual Fund Specialist</p>
                </div>
              </div>
            </div>

            <div className="pt-2">
              <button
                onClick={() => onNavigate('about')}
                className="text-xs text-[#d4af37] hover:underline flex items-center gap-1 font-medium"
              >
                <span>Read detailed professional bio & regulatory filings</span>
                <ChevronRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>

        </div>
      </section>

      {/* WEALTH COMPOUNDING SIMULATOR */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6">
        <Calculator onBookCall={onOpenBooking} />
      </section>

      {/* ACADEMY & DEHRADUN COMPETITION SHOWCASE */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="bg-[#121720] rounded-xl p-8 sm:p-12 text-left">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            
            <div className="lg:col-span-7 space-y-6">
              <div className="space-y-2">
                <p className="text-xs text-[#d4af37] font-medium">National Trading League 2026</p>
                <h2 className="font-serif text-3xl sm:text-4xl text-[#f1f4f8]">
                  Represent Sixth Sense Investments in Dehradun
                </h2>
              </div>

              <p className="text-sm text-[#8b9bb4] leading-relaxed">
                Sixth Sense Investments is forming a five-member proprietary trading delegation for the National Investment & Trading Championship in Dehradun. Selected candidates receive intensive offline training, a live funded trading account, and fully sponsored logistics.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs text-[#8b9bb4]">
                <div className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-[#d4af37] shrink-0" />
                  <span>Funded live market capital allocation</span>
                </div>
                <div className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-[#d4af37] shrink-0" />
                  <span>Palghar & Mumbai offline masterclasses</span>
                </div>
                <div className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-[#d4af37] shrink-0" />
                  <span>Real-time order flow and auction theory</span>
                </div>
                <div className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-[#d4af37] shrink-0" />
                  <span>Full travel and lodging sponsored</span>
                </div>
              </div>

              <div className="pt-2">
                <button
                  onClick={() => onNavigate('academy')}
                  className="px-6 py-3 rounded bg-[#d4af37] hover:bg-[#e5c158] text-[#090c10] font-medium text-xs transition-colors flex items-center gap-2"
                >
                  <span>Apply for mentorship and team selection</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>

            <div className="lg:col-span-5">
              <figure className="space-y-3">
                <div className="aspect-[4/3] rounded-xl overflow-hidden bg-[#090c10]">
                  <img 
                    src="/assets/images/img_20.jpg" 
                    alt="Mann Jain at Sixth Sense Investments proprietary trading station" 
                    className="w-full h-full object-cover"
                  />
                </div>
                <figcaption className="text-xs text-[#8b9bb4]">
                  Proprietary algorithmic execution station & research desk
                </figcaption>
              </figure>
            </div>

          </div>
        </div>
      </section>

      {/* LEAD CONSULTATION FORM */}
      <section id="consultation-form" className="max-w-4xl mx-auto px-4 sm:px-6">
        <LeadForm />
      </section>
    </div>
  );
};
