import React from 'react';
import { 
  TrendingUp, Briefcase, Search, FileText, ShieldCheck, Landmark, 
  Cpu, GraduationCap, ArrowRight, CheckCircle2, Sparkles, Building2 
} from 'lucide-react';
import { SERVICES } from '../data/servicesData';
import { ServiceItem } from '../types';

interface ServicesProps {
  onSelectService: (serviceTitle: string) => void;
}

export const Services: React.FC<ServicesProps> = ({ onSelectService }) => {
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'TrendingUp': return <TrendingUp className="w-6 h-6 text-amber-400" />;
      case 'Briefcase': return <Briefcase className="w-6 h-6 text-amber-400" />;
      case 'Search': return <Search className="w-6 h-6 text-amber-400" />;
      case 'FileText': return <FileText className="w-6 h-6 text-amber-400" />;
      case 'ShieldCheck': return <ShieldCheck className="w-6 h-6 text-amber-400" />;
      case 'Landmark': return <Landmark className="w-6 h-6 text-amber-400" />;
      case 'Cpu': return <Cpu className="w-6 h-6 text-amber-400" />;
      case 'GraduationCap': return <GraduationCap className="w-6 h-6 text-amber-400" />;
      default: return <TrendingUp className="w-6 h-6 text-amber-400" />;
    }
  };

  return (
    <div className="pt-32 pb-24 space-y-20">
      {/* HEADER */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="text-left space-y-4 max-w-3xl">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-900 border border-slate-800 text-xs font-bold text-amber-400">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Advisory & Execution Portfolio</span>
          </div>
          <h1 className="text-4xl sm:text-5xl font-black text-white tracking-tight">
            Complete Capital Solutions for <br />
            <span className="gold-gradient-text">HNIs, Traders & Institutions</span>
          </h1>
          <p className="text-slate-300 text-base leading-relaxed">
            From daily quantitative execution to multi-decade wealth compounding through Aditya Birla Capital, 
            explore our full suite of SEBI-compliant financial services.
          </p>
        </div>
      </section>

      {/* DETAILED SERVICES LIST */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 space-y-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {SERVICES.map((srv: ServiceItem) => (
            <div 
              key={srv.id}
              className="glass-card rounded-3xl p-8 border border-slate-800 space-y-6 flex flex-col justify-between text-left hover:border-amber-500/40 relative overflow-hidden"
            >
              {/* Badge */}
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-xl bg-slate-900 border border-slate-800 flex items-center justify-center">
                    {getIcon(srv.icon)}
                  </div>
                  <div>
                    <span className="text-[10px] font-extrabold uppercase tracking-wider px-2 py-0.5 rounded bg-amber-500/10 text-amber-400 border border-amber-500/20">
                      {srv.badge}
                    </span>
                    <h3 className="text-xl font-bold text-white mt-1">{srv.title}</h3>
                  </div>
                </div>
              </div>

              <div className="space-y-4">
                <p className="text-xs font-medium text-amber-300 italic">{srv.tagline}</p>
                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">{srv.description}</p>

                {/* Features */}
                <div className="space-y-2 pt-2 border-t border-slate-800/80">
                  <h4 className="text-xs font-bold text-slate-200 uppercase tracking-wider">Key Deliverables</h4>
                  <ul className="space-y-1.5 text-xs text-slate-400">
                    {srv.features.map((feat, idx) => (
                      <li key={idx} className="flex items-start gap-2">
                        <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0 mt-0.5" />
                        <span>{feat}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Ideal for */}
                <div className="bg-slate-950/60 border border-slate-800/80 p-3 rounded-xl text-xs">
                  <strong className="text-slate-300">Target Profile: </strong>
                  <span className="text-slate-400">{srv.idealFor}</span>
                </div>
              </div>

              <div className="pt-4 border-t border-slate-800/80">
                <button
                  onClick={() => onSelectService(srv.title)}
                  className="w-full py-3 bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-400 hover:to-amber-500 text-slate-950 font-bold rounded-xl text-xs uppercase tracking-wider transition-all flex items-center justify-center gap-2 shadow-lg shadow-amber-500/10"
                >
                  <span>Inquire Regarding {srv.title}</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ADITYA BIRLA CAPITAL HIGHLIGHT BOX */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="glass-panel rounded-3xl p-8 sm:p-10 border border-amber-500/20 bg-gradient-to-r from-slate-950 via-slate-900 to-slate-950 text-left flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-2">
            <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-amber-400">
              <Building2 className="w-4 h-4" />
              <span>Institutional Fiduciary Guarantee</span>
            </div>
            <h3 className="text-2xl font-bold text-white">Direct Custody via Aditya Birla Capital</h3>
            <p className="text-xs sm:text-sm text-slate-300 max-w-2xl leading-relaxed">
              All Portfolio Management Services (PMS) and depository holdings are held strictly under direct client name 
              with institutional depository oversight, full SEBI compliance, and zero commingling of client assets.
            </p>
          </div>

          <button
            onClick={() => onSelectService('Portfolio Management Services (PMS)')}
            className="px-6 py-3 bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold text-xs uppercase tracking-wider rounded-xl shrink-0 transition-colors"
          >
            Schedule PMS Review
          </button>
        </div>
      </section>
    </div>
  );
};
