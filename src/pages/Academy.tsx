import React from 'react';
import { ArrowRight, Check } from 'lucide-react';

interface AcademyProps {
  onApply: () => void;
}

export const Academy: React.FC<AcademyProps> = ({ onApply }) => {
  const curriculum = [
    {
      module: 'Module 01',
      title: 'Market Structure & Liquidity Dynamics',
      topics: [
        'How market makers engineer liquidity pools',
        'Identifying accumulation and distribution ranges',
        'Auction Market Theory & Volume Profile (VPOC, VAL, VAH)',
        'Pre-market gap analysis and institutional open triggers'
      ]
    },
    {
      module: 'Module 02',
      title: 'Advanced Price Action & Order Flow',
      topics: [
        'Fair Value Gaps (FVG) and institutional imbalances',
        'Liquidity sweeps & multi-timeframe structural shifts',
        'VWAP bands and standard deviation mean-reversion setups',
        'Precision entry timing with 1:3+ risk-to-reward ratios'
      ]
    },
    {
      module: 'Module 03',
      title: 'Derivatives, Options Greeks & Volatility',
      topics: [
        'Decoding Option Chain Open Interest (OI) build-ups',
        'Mastering Delta, Gamma scalping, Theta decay & Vega risk',
        'Event-day strategies (Budget Day, RBI Policy, Earnings)',
        'Hedging spot portfolios with asymmetric index options'
      ]
    },
    {
      module: 'Module 04',
      title: 'Psychological Mastery & Funded Execution',
      topics: [
        'Eliminating FOMO and revenge trading with strict daily stop limits',
        'Trade journaling and mechanical statistical audit',
        'Managing funded accounts without emotional drawdown',
        'Transitioning from retail speculation to institutional consistency'
      ]
    }
  ];

  return (
    <div className="pt-36 pb-24 space-y-24 text-left">
      {/* HEADER */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="space-y-4 max-w-3xl">
          <p className="text-xs text-[#d4af37] font-medium tracking-wide">
            Sixth Sense Academy
          </p>
          <h1 className="font-serif text-4xl sm:text-6xl text-[#f1f4f8] leading-[1.08] tracking-tight">
            Learn to trade real liquidity with funded capital.
          </h1>
          <p className="text-base sm:text-lg text-[#8b9bb4] leading-relaxed font-normal">
            Hands-on offline mentorship masterclasses in Palghar & Mumbai conducted directly by Founder Mann Jain. Pure institutional price action, risk mechanics, and national league competition.
          </p>
        </div>
      </section>

      {/* DEHRADUN COMPETITION SHOWCASE */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="bg-[#121720] rounded-xl p-8 sm:p-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            
            <div className="lg:col-span-7 space-y-6">
              <div className="space-y-2">
                <p className="text-xs text-[#d4af37] font-medium">Dehradun 2026 National Championship</p>
                <h2 className="font-serif text-3xl sm:text-4xl text-[#f1f4f8]">
                  Represent Sixth Sense Investments
                </h2>
              </div>

              <p className="text-sm text-[#8b9bb4] leading-relaxed">
                A prestigious Investment & Trading Competition is being conducted in Dehradun, and Sixth Sense Investments is selecting an elite five-member delegation to compete under the firm banner.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs text-[#8b9bb4]">
                <div className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-[#d4af37] shrink-0" />
                  <span>Comprehensive offline trading curriculum</span>
                </div>
                <div className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-[#d4af37] shrink-0" />
                  <span>Funded live market capital</span>
                </div>
                <div className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-[#d4af37] shrink-0" />
                  <span>Direct personal mentorship from Mann Jain</span>
                </div>
                <div className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-[#d4af37] shrink-0" />
                  <span>All travel, boarding, and stay sponsored</span>
                </div>
              </div>

              <div className="pt-2">
                <button
                  onClick={onApply}
                  className="px-6 py-3 rounded bg-[#d4af37] hover:bg-[#e5c158] text-[#090c10] font-medium text-xs transition-colors flex items-center gap-2"
                >
                  <span>Apply for cohort & team selection</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>

            <div className="lg:col-span-5">
              <figure className="space-y-3">
                <div className="aspect-[4/3] rounded-xl overflow-hidden bg-[#090c10]">
                  <img 
                    src="/assets/images/img_20.jpg" 
                    alt="Dehradun 2026 Official Delegation Poster" 
                    className="w-full h-full object-cover"
                  />
                </div>
                <figcaption className="text-xs text-[#8b9bb4]">
                  Official Dehradun 2026 Trading Championship poster
                </figcaption>
              </figure>
            </div>

          </div>
        </div>
      </section>

      {/* CURRICULUM BREAKDOWN */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 space-y-8">
        <div className="space-y-2 max-w-2xl">
          <p className="text-xs text-[#d4af37] font-medium">Syllabus breakdown</p>
          <h2 className="font-serif text-3xl sm:text-4xl text-[#f1f4f8]">
            Four core modules of institutional trading
          </h2>
          <p className="text-sm text-[#8b9bb4]">
            Constructed to transition participants from speculative retail mistakes to systematic execution.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {curriculum.map((item, idx) => (
            <div key={idx} className="bg-[#121720] rounded-xl p-8 space-y-4">
              <span className="text-xs text-[#d4af37] font-medium">{item.module}</span>
              <h3 className="font-serif text-xl text-[#f1f4f8]">{item.title}</h3>
              <ul className="space-y-2 text-xs text-[#8b9bb4] pt-2">
                {item.topics.map((t, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <span className="text-[#d4af37]">·</span>
                    <span>{t}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      {/* GALLERY STRIP */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 space-y-6">
        <h3 className="font-serif text-2xl text-[#f1f4f8]">Offline classrooms & desk sessions</h3>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
          <figure className="space-y-2">
            <div className="aspect-[4/3] rounded-lg overflow-hidden bg-[#121720]">
              <img src="/assets/images/img_2.jpg" alt="Mentorship session" className="w-full h-full object-cover" />
            </div>
            <figcaption className="text-xs text-[#8b9bb4]">Live price-action masterclass</figcaption>
          </figure>
          <figure className="space-y-2">
            <div className="aspect-[4/3] rounded-lg overflow-hidden bg-[#121720]">
              <img src="/assets/images/img_12.jpg" alt="Student ceremony" className="w-full h-full object-cover" />
            </div>
            <figcaption className="text-xs text-[#8b9bb4]">Mentee graduation & awards ceremony</figcaption>
          </figure>
          <figure className="space-y-2">
            <div className="aspect-[4/3] rounded-lg overflow-hidden bg-[#121720]">
              <img src="/assets/images/img_21.jpg" alt="Strategy briefing" className="w-full h-full object-cover" />
            </div>
            <figcaption className="text-xs text-[#8b9bb4]">Morning execution planning</figcaption>
          </figure>
        </div>
      </section>
    </div>
  );
};
