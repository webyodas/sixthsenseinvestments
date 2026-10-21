import React from 'react';
import { Award, GraduationCap, CheckCircle2, ArrowRight, Flame, Users, Calendar, Sparkles } from 'lucide-react';

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
    <div className="pt-32 pb-24 space-y-20">
      {/* HEADER */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="text-left space-y-4 max-w-3xl">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-900 border border-slate-800 text-xs font-bold text-amber-400">
            <GraduationCap className="w-3.5 h-3.5" />
            <span>Sixth Sense Academy</span>
          </div>
          <h1 className="text-4xl sm:text-5xl font-black text-white tracking-tight">
            Learn to Trade Real Liquidity with <br />
            <span className="gold-gradient-text">Real Funded Capital</span>
          </h1>
          <p className="text-slate-300 text-base leading-relaxed">
            Hands-on offline mentorship masterclasses in Palghar & Mumbai conducted by 
            Founder Mann Jain. No hypothetical indicators—pure institutional price action, 
            funded challenges, and national league competition.
          </p>
        </div>
      </section>

      {/* DEHRADUN COMPETITION SHOWCASE */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="glass-panel rounded-3xl p-8 sm:p-12 border border-emerald-500/30 relative overflow-hidden bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            <div className="lg:col-span-7 space-y-5 text-left">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-xs font-bold text-emerald-300">
                <Flame className="w-3.5 h-3.5 text-emerald-400 fill-emerald-400" />
                <span>Dehradun 2026 National Championship</span>
              </div>

              <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
                Represent Sixth Sense Investments
              </h2>

              <p className="text-sm text-slate-300 leading-relaxed">
                A prestigious Investment & Trading Competition is being conducted in Dehradun, and 
                Sixth Sense Investments is forming an elite 5-member team to represent us on the national stage.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs text-slate-300">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>Complete market knowledge & offline training</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>Funded live trading capital</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>Offline masterclasses only (hands-on)</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>Travel & related expenses 100% sponsored</span>
                </div>
              </div>

              <div className="pt-2">
                <button
                  onClick={onApply}
                  className="px-8 py-3.5 bg-gradient-to-r from-emerald-500 to-teal-500 text-slate-950 font-bold rounded-xl text-xs uppercase tracking-wider shadow-lg shadow-emerald-500/20 hover:opacity-95 transition-opacity flex items-center gap-2"
                >
                  <span>Apply for Selection Trial</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>

            <div className="lg:col-span-5">
              <div className="rounded-2xl overflow-hidden border border-slate-700 shadow-2xl bg-slate-900">
                <img 
                  src="/assets/images/img_20.jpg" 
                  alt="Dehradun Competition Announcement" 
                  className="w-full h-80 object-cover"
                />
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* CURRICULUM */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 space-y-10">
        <div className="text-left space-y-2">
          <span className="text-xs font-bold uppercase tracking-widest text-amber-400">Mastery Path</span>
          <h2 className="text-3xl font-bold text-white tracking-tight">
            Institutional Masterclass Curriculum
          </h2>
          <p className="text-slate-400 text-sm">
            4-phase progressive immersion from fundamental auction dynamics to funded execution.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {curriculum.map((c, idx) => (
            <div key={idx} className="glass-card rounded-2xl p-6 border border-slate-800 space-y-4 text-left">
              <span className="text-xs font-bold text-amber-400 tracking-wider uppercase block">
                {c.module}
              </span>
              <h3 className="text-lg font-bold text-white">{c.title}</h3>
              <ul className="space-y-2 text-xs text-slate-300">
                {c.topics.map((t, tidx) => (
                  <li key={tidx} className="flex items-start gap-2">
                    <span className="text-amber-400 font-bold">›</span>
                    <span>{t}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      {/* BATCH ENROLLMENT CTA */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 text-center space-y-6 pt-6">
        <div className="glass-panel rounded-3xl p-8 sm:p-12 border border-slate-800 space-y-5">
          <h2 className="text-3xl font-bold text-white">Join the Next Offline Cohort in Palghar</h2>
          <p className="text-slate-300 text-sm max-w-xl mx-auto">
            Limited seats per batch to ensure direct one-on-one trade feedback and screen time with Mann Jain.
          </p>
          <button
            onClick={onApply}
            className="px-8 py-3.5 bg-gradient-to-r from-amber-500 to-amber-600 text-slate-950 font-bold rounded-xl text-xs uppercase tracking-wider shadow-lg shadow-amber-500/20 hover:from-amber-400 hover:to-amber-500 transition-all active:scale-95"
          >
            Apply for Next Offline Cohort
          </button>
        </div>
      </section>
    </div>
  );
};
