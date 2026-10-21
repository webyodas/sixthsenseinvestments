import React, { useState } from 'react';
import confetti from 'canvas-confetti';
import { Send, CheckCircle2, ShieldCheck, ArrowRight, Loader2, Sparkles } from 'lucide-react';
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
      setError('Please fill in your name, email, and phone number.');
      return;
    }

    setLoading(true);
    try {
      const res = await api.submitLead(formData);
      if (res.success) {
        setSubmitted(true);
        // Trigger celebratory confetti
        try {
          confetti({
            particleCount: 80,
            spread: 70,
            origin: { y: 0.6 }
          });
        } catch {
          // Ignore if blocked
        }

        if (onSuccess) onSuccess();
      } else {
        setError(res.message || 'Submission failed. Please try again.');
      }
    } catch (err: any) {
      setError(err.message || 'Network error. Please try again or message via WhatsApp.');
    } finally {
      setLoading(false);
    }
  };

  if (submitted) {
    return (
      <div className={`glass-panel rounded-2xl p-8 border border-emerald-500/30 text-center space-y-4 ${className}`}>
        <div className="w-14 h-14 bg-emerald-500/20 text-emerald-400 rounded-full flex items-center justify-center mx-auto border border-emerald-500/40 animate-bounce">
          <CheckCircle2 className="w-8 h-8" />
        </div>
        <h3 className="text-xl font-bold text-white">Consultation Request Received!</h3>
        <p className="text-slate-300 text-sm max-w-md mx-auto">
          Thank you, <strong className="text-white">{formData.name}</strong>. Founder <strong>Mann Jain</strong> and our senior research advisory desk will review your profile and contact you within 2 business hours.
        </p>

        <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-3">
          <a
            href={`https://wa.me/919876543210?text=Hi%20Mann%20Jain,%20I%20just%20submitted%20a%20consultation%20request%20for%20${encodeURIComponent(formData.service_interested)}.%20My%20name%20is%20${encodeURIComponent(formData.name)}.`}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-emerald-600 hover:bg-emerald-500 text-white font-bold py-2.5 px-5 rounded-lg text-xs transition-colors shadow-lg shadow-emerald-950"
          >
            <span>Fast-Track on WhatsApp</span>
            <ArrowRight className="w-3.5 h-3.5" />
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
            className="w-full sm:w-auto text-xs text-slate-400 hover:text-white underline py-2"
          >
            Submit Another Request
          </button>
        </div>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className={`glass-panel rounded-2xl p-6 sm:p-8 space-y-5 border border-slate-800 ${className}`}>
      <div className="space-y-1">
        <div className="flex items-center gap-2 text-xs font-bold text-amber-400 tracking-wider uppercase">
          <Sparkles className="w-3.5 h-3.5" />
          <span>Priority Advisory Access</span>
        </div>
        <h3 className="text-xl sm:text-2xl font-bold text-white tracking-tight">Request an Institutional Portfolio Review</h3>
        <p className="text-slate-400 text-xs">
          Direct confidential consultation with Founder & SEBI Registered R.A. Mann Jain.
        </p>
      </div>

      {error && (
        <div className="bg-rose-500/10 border border-rose-500/30 text-rose-300 text-xs px-3.5 py-2.5 rounded-lg">
          {error}
        </div>
      )}

      <div className="space-y-4">
        <div>
          <label className="block text-xs font-semibold text-slate-300 mb-1.5">
            Full Name <span className="text-amber-400">*</span>
          </label>
          <input
            type="text"
            required
            placeholder="e.g. Rahul Sharma"
            value={formData.name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            className="w-full bg-slate-900/90 border border-slate-800 rounded-lg px-3.5 py-2.5 text-sm text-white placeholder-slate-500 focus:outline-none focus:border-amber-400 focus:ring-1 focus:ring-amber-400 transition-all"
          />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label className="block text-xs font-semibold text-slate-300 mb-1.5">
              Email Address <span className="text-amber-400">*</span>
            </label>
            <input
              type="email"
              required
              placeholder="rahul@example.com"
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              className="w-full bg-slate-900/90 border border-slate-800 rounded-lg px-3.5 py-2.5 text-sm text-white placeholder-slate-500 focus:outline-none focus:border-amber-400 focus:ring-1 focus:ring-amber-400 transition-all"
            />
          </div>

          <div>
            <label className="block text-xs font-semibold text-slate-300 mb-1.5">
              Phone / WhatsApp Number <span className="text-amber-400">*</span>
            </label>
            <input
              type="tel"
              required
              placeholder="+91 98765 43210"
              value={formData.phone}
              onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
              className="w-full bg-slate-900/90 border border-slate-800 rounded-lg px-3.5 py-2.5 text-sm text-white placeholder-slate-500 focus:outline-none focus:border-amber-400 focus:ring-1 focus:ring-amber-400 transition-all"
            />
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label className="block text-xs font-semibold text-slate-300 mb-1.5">
              Service of Interest
            </label>
            <select
              value={formData.service_interested}
              onChange={(e) => setFormData({ ...formData, service_interested: e.target.value })}
              className="w-full bg-slate-900/90 border border-slate-800 rounded-lg px-3.5 py-2.5 text-sm text-white focus:outline-none focus:border-amber-400 focus:ring-1 focus:ring-amber-400 transition-all cursor-pointer"
            >
              {servicesList.map((s) => (
                <option key={s} value={s} className="bg-slate-900 text-white">
                  {s}
                </option>
              ))}
            </select>
          </div>

          <div>
            <label className="block text-xs font-semibold text-slate-300 mb-1.5">
              Investment Capital / Portfolio Size
            </label>
            <select
              value={formData.investment_budget}
              onChange={(e) => setFormData({ ...formData, investment_budget: e.target.value })}
              className="w-full bg-slate-900/90 border border-slate-800 rounded-lg px-3.5 py-2.5 text-sm text-white focus:outline-none focus:border-amber-400 focus:ring-1 focus:ring-amber-400 transition-all cursor-pointer"
            >
              {budgetTiers.map((b) => (
                <option key={b} value={b} className="bg-slate-900 text-white">
                  {b}
                </option>
              ))}
            </select>
          </div>
        </div>

        <div>
          <label className="block text-xs font-semibold text-slate-300 mb-1.5">
            Brief Overview of Your Goals or Current Holdings
          </label>
          <textarea
            rows={3}
            placeholder="Share your current investment timeline, risk appetite, or specific requirements..."
            value={formData.message}
            onChange={(e) => setFormData({ ...formData, message: e.target.value })}
            className="w-full bg-slate-900/90 border border-slate-800 rounded-lg px-3.5 py-2.5 text-sm text-white placeholder-slate-500 focus:outline-none focus:border-amber-400 focus:ring-1 focus:ring-amber-400 transition-all resize-none"
          ></textarea>
        </div>
      </div>

      <div className="pt-2">
        <button
          type="submit"
          disabled={loading}
          className="w-full py-3.5 px-6 rounded-lg font-bold text-sm bg-gradient-to-r from-amber-500 via-amber-400 to-amber-500 hover:from-amber-400 hover:to-amber-300 text-slate-950 shadow-xl shadow-amber-500/20 transition-all active:scale-[0.99] flex items-center justify-center gap-2 disabled:opacity-50"
        >
          {loading ? (
            <>
              <Loader2 className="w-4 h-4 animate-spin" />
              <span>Transmitting Securely to Cloudflare D1...</span>
            </>
          ) : (
            <>
              <span>Submit Consultation Request</span>
              <Send className="w-4 h-4" />
            </>
          )}
        </button>
      </div>

      <div className="flex items-center justify-center gap-2 text-[11px] text-slate-500 pt-1">
        <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
        <span>100% Confidential • Direct Fiduciary Oversight by Mann Jain (SEBI R.A.)</span>
      </div>
    </form>
  );
};
