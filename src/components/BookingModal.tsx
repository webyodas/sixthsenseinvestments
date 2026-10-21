import React from 'react';
import { X } from 'lucide-react';
import { LeadForm } from './LeadForm';

interface BookingModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialService?: string;
}

export const BookingModal: React.FC<BookingModalProps> = ({ isOpen, onClose, initialService }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 bg-black/85 backdrop-blur-md flex items-center justify-center p-4 overflow-y-auto">
      <div className="relative max-w-xl w-full my-8">
        <button
          onClick={onClose}
          className="absolute -top-3 -right-3 z-10 w-8 h-8 rounded-full bg-slate-900 border border-slate-700 text-slate-300 hover:text-white flex items-center justify-center shadow-lg"
          aria-label="Close modal"
        >
          <X className="w-4 h-4" />
        </button>

        <LeadForm 
          initialService={initialService} 
          onSuccess={() => {
            setTimeout(() => {
              // keep modal open for confirmation or let user close
            }, 3000);
          }} 
        />
      </div>
    </div>
  );
};
