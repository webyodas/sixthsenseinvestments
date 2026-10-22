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
    <div data-ui="modal" className="fixed inset-0 z-50 bg-[#090c10]/90 flex items-center justify-center p-4 overflow-y-auto">
      <div className="relative max-w-xl w-full my-8">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-10 w-8 h-8 rounded-full bg-[#1a2230] text-[#8b9bb4] hover:text-[#f1f4f8] flex items-center justify-center"
          aria-label="Close modal"
        >
          <X className="w-4 h-4" />
        </button>

        <LeadForm 
          initialService={initialService} 
          onSuccess={() => {
            setTimeout(() => {
              // auto-dismiss if needed
            }, 3000);
          }} 
        />
      </div>
    </div>
  );
};
