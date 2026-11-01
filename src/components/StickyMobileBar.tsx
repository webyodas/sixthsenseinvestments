import React from 'react';
import { Send, Calendar } from 'lucide-react';

interface StickyMobileBarProps {
  onOpenBooking: () => void;
}

export const StickyMobileBar: React.FC<StickyMobileBarProps> = ({ onOpenBooking }) => {
  return (
    <aside 
      aria-label="Mobile quick actions"
      data-ui className="md:hidden fixed bottom-0 left-0 right-0 z-40 backdrop-blur-xl bg-[#090c10]/95 border-t border-[#1e2638] px-3 pt-2.5 pb-[max(0.75rem,env(safe-area-inset-bottom))]"
    >
      <div className="grid grid-cols-2 gap-2.5 max-w-md mx-auto">
        <a
          href="https://wa.me/919112399843?text=Hi%20Mann%20Jain,%20I%20would%20like%20to%20inquire%20about%20Sixth%20Sense%20Investments%20services."
          target="_blank"
          rel="noopener noreferrer"
          className="h-11 px-3 rounded-xl bg-[#121720] hover:bg-[#18202d] border border-emerald-500/30 text-white font-medium text-xs flex items-center justify-center gap-2 transition-colors cursor-pointer"
        >
          <span className="w-2 h-2 rounded-full bg-emerald-400 shrink-0" />
          <Send className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
          <span className="truncate">WhatsApp Desk</span>
        </a>

        <button
          type="button"
          onClick={onOpenBooking}
          className="h-11 px-3 rounded-xl bg-[#d4af37] hover:bg-[#e5c158] text-[#090c10] font-semibold text-xs flex items-center justify-center gap-1.5 transition-colors cursor-pointer"
        >
          <Calendar className="w-3.5 h-3.5 shrink-0" />
          <span className="truncate">Book Consultation</span>
        </button>
      </div>
    </aside>
  );
};

