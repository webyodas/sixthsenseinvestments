import React from 'react';
import { ArrowRight, ChevronRight, ShieldCheck } from 'lucide-react';

interface AboutProps {
  onOpenBooking: () => void;
  onNavigate: (page: string) => void;
}

export const About: React.FC<AboutProps> = ({ onOpenBooking, onNavigate }) => {
  const certifications = [
    {
      series: 'NISM Series XV & XV-B',
      title: 'SEBI Research Analyst Certification',
      desc: 'Mandatory statutory credential authorizing independent equity research, valuation modeling, and issuing investment recommendations under SEBI (Research Analysts) Regulations, 2014.'
    },
    {
      series: 'NISM Series XXI (A & B)',
      title: 'Portfolio Managers Certification',
      desc: 'Comprehensive qualification in equity portfolio construction, asset allocation, alpha-beta decomposition, performance attribution, and regulatory compliance under SEBI (Portfolio Managers) Regulations.'
    },
    {
      series: 'NISM Series VII',
      title: 'Securities Operations and Risk Management',
      desc: 'Specialized certification covering end-to-end trade lifecycle, clearing and settlement mechanisms, margin requirements, liquidity safeguards, and systemic risk mitigation.'
    },
    {
      series: 'NISM Series X (A & B)',
      title: 'Investment Adviser Certification (Level 1 & 2)',
      desc: 'Statutory fiduciary credentials for comprehensive financial planning, retirement advisory, and personal risk profiling.'
    },
    {
      series: 'NISM Series V(B)',
      title: 'Mutual Fund Foundation Certification',
      desc: 'In-depth mastery of pooled investment vehicles, NAV calculations, debt fund credit analysis, and equity index replication.'
    }
  ];

  const galleryImages = [
    { src: '/assets/images/logo_gold.png', caption: 'Official Sixth Sense Investments brand monogram' },
    { src: '/assets/images/img_4.jpg', caption: 'Budget day terminal execution (+₹4.15 Lakh net alpha)' },
    { src: '/assets/images/img_3.jpg', caption: 'Founder Mann Jain at the trading terminal' },
    { src: '/assets/images/img_18.jpg', caption: 'Services portfolio presentation at Palghar' },
    { src: '/assets/images/img_20.jpg', caption: 'National Trading League Dehradun 2026 delegation' },
    { src: '/assets/images/img_2.jpg', caption: 'Live price action mentorship cohort' },
    { src: '/assets/images/img_12.jpg', caption: 'Annual student and client recognition assembly' },
    { src: '/assets/images/img_21.jpg', caption: 'Quantitative trade briefing session' }
  ];

  return (
    <div className="pt-36 pb-24 space-y-24 text-left">
      {/* HEADER */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="space-y-4 max-w-3xl">
          <p className="text-xs text-[#d4af37] font-medium tracking-wide">
            Firm history & governance
          </p>
          <h1 className="font-serif text-4xl sm:text-6xl text-[#f1f4f8] leading-[1.08] tracking-tight">
            Bridging retail trading with institutional precision.
          </h1>
          <p className="text-base sm:text-lg text-[#8b9bb4] leading-relaxed font-normal">
            Founded by Mann Jain, Sixth Sense Investments operates on an uncompromising fiduciary philosophy: capital preservation first, mechanical execution, and verifiable compliance under SEBI regulations.
          </p>
        </div>
      </section>

      {/* FOUNDER DEEP DIVE */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          <div className="lg:col-span-5 space-y-3">
            <div className="aspect-[3/4] rounded-xl overflow-hidden bg-[#121720]">
              <img 
                src="/assets/images/img_3.jpg" 
                alt="Mann Jain, Founder & Research Analyst" 
                className="w-full h-full object-cover object-top"
              />
            </div>
            <p className="text-xs text-[#8b9bb4]">
              Mann Jain · SEBI Registered Research Analyst · Founder, Sixth Sense Investments
            </p>
          </div>

          <div className="lg:col-span-7 space-y-6">
            <h2 className="font-serif text-3xl sm:text-4xl text-[#f1f4f8]">
              The journey from screen hours to institutional rigor
            </h2>

            <div className="space-y-4 text-sm text-[#8b9bb4] leading-relaxed">
              <p>
                "We started with zero knowledge, just like everyone else. But through thousands of hours observing real market auction dynamics, testing hypotheses, and establishing strict loss boundaries, we mastered the science of asymmetric risk."
              </p>
              <p>
                Operating across Palghar, Mumbai, and pan-India client networks, Mann Jain has trained dozens of proprietary traders and advised investors across varied wealth brackets.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 pt-4">
              <div className="space-y-1">
                <span className="text-xs text-[#d4af37] font-medium">01 · Methodical</span>
                <p className="text-xs text-[#8b9bb4]">Pre-market scenarios dictate every execution. Emotion has no seat at the desk.</p>
              </div>
              <div className="space-y-1">
                <span className="text-xs text-[#d4af37] font-medium">02 · Fiduciary</span>
                <p className="text-xs text-[#8b9bb4]">Direct institutional custody with full statutory transparency under SEBI rules.</p>
              </div>
              <div className="space-y-1">
                <span className="text-xs text-[#d4af37] font-medium">03 · Asymmetric</span>
                <p className="text-xs text-[#8b9bb4]">Never risk ₹1 to make ₹1. We target minimum 1:3 reward-to-risk setups.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* STRATEGIC ALLIANCE: ADITYA BIRLA CAPITAL */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="bg-[#121720] rounded-xl p-8 sm:p-12 space-y-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-6">
            <div className="space-y-2">
              <p className="text-xs text-[#d4af37] font-medium">Authorized channel alliance</p>
              <h2 className="font-serif text-2xl sm:text-3xl text-[#f1f4f8]">
                Aditya Birla Capital institutional partnership
              </h2>
            </div>
            <div className="text-xs text-[#8b9bb4]">
              Direct demat custody and depository clearing
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-sm text-[#8b9bb4]">
            <div className="space-y-2">
              <h3 className="text-base font-serif text-[#f1f4f8]">Institutional order execution</h3>
              <p className="leading-relaxed">
                Sixth Sense Investments clients utilize high-speed routing engines, institutional liquidity pools, and advanced depository operations powered by Aditya Birla Capital.
              </p>
            </div>
            <div className="space-y-2">
              <h3 className="text-base font-serif text-[#f1f4f8]">Regulated PMS frameworks</h3>
              <p className="leading-relaxed">
                Portfolio Management Services follow strict regulatory boundaries, independent accounting audits, and segregation of client holdings into individual demat accounts.
              </p>
            </div>
            <div className="space-y-2">
              <h3 className="text-base font-serif text-[#f1f4f8]">Primary market syndicate</h3>
              <p className="leading-relaxed">
                Direct access to IPO distribution pipelines and direct liaison for physical share conversions via institutional Registrar & Transfer Agent desks.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* REGULATORY CERTIFICATIONS (NISM & SEBI) */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 space-y-8">
        <div className="space-y-2 max-w-2xl">
          <p className="text-xs text-[#d4af37] font-medium">Compliance matrix</p>
          <h2 className="font-serif text-3xl sm:text-4xl text-[#f1f4f8]">
            Statutory NISM certifications
          </h2>
          <p className="text-sm text-[#8b9bb4]">
            Official qualifications verified under the National Institute of Securities Markets and SEBI guidelines.
          </p>
        </div>

        <div className="space-y-6">
          {certifications.map((cert, idx) => (
            <div key={idx} className="py-6 grid grid-cols-1 md:grid-cols-12 gap-4 items-start">
              <div className="md:col-span-4 space-y-1">
                <span className="text-xs text-[#d4af37] font-medium">{cert.series}</span>
                <h3 className="font-serif text-lg text-[#f1f4f8]">{cert.title}</h3>
              </div>
              <div className="md:col-span-8">
                <p className="text-sm text-[#8b9bb4] leading-relaxed">{cert.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* AUTHENTIC GALLERY */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 space-y-8">
        <div className="space-y-2">
          <p className="text-xs text-[#d4af37] font-medium">Archival record</p>
          <h2 className="font-serif text-3xl sm:text-4xl text-[#f1f4f8]">
            Field documentation & live desk
          </h2>
          <p className="text-sm text-[#8b9bb4]">
            Photographs from live trading sessions, community mentoring, and national championship announcements.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {galleryImages.map((img, idx) => (
            <figure key={idx} className="space-y-2.5">
              <div className="aspect-[4/3] rounded-lg overflow-hidden bg-[#121720]">
                <img 
                  src={img.src} 
                  alt={img.caption} 
                  className="w-full h-full object-cover"
                />
              </div>
              <figcaption className="text-xs text-[#8b9bb4] leading-snug">
                {img.caption}
              </figcaption>
            </figure>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 pt-10">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
          <div className="space-y-2">
            <h2 className="font-serif text-2xl sm:text-3xl text-[#f1f4f8]">
              Ready to evaluate your portfolio structure?
            </h2>
            <p className="text-sm text-[#8b9bb4]">
              Schedule a direct consultation with Founder Mann Jain.
            </p>
          </div>
          <button
            onClick={onOpenBooking}
            className="px-8 py-3.5 bg-[#d4af37] hover:bg-[#e5c158] text-[#090c10] font-medium rounded text-sm transition-colors flex items-center gap-2 self-start md:self-auto"
          >
            <span>Book consultation</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </section>
    </div>
  );
};
