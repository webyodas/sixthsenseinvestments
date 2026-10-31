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
                    alt="Mann Jain at Sixth Sense quantitative trading station" 
                    className="w-full h-full object-cover"
                  />
                </div>
                <figcaption className="text-xs text-[#8b9bb4]">
                  Proprietary execution setup & live market simulation lab
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

      {/* MENTORSHIP & DESK SESSION MEDIA */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 space-y-6">
        <div className="space-y-2">
          <p className="text-xs text-[#d4af37] font-medium">Curriculum in Action</p>
          <h3 className="font-serif text-2xl sm:text-3xl text-[#f1f4f8]">
            Mentorship Media & Execution Lab
          </h3>
          <p className="text-sm text-[#8b9bb4]">
            Authentic training briefings, live risk demonstrations, and competition workstation setups with Founder Mann Jain.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          <figure className="space-y-2.5 bg-[#121720] p-4 rounded-xl">
            <div className="aspect-[4/3] rounded-lg overflow-hidden bg-[#090c10]">
              <img src="/assets/images/img_2.jpg" alt="Trade Like Us educational masterclass with Founder Mann Jain" className="w-full h-full object-cover" />
            </div>
            <div className="space-y-1">
              <span className="text-[10px] text-[#d4af37] font-medium uppercase tracking-wider">Video Mentorship</span>
              <h4 className="font-serif text-base text-[#f1f4f8]">Trade Like Us: Core Mindset</h4>
              <figcaption className="text-xs text-[#8b9bb4] leading-relaxed">
                Foundational masterclass with Mann Jain on transitioning from emotional retail speculation to mechanical edge.
              </figcaption>
            </div>
          </figure>

          <figure className="space-y-2.5 bg-[#121720] p-4 rounded-xl">
            <div className="aspect-[4/3] rounded-lg overflow-hidden bg-[#090c10]">
              <img src="/assets/images/img_6.jpg" alt="Strategy walkthrough with Founder Mann Jain" className="w-full h-full object-cover" />
            </div>
            <div className="space-y-1">
              <span className="text-[10px] text-[#d4af37] font-medium uppercase tracking-wider">Desk Briefing</span>
              <h4 className="font-serif text-base text-[#f1f4f8]">Market Structure & Risk Rules</h4>
              <figcaption className="text-xs text-[#8b9bb4] leading-relaxed">
                Direct desk strategy sessions covering key levels, liquidity sweeps, and capital preservation protocols.
              </figcaption>
            </div>
          </figure>

          <figure className="space-y-2.5 bg-[#121720] p-4 rounded-xl">
            <div className="aspect-[4/3] rounded-lg overflow-hidden bg-[#090c10]">
              <img src="/assets/images/img_18.jpg" alt="Live trading terminal on Union Budget Day" className="w-full h-full object-cover object-bottom" />
            </div>
            <div className="space-y-1">
              <span className="text-[10px] text-[#d4af37] font-medium uppercase tracking-wider">Live Case Study</span>
              <h4 className="font-serif text-base text-[#f1f4f8]">Budget Day Alpha (₹4.15L)</h4>
              <figcaption className="text-xs text-[#8b9bb4] leading-relaxed">
                Terminal analysis demonstrating disciplined risk management during extreme gamma and volatility expansion.
              </figcaption>
            </div>
          </figure>

          <figure className="space-y-2.5 bg-[#121720] p-4 rounded-xl">
            <div className="aspect-[4/3] rounded-lg overflow-hidden bg-[#090c10]">
              <img src="/assets/images/img_20.jpg" alt="Dehradun 2026 competition workstation" className="w-full h-full object-cover" />
            </div>
            <div className="space-y-1">
              <span className="text-[10px] text-[#d4af37] font-medium uppercase tracking-wider">National Championship</span>
              <h4 className="font-serif text-base text-[#f1f4f8]">Dehradun 2026 Squad Lab</h4>
              <figcaption className="text-xs text-[#8b9bb4] leading-relaxed">
                Dedicated multi-monitor simulation station for the 5-member team representing Sixth Sense Investments.
              </figcaption>
            </div>
          </figure>
        </div>
      </section>
    </div>
  );
};
