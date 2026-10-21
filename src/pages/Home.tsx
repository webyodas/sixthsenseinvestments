import React from 'react';
import { 
  ShieldCheck, Award, TrendingUp, ArrowRight, CheckCircle2, 
  BarChart3, Sparkles, Building2, Users, Flame, ChevronRight,
  ExternalLink, Layers
} from 'lucide-react';
import { SERVICES } from '../data/servicesData';
import { LeadForm } from '../components/LeadForm';
import { Calculator } from '../components/Calculator';

interface HomeProps {
  onNavigate: (page: string) => void;
  onOpenBooking: () => void;
}

export const Home: React.FC<HomeProps> = ({ onNavigate, onOpenBooking }) => {
  return (
    <div className="space-y-24 md:space-y-32">
      {/* HERO SECTION */}
      <section className="relative pt-36 md:pt-44 pb-16 md:pb-24 overflow-hidden">
        {/* Ambient Gradient Lights */}
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] bg-amber-500/10 rounded-full blur-[130px] pointer-events-none"></div>
        <div className="absolute top-1/3 right-10 w-[400px] h-[300px] bg-emerald-500/10 rounded-full blur-[140px] pointer-events-none"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
            
            {/* Left Column: Core Value Proposition */}
            <div className="lg:col-span-7 space-y-6 text-left">
              {/* Badge */}
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-slate-900/90 border border-amber-500/30 text-xs font-semibold text-amber-300 shadow-inner">
                <span className="flex h-2 w-2 rounded-full bg-emerald-400 animate-ping"></span>
                <span>SEBI Reg: INZXXXXX8032</span>
                <span className="text-slate-600">•</span>
                <span className="text-slate-300">NISM Certified Series (V-B to XXI)</span>
              </div>

              {/* Main Headline */}
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-white tracking-tight leading-[1.1]">
                Institutional Financial Intelligence. <br />
                <span className="gold-gradient-text">Disciplined Capital Growth.</span>
              </h1>

              {/* Subheadline */}
              <p className="text-base sm:text-lg text-slate-300 leading-relaxed max-w-2xl font-normal">
                Founded by <strong>Mann Jain</strong> (SEBI Registered Research Analyst & Trader). 
                We combine quantitative price-action models, strict risk management, and 
                institutional Portfolio Management Services in authorized channel partnership with 
                <strong className="text-amber-300"> Aditya Birla Capital</strong>.
              </p>

              {/* Key Bullet Highlights */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2 text-xs text-slate-300 font-medium">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>5+ Years Registered RIA Experience</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>Aditya Birla Capital Execution Security</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>Funded Trading Leagues & Offline Academy</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>₹4.15L+ Event-Day Benchmark Execution</span>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="pt-4 flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
                <button
                  onClick={onOpenBooking}
                  className="px-7 py-3.5 rounded-xl font-bold text-sm bg-gradient-to-r from-amber-500 via-amber-400 to-amber-500 text-slate-950 shadow-xl shadow-amber-500/25 hover:from-amber-400 hover:to-amber-300 transition-all active:scale-95 flex items-center justify-center gap-2 uppercase tracking-wider"
                >
                  <span>Book Portfolio Consultation</span>
                  <ArrowRight className="w-4 h-4" />
                </button>

                <button
                  onClick={() => onNavigate('services')}
                  className="px-6 py-3.5 rounded-xl font-semibold text-sm bg-slate-900/80 hover:bg-slate-800 text-slate-200 border border-slate-800 transition-colors flex items-center justify-center gap-2"
                >
                  <span>Explore 8 Advisory Services</span>
                  <ChevronRight className="w-4 h-4 text-slate-400" />
                </button>
              </div>

              {/* Instagram Social Proof Pill */}
              <div className="pt-2">
                <a
                  href="https://www.instagram.com/sixthsenseinvestments/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-xs text-slate-400 hover:text-white transition-colors bg-slate-900/40 border border-slate-800/80 px-3 py-1.5 rounded-full"
                >
                  <img 
                    src="/assets/images/profile_pic_150.jpg" 
                    alt="Mann Jain" 
                    className="w-5 h-5 rounded-full border border-amber-400"
                  />
                  <span>Join 3,770+ investors on Instagram @sixthsenseinvestments</span>
                  <ExternalLink className="w-3 h-3 text-slate-500" />
                </a>
              </div>
            </div>

            {/* Right Column: Hero Visual Card (Authentic Mann Jain Trade Desk) */}
            <div className="lg:col-span-5 relative">
              <div className="relative mx-auto max-w-md">
                {/* Decorative Frame Glow */}
                <div className="absolute -inset-1 bg-gradient-to-r from-amber-500/30 to-emerald-500/30 rounded-3xl blur-xl opacity-75 animate-pulse"></div>

                <div className="relative glass-card rounded-2xl overflow-hidden border border-slate-700/80 shadow-2xl">
                  {/* Image from authentic profile (Mann Jain Budget Day Terminal) */}
                  <div className="relative h-80 overflow-hidden bg-slate-950">
                    <img 
                      src="/assets/images/img_4.jpg" 
                      alt="Mann Jain - Sixth Sense Investments Trading Desk" 
                      className="w-full h-full object-cover object-top hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-transparent"></div>
                    
                    <div className="absolute top-3 left-3 bg-slate-950/80 border border-amber-500/40 backdrop-blur-md px-2.5 py-1 rounded-full flex items-center gap-1.5 text-[11px] font-bold text-amber-300">
                      <Flame className="w-3.5 h-3.5 text-amber-400 fill-amber-400" />
                      <span>Verified Trading Desk</span>
                    </div>

                    <div className="absolute bottom-3 left-3 right-3 p-3 bg-slate-950/80 border border-slate-800/90 rounded-xl backdrop-blur-md">
                      <div className="flex items-center justify-between">
                        <div>
                          <p className="text-[10px] uppercase font-bold text-slate-400 tracking-wider">Founder & Analyst</p>
                          <p className="text-sm font-bold text-white">Mann Jain (SEBI R.A.)</p>
                        </div>
                        <div className="text-right">
                          <span className="text-[10px] text-emerald-400 font-bold bg-emerald-500/10 px-2 py-0.5 rounded border border-emerald-500/20">
                            +₹4,15,522.50
                          </span>
                          <p className="text-[9px] text-slate-400 mt-0.5">Budget Day Net Alpha</p>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Card Lower Metrics */}
                  <div className="p-5 space-y-3 bg-slate-950/90">
                    <div className="flex items-center justify-between text-xs pb-2 border-b border-slate-800">
                      <span className="text-slate-400">Institutional Custody:</span>
                      <span className="font-bold text-amber-300">Aditya Birla Capital</span>
                    </div>
                    <div className="flex items-center justify-between text-xs pb-2 border-b border-slate-800">
                      <span className="text-slate-400">Trading Methodology:</span>
                      <span className="font-semibold text-slate-200">Price Action & Quantitative Risk</span>
                    </div>
                    <div className="flex items-center justify-between text-xs">
                      <span className="text-slate-400">Philosophy:</span>
                      <span className="font-semibold text-emerald-400 italic">"Trust The Process 📈💸"</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* INSTITUTIONAL PARTNERSHIP BANNER */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="glass-panel rounded-2xl p-6 sm:p-8 border border-slate-800/90 relative overflow-hidden bg-gradient-to-r from-slate-950 via-slate-900 to-slate-950">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="flex items-center gap-4">
              <div className="w-14 h-14 rounded-2xl bg-amber-500/10 border border-amber-500/30 flex items-center justify-center shrink-0">
                <Building2 className="w-7 h-7 text-amber-400" />
              </div>
              <div>
                <div className="flex items-center gap-2">
                  <span className="text-xs uppercase font-extrabold tracking-wider text-amber-400">Authorized Channel Tie-Up</span>
                  <span className="bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 text-[10px] font-bold px-2 py-0.2 rounded">Official</span>
                </div>
                <h3 className="text-xl sm:text-2xl font-bold text-white tracking-tight">
                  In Strategic Association with Aditya Birla Capital
                </h3>
                <p className="text-xs sm:text-sm text-slate-400 mt-0.5">
                  Seamless execution, state-of-the-art depository operations, IPO bidding syndicate, and Portfolio Management Services (PMS).
                </p>
              </div>
            </div>

            <button
              onClick={() => onNavigate('about')}
              className="px-5 py-2.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-200 text-xs font-semibold shrink-0 transition-colors border border-slate-700 flex items-center gap-1.5"
            >
              <span>Verify Association Details</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </section>

      {/* CORE STATS TICKER STRIP */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
          <div className="glass-card rounded-2xl p-5 border border-slate-800 text-left">
            <div className="text-xs font-bold text-slate-400 uppercase tracking-wider">RIA Track Record</div>
            <div className="text-3xl font-extrabold text-white mt-1">5+ Years</div>
            <p className="text-[11px] text-emerald-400 mt-1 flex items-center gap-1">
              <ShieldCheck className="w-3 h-3" />
              <span>SEBI Compliant Fiduciary</span>
            </p>
          </div>

          <div className="glass-card rounded-2xl p-5 border border-slate-800 text-left">
            <div className="text-xs font-bold text-slate-400 uppercase tracking-wider">NISM Certifications</div>
            <div className="text-3xl font-extrabold gold-gradient-text mt-1">6 Series</div>
            <p className="text-[11px] text-slate-400 mt-1">Series V-B, VII, X, XV, XXI</p>
          </div>

          <div className="glass-card rounded-2xl p-5 border border-slate-800 text-left">
            <div className="text-xs font-bold text-slate-400 uppercase tracking-wider">Single Session Alpha</div>
            <div className="text-3xl font-extrabold text-emerald-400 mt-1">₹4.15 Lakh</div>
            <p className="text-[11px] text-slate-400 mt-1">Budget Day Verified Profit</p>
          </div>

          <div className="glass-card rounded-2xl p-5 border border-slate-800 text-left">
            <div className="text-xs font-bold text-slate-400 uppercase tracking-wider">Active Community</div>
            <div className="text-3xl font-extrabold text-white mt-1">3,770+</div>
            <p className="text-[11px] text-pink-400 mt-1">Traders & Investors on IG</p>
          </div>
        </div>
      </section>

      {/* 8 COMPREHENSIVE SERVICES GRID */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 space-y-12">
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-900 border border-slate-800 text-xs font-bold text-amber-400">
            <Layers className="w-3.5 h-3.5" />
            <span>Comprehensive Solutions</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight">
            Institutional-Grade Advisory for Every Market Stage
          </h2>
          <p className="text-slate-400 text-sm">
            Whether you are building long-term generational wealth, seeking daily quantitative alpha, 
            or mastering the financial markets through funded trading accounts.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {SERVICES.map((srv) => (
            <div 
              key={srv.id}
              className="glass-card rounded-2xl p-6 border border-slate-800 flex flex-col justify-between group hover:border-amber-500/40"
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded bg-amber-500/10 text-amber-300 border border-amber-500/20">
                    {srv.badge}
                  </span>
                  <BarChart3 className="w-5 h-5 text-slate-600 group-hover:text-amber-400 transition-colors" />
                </div>

                <div>
                  <h3 className="text-lg font-bold text-white group-hover:text-amber-300 transition-colors">
                    {srv.title}
                  </h3>
                  <p className="text-xs text-slate-400 mt-2 line-clamp-3 leading-relaxed">
                    {srv.description}
                  </p>
                </div>

                <div className="space-y-1.5 pt-2 border-t border-slate-800/80">
                  {srv.features.slice(0, 2).map((feat, idx) => (
                    <div key={idx} className="flex items-start gap-1.5 text-[11px] text-slate-300">
                      <span className="text-amber-400 font-bold">›</span>
                      <span className="line-clamp-1">{feat}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="pt-6">
                <button
                  onClick={() => onNavigate('services')}
                  className="w-full py-2 bg-slate-900 group-hover:bg-amber-500 group-hover:text-slate-950 text-slate-300 rounded-lg text-xs font-bold transition-all flex items-center justify-center gap-1.5"
                >
                  <span>Learn Details</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center pt-4">
          <button
            onClick={() => onNavigate('services')}
            className="inline-flex items-center gap-2 text-sm font-bold text-amber-400 hover:text-amber-300 transition-colors"
          >
            <span>View Full Service Matrix & Suitability Criteria</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </section>

      {/* FOUNDER SPOTLIGHT & QUALIFICATIONS */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="glass-panel rounded-3xl p-8 sm:p-12 border border-slate-800">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            
            {/* Founder Image & Real Gallery */}
            <div className="lg:col-span-5 space-y-4">
              <div className="relative rounded-2xl overflow-hidden border border-slate-700/80 shadow-2xl bg-slate-900">
                <img 
                  src="/assets/images/img_3.jpg" 
                  alt="Mann Jain - Founder of Sixth Sense Investments" 
                  className="w-full h-96 object-cover object-center"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent"></div>
                <div className="absolute bottom-4 left-4 right-4">
                  <div className="text-xs uppercase tracking-widest font-bold text-amber-400">Founder & Managing Director</div>
                  <div className="text-2xl font-black text-white">Mann Jain</div>
                  <p className="text-xs text-slate-300 font-medium mt-0.5">SEBI Registered Research Analyst • 5+ Years RIA</p>
                </div>
              </div>

              {/* Mini thumbnails strip from real Instagram posts */}
              <div className="grid grid-cols-3 gap-2">
                <div className="rounded-lg overflow-hidden border border-slate-800 h-20">
                  <img src="/assets/images/img_18.jpg" alt="Services Banner" className="w-full h-full object-cover" />
                </div>
                <div className="rounded-lg overflow-hidden border border-slate-800 h-20">
                  <img src="/assets/images/img_20.jpg" alt="Dehradun Trading Competition" className="w-full h-full object-cover" />
                </div>
                <div className="rounded-lg overflow-hidden border border-slate-800 h-20">
                  <img src="/assets/images/img_2.jpg" alt="Market Desk Session" className="w-full h-full object-cover" />
                </div>
              </div>
            </div>

            {/* Founder Credentials & Biography */}
            <div className="lg:col-span-7 space-y-6 text-left">
              <div>
                <span className="text-xs font-bold uppercase tracking-widest text-amber-400">The Architect Behind The Edge</span>
                <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight mt-1">
                  Meet Mann Jain
                </h2>
                <p className="text-slate-400 text-sm mt-1">
                  SEBI Registered Research Analyst • NISM Multi-Series Specialist • Trader
                </p>
              </div>

              <div className="text-sm text-slate-300 space-y-3 leading-relaxed">
                <p>
                  Mann Jain established <strong>Sixth Sense Investments</strong> to bridge the gap between speculative retail trading 
                  and institutional capital preservation. Over 5+ years of active Registered Investment Advisory (RIA) practice, 
                  he has engineered systematic models that exploit market imbalances with unmatched risk control.
                </p>
                <p>
                  Unlike generic financial influencers, Mann Jain’s advisory is grounded in rigorous regulatory certifications 
                  mandated by the Securities and Exchange Board of India (SEBI) and the National Institute of Securities Markets (NISM).
                </p>
              </div>

              {/* NISM Credentials Breakdown */}
              <div className="space-y-3 pt-2">
                <h4 className="text-xs font-bold text-white uppercase tracking-wider flex items-center gap-2">
                  <Award className="w-4 h-4 text-amber-400" />
                  <span>Verified NISM Certification Suite</span>
                </h4>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 text-xs">
                  <div className="bg-slate-900/80 border border-slate-800 p-2.5 rounded-lg">
                    <strong className="text-amber-300">Series XV & XV-B:</strong>
                    <p className="text-slate-400 text-[11px] mt-0.5">SEBI Research Analyst Certification</p>
                  </div>
                  <div className="bg-slate-900/80 border border-slate-800 p-2.5 rounded-lg">
                    <strong className="text-amber-300">Series XXI(A, B):</strong>
                    <p className="text-slate-400 text-[11px] mt-0.5">Portfolio Managers Certification</p>
                  </div>
                  <div className="bg-slate-900/80 border border-slate-800 p-2.5 rounded-lg">
                    <strong className="text-amber-300">Series VII:</strong>
                    <p className="text-slate-400 text-[11px] mt-0.5">Securities Operations & Risk Management</p>
                  </div>
                  <div className="bg-slate-900/80 border border-slate-800 p-2.5 rounded-lg">
                    <strong className="text-amber-300">Series X(A, B) & V(B):</strong>
                    <p className="text-slate-400 text-[11px] mt-0.5">Investment Adviser & Mutual Fund Specialist</p>
                  </div>
                </div>
              </div>

              <div className="pt-2">
                <button
                  onClick={() => onNavigate('about')}
                  className="px-6 py-2.5 rounded-lg bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold text-xs uppercase tracking-wider transition-colors flex items-center gap-2"
                >
                  <span>Read Full Founder Profile & Journey</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* WEALTH COMPOUNDING CALCULATOR */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6">
        <Calculator onBookCall={onOpenBooking} />
      </section>

      {/* ACADEMY & DEHRADUN COMPETITION HIGHLIGHT */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="glass-card rounded-3xl p-8 sm:p-12 border border-slate-800 relative overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            <div className="lg:col-span-7 space-y-5 text-left">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-xs font-bold text-emerald-300">
                <Award className="w-3.5 h-3.5" />
                <span>National Trading League 2026</span>
              </div>

              <h2 className="text-3xl sm:text-4xl font-black text-white tracking-tight">
                Represent Sixth Sense Investments in Dehradun
              </h2>

              <p className="text-sm text-slate-300 leading-relaxed">
                Sixth Sense Investments is forming an elite 5-member team for the prestigious National Trading & Investment Competition in Dehradun. 
                Selected candidates receive complete institutional training, a fully funded live trading account, and all travel expenses covered.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs text-slate-300">
                <div className="flex items-center gap-2">
                  <span className="text-amber-400">✓</span>
                  <span>Funded live trading capital provided</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-amber-400">✓</span>
                  <span>Hands-on offline classes in Palghar/Mumbai</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-amber-400">✓</span>
                  <span>National-level exposure & mentorship</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-amber-400">✓</span>
                  <span>Full travel & stay expenses sponsored</span>
                </div>
              </div>

              <div className="pt-2">
                <button
                  onClick={() => onNavigate('academy')}
                  className="px-6 py-3 rounded-xl bg-gradient-to-r from-emerald-500 to-teal-500 text-slate-950 font-bold text-xs uppercase tracking-wider hover:opacity-90 transition-opacity flex items-center gap-2"
                >
                  <span>Apply for Academy & Team Selection</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>

            <div className="lg:col-span-5">
              <div className="rounded-2xl overflow-hidden border border-slate-700 shadow-xl bg-slate-900">
                <img 
                  src="/assets/images/img_20.jpg" 
                  alt="Dehradun 2026 Sixth Sense Investments Team Announcement" 
                  className="w-full h-72 object-cover object-center"
                />
                <div className="p-4 bg-slate-950 text-left">
                  <span className="text-[10px] font-bold uppercase text-amber-400">Authentic Instagram Announcement</span>
                  <p className="text-xs text-slate-300 mt-1">
                    "Represent Sixth Sense Investments | Dehradun 2026. A prestigious trading championship conducted with full firm backing."
                  </p>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* LEAD CAPTURE SECTION */}
      <section id="consultation-form" className="max-w-4xl mx-auto px-4 sm:px-6">
        <LeadForm />
      </section>
    </div>
  );
};
