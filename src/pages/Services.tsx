import React from 'react';
import { ArrowRight, Check, ChevronRight } from 'lucide-react';
import { SERVICES } from '../data/servicesData';
import { ServiceItem } from '../types';

interface ServicesProps {
  onSelectService: (serviceTitle: string) => void;
}

export const Services: React.FC<ServicesProps> = ({ onSelectService }) => {
  return (
    <div className="pt-36 pb-24 space-y-24 text-left">
      {/* HEADER */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="space-y-4 max-w-3xl">
          <p className="text-xs text-[#d4af37] font-medium tracking-wide">
            Advisory & execution portfolio
          </p>
          <h1 className="font-serif text-4xl sm:text-6xl text-[#f1f4f8] leading-[1.08] tracking-tight">
            Capital solutions for HNIs, traders & family portfolios.
          </h1>
          <p className="text-base sm:text-lg text-[#8b9bb4] leading-relaxed font-normal">
            From daily quantitative research execution to multi-decade wealth compounding through Aditya Birla Capital, review our complete suite of SEBI-compliant services.
          </p>
        </div>
      </section>

      {/* DETAILED SERVICES DIRECTORY */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 space-y-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {SERVICES.map((srv: ServiceItem) => (
            <div 
              key={srv.id}
              className="bg-[#121720] rounded-xl p-8 space-y-6 flex flex-col justify-between"
            >
              <div className="space-y-4">
                <div className="space-y-1">
                  <span className="text-xs text-[#d4af37] font-medium">{srv.badge}</span>
                  <h3 className="font-serif text-2xl text-[#f1f4f8]">{srv.title}</h3>
                </div>

                <p className="text-sm text-[#d4af37]">{srv.tagline}</p>
                <p className="text-sm text-[#8b9bb4] leading-relaxed">{srv.description}</p>

                {/* Key Deliverables */}
                <div className="space-y-2 pt-4">
                  <p className="text-xs font-medium text-[#f1f4f8]">Key deliverables</p>
                  <ul className="space-y-2 text-xs text-[#8b9bb4]">
                    {srv.features.map((feat, idx) => (
                      <li key={idx} className="flex items-start gap-2">
                        <Check className="w-4 h-4 text-[#d4af37] shrink-0 mt-0.5" />
                        <span>{feat}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Ideal For */}
                <div className="p-3 bg-[#1a2230] rounded text-xs text-[#8b9bb4]">
                  <strong className="text-[#f1f4f8]">Target profile: </strong>
                  <span>{srv.idealFor}</span>
                </div>
              </div>

              <div className="pt-4">
                <button
                  onClick={() => onSelectService(srv.title)}
                  className="w-full py-3 bg-[#d4af37] hover:bg-[#e5c158] text-[#090c10] font-medium rounded text-xs transition-colors flex items-center justify-center gap-2"
                >
                  <span>Inquire regarding {srv.title}</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ADITYA BIRLA CAPITAL NOTICE */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="bg-[#121720] border border-[#1e2638] rounded-xl p-8 sm:p-12 flex flex-col md:flex-row items-start md:items-center justify-between gap-8 text-left">
          <div className="space-y-3 max-w-3xl">
            <div className="flex items-center gap-2">
              <span className="text-xs text-[#d4af37] font-medium">Custodial guarantee</span>
              <span className="text-[#374151]">·</span>
              <span className="text-xs text-[#8b9bb4]">Authorized Channel Partner</span>
            </div>
            <h3 className="font-serif text-2xl sm:text-3xl text-[#f1f4f8]">
              Direct institutional custody via Aditya Birla Capital
            </h3>
            <p className="text-sm text-[#8b9bb4] leading-relaxed">
              All Portfolio Management Services (PMS) and depository demat holdings are maintained strictly under the client&apos;s direct name with institutional depository supervision, statutory SEBI compliance, and zero commingling of capital.
            </p>
          </div>

          <div className="p-4 rounded-xl bg-[#090c10] border border-[#1e2638] flex items-center gap-3 shrink-0">
            <img 
              src="/assets/images/aditya_birla_capital.png" 
              alt="Aditya Birla Capital" 
              className="w-14 h-14 object-contain rounded"
            />
            <div className="text-left pr-2">
              <span className="block text-xs font-semibold text-[#f1f4f8]">Aditya Birla Capital</span>
              <span className="block text-[11px] text-[#8b9bb4]">Institutional Custody</span>
              <span className="block text-[10px] text-[#d4af37]">SEBI Reg. Depository</span>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
