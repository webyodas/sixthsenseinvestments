import React from 'react';

interface StickyMobileBarProps {
  onOpenBooking: () => void;
}

export const StickyMobileBar: React.FC<StickyMobileBarProps> = ({ onOpenBooking }) => {
  return (
    <div className="md:hidden fixed bottom-0 left-0 right-0 z-40 bg-[#090c10] px-4 py-3">
      <div className="grid grid-cols-2 gap-3">
        <a
          href="https://wa.me/919112399843?text=Hi%20Mann%20Jain,%20I%20would%20like%20to%20inquire%20about%20Sixth%20Sense%20Investments%20services."
          target="_blank"
          rel="noopener noreferrer"
          className="bg-[#121720] hover:bg-[#18202d] text-white py-2.5 px-3 text-xs font-medium text-center"
        >
          WhatsApp Desk
        </a>

        <button
          onClick={onOpenBooking}
          className="bg-[#d4af37] text-[#090c10] py-2.5 px-3 text-xs font-semibold text-center"
        >
          Book Consultation
        </button>
      </div>
    </div>
  );
};
