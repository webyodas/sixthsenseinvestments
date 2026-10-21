import React from 'react';
import { MessageSquare, Calendar, Phone } from 'lucide-react';

interface StickyMobileBarProps {
  onOpenBooking: () => void;
}

export const StickyMobileBar: React.FC<StickyMobileBarProps> = ({ onOpenBooking }) => {
  return (
    <div className="md:hidden fixed bottom-0 left-0 right-0 z-40 bg-slate-950/95 border-t border-slate-800/90 px-3 py-2.5 backdrop-blur-xl shadow-2xl">
      <div className="grid grid-cols-2 gap-2">
        <a
          href="https://wa.me/919876543210?text=Hi%20Mann%20Jain,%20I%20would%20like%20to%20inquire%20about%20Sixth%20Sense%20Investments%20services."
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center gap-1.5 bg-emerald-600 hover:bg-emerald-500 text-white py-2.5 px-3 rounded-lg text-xs font-bold transition-transform active:scale-95 shadow-md shadow-emerald-950"
        >
          <MessageSquare className="w-4 h-4 fill-current" />
          <span>WhatsApp Chat</span>
        </a>

        <button
          onClick={onOpenBooking}
          className="flex items-center justify-center gap-1.5 bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-400 hover:to-amber-500 text-slate-950 py-2.5 px-3 rounded-lg text-xs font-bold transition-transform active:scale-95 shadow-md shadow-amber-950"
        >
          <Calendar className="w-4 h-4" />
          <span>Book Consult</span>
        </button>
      </div>
    </div>
  );
};
