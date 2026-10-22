import React, { useState } from 'react';
import { ArrowRight } from 'lucide-react';

interface CalculatorProps {
  onBookCall: () => void;
}

export const Calculator: React.FC<CalculatorProps> = ({ onBookCall }) => {
  const [mode, setMode] = useState<'sip' | 'lumpsum'>('sip');
  const [amount, setAmount] = useState<number>(25000);
  const [rate, setRate] = useState<number>(16);
  const [years, setYears] = useState<number>(10);

  const calculate = () => {
    const r = rate / 100;
    if (mode === 'sip') {
      const monthlyRate = r / 12;
      const months = years * 12;
      const totalInvested = amount * months;
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
    <div data-ui="calculator" className="bg-[#121720] text-[#f1f4f8] rounded-xl p-8 sm:p-12 text-left space-y-8">
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-6">
        <div className="space-y-2">
          <p className="text-xs text-[#d4af37] font-medium">Wealth projection</p>
          <h3 className="font-serif text-3xl text-[#f1f4f8]">
            Compounding & capital allocation simulator
          </h3>
          <p className="text-sm text-[#8b9bb4] max-w-xl">
            Model the long-term compounding effects of disciplined equity strategies managed under institutional risk parameters.
          </p>
        </div>

        <div className="flex bg-[#090c10] p-1 rounded">
          <button
            onClick={() => setMode('sip')}
            className={`px-4 py-2 rounded text-xs font-medium transition-colors ${
              mode === 'sip'
                ? 'bg-[#1a2230] text-[#f1f4f8]'
                : 'text-[#8b9bb4] hover:text-[#f1f4f8]'
            }`}
          >
            Monthly contribution
          </button>
          <button
            onClick={() => setMode('lumpsum')}
            className={`px-4 py-2 rounded text-xs font-medium transition-colors ${
              mode === 'lumpsum'
                ? 'bg-[#1a2230] text-[#f1f4f8]'
                : 'text-[#8b9bb4] hover:text-[#f1f4f8]'
            }`}
          >
            Initial capital
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
        {/* Sliders */}
        <div className="lg:col-span-7 space-y-6">
          <div className="space-y-2">
            <div className="flex justify-between items-baseline text-sm">
              <span className="text-[#8b9bb4]">
                {mode === 'sip' ? 'Monthly allocation' : 'Principal allocation'}
              </span>
              <span className="font-serif text-lg text-[#f1f4f8]">
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
              className="w-full h-1.5 bg-[#1f2937] rounded appearance-none cursor-pointer accent-[#d4af37]"
            />
            <div className="flex justify-between text-xs text-[#8b9bb4]">
              <span>{mode === 'sip' ? '₹2,000' : '₹50,000'}</span>
              <span>{mode === 'sip' ? '₹2,00,000' : '₹50,00,000'}</span>
            </div>
          </div>

          <div className="space-y-2">
            <div className="flex justify-between items-baseline text-sm">
              <span className="text-[#8b9bb4]">Expected annual CAGR</span>
              <span className="font-serif text-lg text-[#d4af37]">{rate}%</span>
            </div>
            <input
              type="range"
              min={8}
              max={26}
              step={0.5}
              value={rate}
              onChange={(e) => setRate(Number(e.target.value))}
              className="w-full h-1.5 bg-[#1f2937] rounded appearance-none cursor-pointer accent-[#d4af37]"
            />
            <div className="flex justify-between text-xs text-[#8b9bb4]">
              <span>8% benchmark</span>
              <span>16% target</span>
              <span>26% high alpha</span>
            </div>
          </div>

          <div className="space-y-2">
            <div className="flex justify-between items-baseline text-sm">
              <span className="text-[#8b9bb4]">Investment horizon</span>
              <span className="font-serif text-lg text-[#f1f4f8]">
                {years} {years === 1 ? 'year' : 'years'}
              </span>
            </div>
            <input
              type="range"
              min={1}
              max={30}
              step={1}
              value={years}
              onChange={(e) => setYears(Number(e.target.value))}
              className="w-full h-1.5 bg-[#1f2937] rounded appearance-none cursor-pointer accent-[#d4af37]"
            />
            <div className="flex justify-between text-xs text-[#8b9bb4]">
              <span>1 year</span>
              <span>15 years</span>
              <span>30 years</span>
            </div>
          </div>
        </div>

        {/* Results summary */}
        <div className="lg:col-span-5 bg-[#1a2230] rounded-xl p-8 flex flex-col justify-between space-y-6">
          <div className="space-y-4">
            <p className="text-xs text-[#8b9bb4]">
              Projected corpus at {years} years
            </p>
            <div className="font-serif text-4xl text-[#d4af37]">
              {formatCurrency(totalValue)}
            </div>

            <div className="space-y-2 pt-4 text-sm">
              <div className="flex justify-between">
                <span className="text-[#8b9bb4]">Total invested capital</span>
                <span className="text-[#f1f4f8]">{formatCurrency(totalInvested)}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-[#8b9bb4]">Estimated compounded returns</span>
                <span className="text-[#d4af37]">{formatCurrency(returns)}</span>
              </div>
            </div>

            {/* Proportion bar */}
            <div className="pt-2 space-y-2">
              <div className="w-full h-2 bg-[#090c10] rounded overflow-hidden flex">
                <div 
                  className="bg-[#4b5563] h-full" 
                  style={{ width: `${Math.min(100, (totalInvested / totalValue) * 100)}%` }}
                ></div>
                <div 
                  className="bg-[#d4af37] h-full" 
                  style={{ width: `${Math.max(0, (returns / totalValue) * 100)}%` }}
                ></div>
              </div>
              <div className="flex justify-between text-xs text-[#8b9bb4]">
                <span>Principal capital</span>
                <span className="text-[#d4af37]">Compounded alpha</span>
              </div>
            </div>
          </div>

          <button
            onClick={onBookCall}
            className="w-full py-3.5 bg-[#d4af37] hover:bg-[#e5c158] text-[#090c10] font-medium rounded text-sm transition-colors flex items-center justify-center gap-2"
          >
            <span>Consult on portfolio allocation</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  );
};
