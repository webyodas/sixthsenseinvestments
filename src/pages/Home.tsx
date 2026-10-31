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
                <div className="flex flex-wrap items-center gap-3">
                  <div className="flex items-center gap-2">
                    <Logo className="w-7 h-7 text-[#d4af37]" variant="gold" />
                    <span className="text-xs text-[#8b9bb4] font-medium">Sixth Sense Investments</span>
                  </div>
                  <span className="text-[#374151]">/</span>
                  <div className="inline-flex items-center gap-2 px-2.5 py-1 rounded bg-[#121720] border border-[#1e2638]">
                    <img 
                      src="/assets/images/aditya_birla_sun.png" 
                      alt="Aditya Birla Capital" 
                      className="h-3.5 w-auto object-contain"
                    />
                    <span className="text-xs text-[#d4af37] font-medium">
                      Aditya Birla Capital Partner
                    </span>
                  </div>
                </div>
                <p className="text-xs text-[#8b9bb4] font-medium tracking-wide">
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

            {/* Right Column: Hero Visual - Official Corporate Presence */}
            <div className="lg:col-span-5">
              <figure className="space-y-3 relative">
                <div className="aspect-[4/5] rounded-xl overflow-hidden bg-[#121720] relative">
                  <img 
                    src="/assets/images/img_3.jpg" 
                    alt="Mann Jain, Founder & Research Analyst - Sixth Sense Investments in partnership with Aditya Birla Capital" 
                    className="w-full h-full object-cover object-top"
                  />
                  {/* Floating Official Alliance Badge on the image */}
                  <div className="absolute top-4 right-4 bg-[#090c10]/95 backdrop-blur-md border border-[#1e2638] rounded-lg px-3 py-2 flex items-center gap-2.5 shadow-xl">
                    <img 
                      src="/assets/images/aditya_birla_sun.png" 
                      alt="Aditya Birla Capital Emblem" 
                      className="h-5 w-auto object-contain"
                    />
                    <div className="text-left border-l border-[#1e2638] pl-2.5">
                      <span className="block text-[9px] text-[#8b9bb4] uppercase tracking-wider font-medium">Channel Alliance</span>
                      <span className="block text-xs font-semibold text-[#f1f4f8]">Aditya Birla Capital</span>
                    </div>
                  </div>
                </div>
                <figcaption className="text-left text-xs text-[#8b9bb4] flex justify-between items-baseline px-1">
                  <span>Mann Jain · Founder & Research Analyst</span>
                  <span className="text-[#d4af37] font-medium">Aditya Birla Capital Partner</span>
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

      {/* INSTITUTIONAL ALLIANCE & ADITYA BIRLA CAPITAL AFFILIATION */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="bg-[#121720] border border-[#1e2638] rounded-2xl p-8 sm:p-14 text-left space-y-10 relative overflow-hidden">
          
          {/* Subtle warm ambient highlight */}
          <div className="absolute top-0 right-0 w-96 h-96 bg-[#d4af37]/5 rounded-full blur-3xl pointer-events-none" />

          {/* Section Header with Official Dual Branding */}
          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-8 pb-8 border-b border-[#1e2638]">
            <div className="space-y-3 max-w-3xl">
              <div className="flex items-center gap-2 text-xs text-[#d4af37] font-medium">
                <ShieldCheck className="w-4 h-4 text-[#d4af37]" />
                <span>Institutional Affiliation & Strategic Channel Partnership</span>
              </div>
              <h2 className="font-serif text-3xl sm:text-4xl text-[#f1f4f8] leading-tight">
                Direct Corporate Alliance with Aditya Birla Capital
              </h2>
              <p className="text-sm sm:text-base text-[#8b9bb4] leading-relaxed">
                Sixth Sense Investments operates in official channel alliance with Aditya Birla Capital. Our clients benefit from the analytical agility and quantitative rigor of a boutique research desk paired with the custodial safety, clearing depth, and multi-asset wealth management architecture of a ₹5+ Lakh Crore Indian conglomerate.
              </p>
            </div>

            {/* Official Aditya Birla Capital Logo Crest Card */}
            <div className="p-4 rounded-xl bg-[#090c10] border border-[#1e2638] flex items-center gap-4 shrink-0 shadow-lg">
              <img 
                src="/assets/images/aditya_birla_sun.png" 
                alt="Aditya Birla Capital Official Emblem" 
                className="h-10 w-auto object-contain"
              />
              <div className="text-left border-l border-[#1e2638] pl-3.5 pr-1">
                <span className="block text-[10px] text-[#8b9bb4] font-medium uppercase tracking-wider">Corporate Alliance</span>
                <span className="block text-base font-semibold text-[#f1f4f8]">Aditya Birla Capital</span>
                <span className="block text-xs text-[#d4af37]">Stocks & Securities Desk</span>
              </div>
            </div>
          </div>

          {/* Core Institutional Synergy Pillars */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            
            <div className="p-6 rounded-xl bg-[#090c10]/80 border border-[#1e2638] space-y-3">
              <div className="w-8 h-8 rounded-lg bg-[#d4af37]/10 flex items-center justify-center text-[#d4af37] font-serif text-sm">
                01
              </div>
              <h3 className="font-serif text-lg text-[#f1f4f8]">Institutional Custody</h3>
              <p className="text-xs text-[#8b9bb4] leading-relaxed">
                All client funds and demat securities reside directly with Aditya Birla Capital Ltd (SEBI Reg. No. INZ000172636). Zero pooling or commingling of client funds.
              </p>
            </div>

            <div className="p-6 rounded-xl bg-[#090c10]/80 border border-[#1e2638] space-y-3">
              <div className="w-8 h-8 rounded-lg bg-[#d4af37]/10 flex items-center justify-center text-[#d4af37] font-serif text-sm">
                02
              </div>
              <h3 className="font-serif text-lg text-[#f1f4f8]">Regulated PMS Access</h3>
              <p className="text-xs text-[#8b9bb4] leading-relaxed">
                Direct access to statutory Portfolio Management Services, multi-cap discretionary strategies, and audited factor tilts managed under SEBI compliance standards.
              </p>
            </div>

            <div className="p-6 rounded-xl bg-[#090c10]/80 border border-[#1e2638] space-y-3">
              <div className="w-8 h-8 rounded-lg bg-[#d4af37]/10 flex items-center justify-center text-[#d4af37] font-serif text-sm">
                03
              </div>
              <h3 className="font-serif text-lg text-[#f1f4f8]">IPO Allocation Syndicate</h3>
              <p className="text-xs text-[#8b9bb4] leading-relaxed">
                Direct primary market allocation desks for Mainboard and SME Initial Public Offerings (IPO), rights issues, and Sovereign Gold Bonds (SGBs).
              </p>
            </div>

            <div className="p-6 rounded-xl bg-[#090c10]/80 border border-[#1e2638] space-y-3">
              <div className="w-8 h-8 rounded-lg bg-[#d4af37]/10 flex items-center justify-center text-[#d4af37] font-serif text-sm">
                04
              </div>
              <h3 className="font-serif text-lg text-[#f1f4f8]">Share Dematerialization</h3>
              <p className="text-xs text-[#8b9bb4] leading-relaxed">
                Direct offline and physical facilitation for converting physical paper share certificates into active digital demat holdings with registrar and transfer agents (RTA).
              </p>
            </div>

          </div>

          {/* Authentic Founder Quote & Institutional Disclosures */}
          <div className="p-6 rounded-xl bg-[#090c10] border border-[#1e2638] flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
            <div className="flex items-start gap-4 max-w-2xl text-left">
              <div className="w-10 h-10 rounded-xl bg-[#121720] border border-[#d4af37]/40 flex items-center justify-center shrink-0 mt-0.5 shadow-sm">
                <Logo className="w-5 h-5 text-[#d4af37]" variant="gold" />
              </div>
              <div className="space-y-1">
                <p className="text-xs sm:text-sm text-[#f1f4f8] italic leading-relaxed">
                  &ldquo;Success in Indian financial markets requires deep institutional backing, disciplined risk controls, and unwavering regulatory compliance. Our alliance with Aditya Birla Capital delivers that gold standard to every client.&rdquo;
                </p>
                <div className="flex flex-wrap items-center gap-2 text-[11px] text-[#8b9bb4]">
                  <span className="text-[#f1f4f8] font-semibold">Mann Jain</span>
                  <span className="text-[#374151]">·</span>
                  <span className="text-[#d4af37]">Founder & Research Analyst</span>
                  <span className="text-[#374151]">·</span>
                  <span>Channel Partner Liaison (<a href="mailto:mannjain.abm@gmail.com" className="text-[#8b9bb4] hover:text-[#d4af37] underline">mannjain.abm@gmail.com</a>)</span>
                </div>
              </div>
            </div>

            <div className="flex items-center gap-3 shrink-0">
              <button
                onClick={onOpenBooking}
                className="px-5 py-2.5 rounded bg-[#d4af37] hover:bg-[#e5c158] text-[#090c10] font-medium text-xs transition-colors flex items-center gap-1.5"
              >
                <span>Open Partner Demat Account</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
              <button
                onClick={() => onNavigate('about')}
                className="px-4 py-2.5 rounded border border-[#1e2638] text-xs text-[#8b9bb4] hover:text-[#f1f4f8] hover:border-[#8b9bb4] transition-colors"
              >
                View Disclosures
              </button>
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
                  src="/assets/images/img_18.jpg" 
                  alt="Mann Jain trading terminal on Union Budget Day" 
                  className="w-full h-full object-cover object-bottom"
                />
              </div>
              <figcaption className="text-xs text-[#8b9bb4]">
                Union Budget Day Live Terminal · ₹4,15,522.50 net intraday alpha booked under rule-based risk limits
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
                    alt="Mann Jain announcing Dehradun 2026 National Competition at Sixth Sense trading station" 
                    className="w-full h-full object-cover"
                  />
                </div>
                <figcaption className="text-xs text-[#8b9bb4]">
                  Dehradun 2026 National Competition Announcement · Mann Jain at the proprietary execution station
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
