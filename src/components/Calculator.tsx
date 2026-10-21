import React, { useState } from 'react';
import { Calculator as CalcIcon, TrendingUp, Sparkles, ArrowRight } from 'lucide-react';

interface CalculatorProps {
  onBookCall: () => void;
}

export const Calculator: React.FC<CalculatorProps> = ({ onBookCall }) => {
  const [mode, setMode] = useState<'sip' | 'lumpsum'>('sip');
  const [amount, setAmount] = useState<number>(25000); // monthly or lumpsum
  const [rate, setRate] = useState<number>(16); // % CAGR
  const [years, setYears] = useState<number>(10);

  // Calculation
  const calculate = () => {
    const r = rate / 100;
    if (mode === 'sip') {
      const monthlyRate = r / 12;
      const months = years * 12;
      const totalInvested = amount * months;
      // FV = P * [ ( (1 + i)^n - 1 ) / i ] * (1 + i)
      const futureValue = amount * ((Math.pow(1 + monthlyRate, months) - 1) / monthlyRate) * (1 + monthlyRate);
      const returns = futureValue - totalInvested;
      return { totalInvested, returns, totalValue: futureValue };
    } else {
      const totalInvested = amount;
      const futureValue = amount * Math.pow(1 + r, years);
      const returns = futureValue - totalInvested;
      return { totalInvested, returns, totalValue: futureValue };
    }
  };

  const { totalInvested, returns, totalValue } = calculate();

  const formatCurrency = (val: number) => {
    if (val >= 10000000) {
      return `₹${(val / 10000000).toFixed(2)} Cr`;
    } else if (val >= 100000) {
      return `₹${(val / 100000).toFixed(2)} Lakh`;
    } else {
      return `₹${Math.round(val).toLocaleString('en-IN')}`;
    }
  };

  return (
    <div className="glass-panel rounded-3xl p-6 sm:p-10 border border-slate-800 shadow-2xl relative overflow-hidden">
      {/* Background Glow */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-amber-500/5 rounded-full blur-3xl pointer-events-none"></div>

      <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6 pb-8 border-b border-slate-800/80">
        <div>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/20 text-xs font-bold text-amber-300 mb-2">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Sixth Sense Wealth Simulator</span>
          </div>
          <h3 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
            Compounding & Alpha Projection
          </h3>
          <p className="text-slate-400 text-xs sm:text-sm mt-1">
            Simulate your equity portfolio growth powered by institutional research and active PMS management.
          </p>
        </div>

        {/* Toggle SIP / Lumpsum */}
        <div className="flex bg-slate-900/90 p-1 rounded-xl border border-slate-800">
          <button
            onClick={() => setMode('sip')}
            className={`px-4 py-2 rounded-lg text-xs font-bold transition-all ${
              mode === 'sip'
                ? 'bg-amber-500 text-slate-950 shadow-md'
                : 'text-slate-400 hover:text-white'
            }`}
          >
            Monthly SIP
          </button>
          <button
            onClick={() => setMode('lumpsum')}
            className={`px-4 py-2 rounded-lg text-xs font-bold transition-all ${
              mode === 'lumpsum'
                ? 'bg-amber-500 text-slate-950 shadow-md'
                : 'text-slate-400 hover:text-white'
            }`}
          >
            One-Time Lumpsum
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 pt-8">
        {/* Sliders Area (7 cols) */}
        <div className="lg:col-span-7 space-y-6">
          {/* Amount Slider */}
          <div className="space-y-2">
            <div className="flex justify-between items-center text-sm font-semibold">
              <span className="text-slate-300">
                {mode === 'sip' ? 'Monthly Investment' : 'Initial Lumpsum Capital'}
              </span>
              <span className="text-amber-300 font-bold text-base bg-slate-900 border border-slate-800 px-3 py-1 rounded-lg">
                ₹{amount.toLocaleString('en-IN')}
              </span>
            </div>
            <input
              type="range"
              min={mode === 'sip' ? 2000 : 50000}
              max={mode === 'sip' ? 200000 : 5000000}
              step={mode === 'sip' ? 1000 : 25000}
              value={amount}
              onChange={(e) => setAmount(Number(e.target.value))}
              className="w-full h-2 bg-slate-800 rounded-lg appearance-none cursor-pointer accent-amber-500"
            />
            <div className="flex justify-between text-[11px] text-slate-500">
              <span>{mode === 'sip' ? '₹2,000' : '₹50,000'}</span>
              <span>{mode === 'sip' ? '₹2,00,000' : '₹50,00,000'}</span>
            </div>
          </div>

          {/* Rate of Return Slider */}
          <div className="space-y-2">
            <div className="flex justify-between items-center text-sm font-semibold">
              <span className="text-slate-300">Expected Annual CAGR (%)</span>
              <span className="text-emerald-400 font-bold text-base bg-slate-900 border border-slate-800 px-3 py-1 rounded-lg">
                {rate}%
              </span>
            </div>
            <input
              type="range"
              min={8}
              max={26}
              step={0.5}
              value={rate}
              onChange={(e) => setRate(Number(e.target.value))}
              className="w-full h-2 bg-slate-800 rounded-lg appearance-none cursor-pointer accent-emerald-500"
            />
            <div className="flex justify-between text-[11px] text-slate-500">
              <span>8% (Conservative Debt/Largecap)</span>
              <span>16% (Sixth Sense Target)</span>
              <span>26% (High-Alpha PMS)</span>
            </div>
          </div>

          {/* Time Horizon Slider */}
          <div className="space-y-2">
            <div className="flex justify-between items-center text-sm font-semibold">
              <span className="text-slate-300">Investment Horizon</span>
              <span className="text-amber-300 font-bold text-base bg-slate-900 border border-slate-800 px-3 py-1 rounded-lg">
                {years} {years === 1 ? 'Year' : 'Years'}
              </span>
            </div>
            <input
              type="range"
              min={1}
              max={30}
              step={1}
              value={years}
              onChange={(e) => setYears(Number(e.target.value))}
              className="w-full h-2 bg-slate-800 rounded-lg appearance-none cursor-pointer accent-amber-500"
            />
            <div className="flex justify-between text-[11px] text-slate-500">
              <span>1 Year</span>
              <span>15 Years</span>
              <span>30 Years</span>
            </div>
          </div>
        </div>

        {/* Results Card (5 cols) */}
        <div className="lg:col-span-5 bg-gradient-to-br from-slate-900/90 to-slate-950/90 rounded-2xl p-6 border border-slate-800/80 flex flex-col justify-between space-y-6">
          <div className="space-y-4">
            <div className="text-xs uppercase tracking-wider text-slate-400 font-semibold flex items-center justify-between">
              <span>Projected Corpus at {years} Years</span>
              <TrendingUp className="w-4 h-4 text-emerald-400" />
            </div>

            <div className="text-3xl sm:text-4xl font-extrabold gold-gradient-text tracking-tight">
              {formatCurrency(totalValue)}
            </div>

            <div className="space-y-2.5 pt-2 text-xs border-t border-slate-800">
              <div className="flex justify-between">
                <span className="text-slate-400">Total Invested:</span>
                <span className="font-semibold text-slate-200">{formatCurrency(totalInvested)}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-slate-400">Estimated Wealth Gain:</span>
                <span className="font-bold text-emerald-400">{formatCurrency(returns)}</span>
              </div>
            </div>

            {/* Visual ratio bar */}
            <div className="pt-2 space-y-1">
              <div className="w-full h-2.5 bg-slate-800 rounded-full overflow-hidden flex">
                <div 
                  className="bg-slate-600 h-full" 
                  style={{ width: `${Math.min(100, (totalInvested / totalValue) * 100)}%` }}
                  title="Invested Amount"
                ></div>
                <div 
                  className="bg-gradient-to-r from-amber-500 to-emerald-400 h-full" 
                  style={{ width: `${Math.max(0, (returns / totalValue) * 100)}%` }}
                  title="Compounded Alpha"
                ></div>
              </div>
              <div className="flex justify-between text-[10px] text-slate-500 pt-1">
                <span>Principal Capital</span>
                <span className="text-emerald-400 font-semibold">Alpha Compounding</span>
              </div>
            </div>
          </div>

          <button
            onClick={onBookCall}
            className="w-full py-3 bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-400 hover:to-amber-500 text-slate-950 font-bold rounded-xl text-xs uppercase tracking-wider flex items-center justify-center gap-2 shadow-lg shadow-amber-500/15 transition-transform active:scale-98"
          >
            <span>Structure My Portfolio</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  );
};
