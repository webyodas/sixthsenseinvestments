import React from 'react';
import { ShieldCheck, Award, Building2, CheckCircle2, ArrowRight, ExternalLink } from 'lucide-react';

interface AboutProps {
  onOpenBooking: () => void;
  onNavigate: (page: string) => void;
}

export const About: React.FC<AboutProps> = ({ onOpenBooking, onNavigate }) => {
  const certifications = [
    {
      series: 'NISM Series XV & XV-B',
      title: 'SEBI Research Analyst Certification',
      desc: 'Mandatory statutory credential authorizing independent equity research, valuation modeling, and issuing public/private investment recommendations under SEBI (Research Analysts) Regulations, 2014.'
    },
    {
      series: 'NISM Series XXI(A & B)',
      title: 'Portfolio Managers Certification',
      desc: 'Comprehensive qualification in equity portfolio construction, asset allocation, alpha-beta decomposition, performance attribution, and regulatory compliance under SEBI (Portfolio Managers) Regulations.'
    },
    {
      series: 'NISM Series VII',
      title: 'Securities Operations and Risk Management',
      desc: 'Specialized certification in end-to-end trade lifecycle, clearing and settlement mechanisms, margin requirements, liquidity safeguards, and systemic risk mitigation.'
    },
    {
      series: 'NISM Series X(A & B)',
      title: 'Investment Adviser Certification (Level 1 & 2)',
      desc: 'Advanced fiduciary credentials for comprehensive financial planning, retirement advisory, tax structuring, and personal risk profiling.'
    },
    {
      series: 'NISM Series V(B)',
      title: 'Mutual Fund Foundation Certification',
      desc: 'In-depth mastery of pooled investment vehicles, NAV calculations, debt fund credit analysis, and equity index replication.'
    }
  ];

  const galleryImages = [
    { src: '/assets/images/img_4.jpg', caption: 'Budget Day Trading Session (+₹4.15 Lakh Profit)' },
    { src: '/assets/images/img_3.jpg', caption: 'Founder Mann Jain at Sixth Sense Trading Desk' },
    { src: '/assets/images/img_18.jpg', caption: 'Official Services Portfolio & Palghar Event' },
    { src: '/assets/images/img_20.jpg', caption: 'Dehradun National Trading League Announcement' },
    { src: '/assets/images/img_2.jpg', caption: 'Live Price Action Masterclass & Mentee Session' },
    { src: '/assets/images/img_12.jpg', caption: 'Community & Student Recognition Ceremony' },
    { src: '/assets/images/img_21.jpg', caption: 'Trading Team Strategy Briefing' },
    { src: '/assets/images/img_11.jpg', caption: 'Evening Market Wrap-up & Alpha Review' },
    { src: '/assets/images/profile_pic_150.jpg', caption: 'Official Sixth Sense Investments Seal' }
  ];

  return (
    <div className="pt-32 pb-24 space-y-20">
      {/* HEADER */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="text-left space-y-4 max-w-3xl">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-900 border border-slate-800 text-xs font-bold text-amber-400">
            <Award className="w-3.5 h-3.5" />
            <span>Firm Heritage & Founder Profile</span>
          </div>
          <h1 className="text-4xl sm:text-5xl font-black text-white tracking-tight">
            Bridging Retail Trading with <span className="gold-gradient-text">Institutional Precision</span>
          </h1>
          <p className="text-slate-300 text-base leading-relaxed">
            Founded by <strong>Mann Jain</strong>, Sixth Sense Investments has established itself as a premier 
            financial research and wealth advisory firm anchored by regulatory compliance, 
            quantitative price-action models, and strategic institutional partnerships.
          </p>
        </div>
      </section>

      {/* FOUNDER DEEP DIVE */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="glass-panel rounded-3xl p-8 sm:p-12 border border-slate-800">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            <div className="lg:col-span-5">
              <div className="relative rounded-2xl overflow-hidden border border-slate-700 shadow-2xl bg-slate-900">
                <img 
                  src="/assets/images/img_3.jpg" 
                  alt="Mann Jain Founder" 
                  className="w-full h-96 object-cover object-top"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent"></div>
                <div className="absolute bottom-4 left-4 right-4">
                  <div className="text-xs uppercase font-bold text-amber-400">Founder & SEBI R.A.</div>
                  <div className="text-2xl font-black text-white">Mann Jain</div>
                  <p className="text-xs text-slate-300 mt-0.5">5+ Years Registered Investment Advisory Track Record</p>
                </div>
              </div>
            </div>

            <div className="lg:col-span-7 space-y-5 text-left">
              <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
                The Journey: From Market Fascination to Institutional Rigor
              </h2>

              <p className="text-sm text-slate-300 leading-relaxed">
                "We started with zero knowledge, just like everyone else. But through thousands of screen hours, 
                rigorous backtesting, and an uncompromising respect for risk management, we mastered the craft 
                of extracting statistical alpha."
              </p>

              <p className="text-sm text-slate-300 leading-relaxed">
                Based out of Palghar and Mumbai with operations expanding across India, Mann Jain has trained dozens 
                of active traders and advised high-net-worth investors on systematic capital allocation. His approach 
                is defined by three core pillars:
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-2">
                <div className="bg-slate-900/80 border border-slate-800 p-3.5 rounded-xl">
                  <span className="text-xs font-bold text-amber-400">01. No Overthinking</span>
                  <p className="text-xs text-slate-400 mt-1">Pre-market preparation dictates every trade. Execution is mechanical.</p>
                </div>
                <div className="bg-slate-900/80 border border-slate-800 p-3.5 rounded-xl">
                  <span className="text-xs font-bold text-amber-400">02. Fiduciary Trust</span>
                  <p className="text-xs text-slate-400 mt-1">Direct custody and complete regulatory transparency for every client rupee.</p>
                </div>
                <div className="bg-slate-900/80 border border-slate-800 p-3.5 rounded-xl">
                  <span className="text-xs font-bold text-amber-400">03. Asymmetric Alpha</span>
                  <p className="text-xs text-slate-400 mt-1">Never risk ₹1 to make ₹1. Target minimum 1:3 risk-to-reward setups.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ADITYA BIRLA CAPITAL ASSOCIATION */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="glass-card rounded-3xl p-8 sm:p-12 border border-slate-800 space-y-8 text-left bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950">
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6 pb-6 border-b border-slate-800">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/20 text-xs font-bold text-amber-400 mb-2">
                <Building2 className="w-3.5 h-3.5" />
                <span>Authorized Channel Alignment</span>
              </div>
              <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
                Institutional Partnership: Aditya Birla Capital
              </h2>
            </div>
            <div className="flex items-center gap-2 bg-slate-900 border border-slate-800 px-4 py-2 rounded-xl text-xs font-semibold text-slate-300">
              <ShieldCheck className="w-4 h-4 text-emerald-400" />
              <span>Depository Security & Direct Custody</span>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-sm text-slate-300 leading-relaxed">
            <div className="space-y-2">
              <h4 className="font-bold text-white text-base">Direct Institutional Execution</h4>
              <p className="text-xs text-slate-400">
                Clients of Sixth Sense Investments benefit from the institutional infrastructure, high-speed order routing, 
                and robust depository facilities provided by Aditya Birla Capital.
              </p>
            </div>
            <div className="space-y-2">
              <h4 className="font-bold text-white text-base">SEBI-Regulated PMS Framework</h4>
              <p className="text-xs text-slate-400">
                Portfolio Management Services are managed with institutional oversight, professional custodial auditing, 
                and direct demat account segregation for complete capital safety.
              </p>
            </div>
            <div className="space-y-2">
              <h4 className="font-bold text-white text-base">Priority Primary Market Bidding</h4>
              <p className="text-xs text-slate-400">
                Direct syndicate coordination for Initial Public Offerings (IPO distribution) and Registrar & Transfer 
                Agent (RTA) services, ensuring seamless subscription and allotment tracking.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* REGULATORY CERTIFICATIONS (NISM & SEBI) */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 space-y-8">
        <div className="text-left space-y-2">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-900 border border-slate-800 text-xs font-bold text-amber-400">
            <ShieldCheck className="w-3.5 h-3.5" />
            <span>Statutory Compliance Matrix</span>
          </div>
          <h2 className="text-3xl font-bold text-white tracking-tight">
            NISM Certifications & SEBI Registration
          </h2>
          <p className="text-slate-400 text-sm">
            Strict adherence to the regulatory standards set by the Securities and Exchange Board of India (SEBI).
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {certifications.map((cert, idx) => (
            <div key={idx} className="glass-card rounded-2xl p-6 border border-slate-800 space-y-3 text-left">
              <span className="text-xs font-extrabold gold-gradient-text tracking-wider uppercase block">
                {cert.series}
              </span>
              <h3 className="text-base font-bold text-white">{cert.title}</h3>
              <p className="text-xs text-slate-400 leading-relaxed">{cert.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* AUTHENTIC INSTAGRAM ASSET GALLERY */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 space-y-8">
        <div className="text-left space-y-2">
          <span className="text-xs font-bold uppercase tracking-widest text-amber-400">Live From The Desk</span>
          <h2 className="text-3xl font-bold text-white tracking-tight">
            Authentic Visual Record (@sixthsenseinvestments)
          </h2>
          <p className="text-slate-400 text-sm">
            Real media captured across trading sessions, events, awards, and mentorship masterclasses.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {galleryImages.map((img, idx) => (
            <div key={idx} className="glass-card rounded-2xl overflow-hidden border border-slate-800 group">
              <div className="h-64 overflow-hidden bg-slate-900">
                <img 
                  src={img.src} 
                  alt={img.caption} 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="p-4 bg-slate-950 text-left border-t border-slate-800">
                <p className="text-xs font-medium text-slate-300">{img.caption}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 text-center space-y-6 pt-10">
        <h2 className="text-3xl font-bold text-white">Experience Institutional Financial Intelligence</h2>
        <p className="text-slate-300 text-sm max-w-xl mx-auto">
          Schedule a one-on-one portfolio consultation with Mann Jain to evaluate your risk exposure and compounding roadmap.
        </p>
        <button
          onClick={onOpenBooking}
          className="px-8 py-3.5 bg-gradient-to-r from-amber-500 to-amber-600 text-slate-950 font-bold rounded-xl text-sm shadow-xl shadow-amber-500/20 hover:from-amber-400 hover:to-amber-500 transition-all active:scale-95 uppercase tracking-wider"
        >
          Book Consultation Now
        </button>
      </section>
    </div>
  );
};
