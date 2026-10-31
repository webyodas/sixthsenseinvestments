import React, { useState } from 'react';
import { Send, CheckCircle2, ShieldCheck, ArrowRight, Loader2 } from 'lucide-react';
import { api } from '../services/api';

interface LeadFormProps {
  initialService?: string;
  onSuccess?: () => void;
  className?: string;
}

export const LeadForm: React.FC<LeadFormProps> = ({ initialService, onSuccess, className = '' }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service_interested: initialService || 'Portfolio Management Services (PMS)',
    investment_budget: '₹5L - ₹25L',
    message: ''
  });

  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState('');

  const servicesList = [
    'Portfolio Management Services (PMS)',
    'Equity Trading & Execution',
    'Research Analyst (R.A.) Calls',
    'IPO Distribution & Transfer Facility',
    'Securities Operations & Risk Management',
    'Retirement & Wealth Advisory',
    'Quantitative Algo Trading',
    'Stock Market Academy / Mentorship'
  ];

  const budgetTiers = [
    '₹1L - ₹5L',
    '₹5L - ₹25L',
    '₹25L - ₹1 Crore',
    '₹1 Crore+'
  ];

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');

    if (!formData.name.trim() || !formData.email.trim() || !formData.phone.trim()) {
      setError('Please provide your name, email, and contact number.');
      return;
    }

    setLoading(true);
    try {
      const res = await api.submitLead(formData);
      if (res.success) {
        setSubmitted(true);
        if (onSuccess) onSuccess();
      } else {
        setError(res.message || 'Submission failed. Please try again.');
      }
    } catch (err: any) {
      setError(err.message || 'Network error. Please try again or reach out on WhatsApp.');
    } finally {
      setLoading(false);
    }
  };

  if (submitted) {
    return (
      <div data-ui="form" className={`bg-[#121720] text-[#f1f4f8] rounded-xl p-8 sm:p-10 text-center space-y-5 ${className}`}>
        <div className="w-12 h-12 bg-[#1a2230] text-[#d4af37] rounded-full flex items-center justify-center mx-auto">
          <CheckCircle2 className="w-6 h-6" />
        </div>
        <div className="space-y-2">
          <h3 className="font-serif text-2xl text-[#f1f4f8]">Consultation request registered</h3>
          <p className="text-[#8b9bb4] text-sm max-w-md mx-auto">
            Founder Mann Jain and our advisory desk will review your requirements and reach out within 2 business hours.
          </p>
        </div>

        <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href={`https://wa.me/919112399843?text=Hi%20Mann%20Jain,%20I%20have%20submitted%20a%20consultation%20request%20for%20${encodeURIComponent(formData.service_interested)}.%20Name:%20${encodeURIComponent(formData.name)}.`}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-[#d4af37] hover:bg-[#e5c158] text-[#090c10] font-medium py-3 px-6 rounded text-sm transition-colors"
          >
            <span>Direct WhatsApp desk</span>
            <ArrowRight className="w-4 h-4" />
          </a>

          <button
            onClick={() => {
              setSubmitted(false);
              setFormData({
                name: '',
                email: '',
                phone: '',
                service_interested: initialService || 'Portfolio Management Services (PMS)',
                investment_budget: '₹5L - ₹25L',
                message: ''
              });
            }}
            className="w-full sm:w-auto text-sm text-[#8b9bb4] hover:text-[#f1f4f8] py-2"
          >
            Submit another inquiry
          </button>
        </div>
      </div>
    );
  }

  return (
    <form data-ui="form" onSubmit={handleSubmit} className={`bg-[#121720] text-[#f1f4f8] rounded-xl p-8 sm:p-10 space-y-6 ${className}`}>
      <div className="space-y-2 text-left">
        <p className="text-xs text-[#d4af37] font-medium">Advisory consultation</p>
        <h3 className="font-serif text-2xl sm:text-3xl text-[#f1f4f8]">Institutional portfolio review</h3>
        <p className="text-[#8b9bb4] text-sm">
          Direct consultation with Founder & SEBI Registered Research Analyst Mann Jain.
        </p>
      </div>

      {error && (
        <div className="bg-[#241315] text-[#f87171] text-sm px-4 py-3 rounded">
          {error}
        </div>
      )}

      <div className="space-y-4 text-left">
        <div>
          <label className="block text-xs font-medium text-[#8b9bb4] mb-1.5">
            Full name
          </label>
          <input
            type="text"
            required
            placeholder="Rahul Sharma"
            value={formData.name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            className="w-full bg-[#090c10] text-[#f1f4f8] rounded px-4 py-3 text-sm placeholder-[#4b5563] focus:outline-none focus:ring-1 focus:ring-[#d4af37]"
          />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label className="block text-xs font-medium text-[#8b9bb4] mb-1.5">
              Email address
            </label>
            <input
              type="email"
              required
              placeholder="rahul@example.com"
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              className="w-full bg-[#090c10] text-[#f1f4f8] rounded px-4 py-3 text-sm placeholder-[#4b5563] focus:outline-none focus:ring-1 focus:ring-[#d4af37]"
            />
          </div>

          <div>
            <label className="block text-xs font-medium text-[#8b9bb4] mb-1.5">
              Contact number / WhatsApp
            </label>
            <input
              type="tel"
              required
              placeholder="+91 91123 99843"
              value={formData.phone}
              onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
              className="w-full bg-[#090c10] text-[#f1f4f8] rounded px-4 py-3 text-sm placeholder-[#4b5563] focus:outline-none focus:ring-1 focus:ring-[#d4af37]"
            />
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label className="block text-xs font-medium text-[#8b9bb4] mb-1.5">
              Service of interest
            </label>
            <select
              value={formData.service_interested}
              onChange={(e) => setFormData({ ...formData, service_interested: e.target.value })}
              className="w-full bg-[#090c10] text-[#f1f4f8] rounded px-4 py-3 text-sm focus:outline-none focus:ring-1 focus:ring-[#d4af37] cursor-pointer"
            >
              {servicesList.map((s) => (
                <option key={s} value={s} className="bg-[#090c10] text-[#f1f4f8]">
                  {s}
                </option>
              ))}
            </select>
          </div>

          <div>
            <label className="block text-xs font-medium text-[#8b9bb4] mb-1.5">
              Portfolio capital size
            </label>
            <select
              value={formData.investment_budget}
              onChange={(e) => setFormData({ ...formData, investment_budget: e.target.value })}
              className="w-full bg-[#090c10] text-[#f1f4f8] rounded px-4 py-3 text-sm focus:outline-none focus:ring-1 focus:ring-[#d4af37] cursor-pointer"
            >
              {budgetTiers.map((b) => (
                <option key={b} value={b} className="bg-[#090c10] text-[#f1f4f8]">
                  {b}
                </option>
              ))}
            </select>
          </div>
        </div>

        <div>
          <label className="block text-xs font-medium text-[#8b9bb4] mb-1.5">
            Current objectives or portfolio background
          </label>
          <textarea
            rows={3}
            placeholder="Share your investment horizon, risk tolerance, or specific goals..."
            value={formData.message}
            onChange={(e) => setFormData({ ...formData, message: e.target.value })}
            className="w-full bg-[#090c10] text-[#f1f4f8] rounded px-4 py-3 text-sm placeholder-[#4b5563] focus:outline-none focus:ring-1 focus:ring-[#d4af37] resize-none"
          ></textarea>
        </div>
      </div>

      <div className="pt-2">
        <button
          type="submit"
          disabled={loading}
          className="w-full py-3.5 px-6 rounded font-medium text-sm bg-[#d4af37] hover:bg-[#e5c158] text-[#090c10] transition-colors flex items-center justify-center gap-2 disabled:opacity-50"
        >
          {loading ? (
            <>
              <Loader2 className="w-4 h-4 animate-spin" />
              <span>Transmitting details...</span>
            </>
          ) : (
            <>
              <span>Schedule advisory review</span>
              <Send className="w-4 h-4" />
            </>
          )}
        </button>
      </div>

      <div className="flex items-center justify-center gap-2 text-xs text-[#8b9bb4] pt-1">
        <ShieldCheck className="w-4 h-4 text-[#d4af37]" />
        <span>SEBI compliance standards observed. Complete client confidentiality maintained.</span>
      </div>
    </form>
  );
};
