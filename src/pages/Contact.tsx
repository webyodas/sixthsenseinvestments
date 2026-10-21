import React from 'react';
import { Mail, Phone, MapPin, MessageSquare, Clock, ShieldCheck, HelpCircle } from 'lucide-react';
import { LeadForm } from '../components/LeadForm';

export const Contact: React.FC = () => {
  const faqs = [
    {
      q: 'How does the association with Aditya Birla Capital work?',
      a: 'Sixth Sense Investments operates in authorized channel alignment with Aditya Birla Capital. Your capital and depository demat holdings are maintained directly with Aditya Birla Capital, providing institutional-grade custody, safety, and regulatory compliance.'
    },
    {
      q: 'What is the minimum capital required for Portfolio Management Services (PMS)?',
      a: 'As per SEBI guidelines, direct PMS onboarding requires a statutory minimum ticket of ₹50 Lakhs. For investors building towards that threshold, we offer systematic Equity Advisory and Research Analyst subscription baskets.'
    },
    {
      q: 'How are stock market academy classes conducted?',
      a: 'Classes are conducted strictly offline at our Palghar and Mumbai centers with live market execution, terminal setups, and real-time order flow tracking. We also select top candidates for funded national trading competitions.'
    },
    {
      q: 'Is Mann Jain registered with SEBI?',
      a: 'Yes, Mann Jain is a SEBI Registered Research Analyst (INZXXXXX8032) and holds certifications across 6 NISM series with over 5 years of active Registered Investment Advisory (RIA) experience.'
    }
  ];

  return (
    <div className="pt-32 pb-24 space-y-20">
      {/* HEADER */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="text-left space-y-4 max-w-3xl">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-900 border border-slate-800 text-xs font-bold text-amber-400">
            <Mail className="w-3.5 h-3.5" />
            <span>Advisory Desk</span>
          </div>
          <h1 className="text-4xl sm:text-5xl font-black text-white tracking-tight">
            Connect with Founder <br />
            <span className="gold-gradient-text">Mann Jain & Advisory Desk</span>
          </h1>
          <p className="text-slate-300 text-base leading-relaxed">
            Schedule a confidential consultation, inquire about our PMS and Research Analyst calls, 
            or apply for upcoming offline stock market academy cohorts.
          </p>
        </div>
      </section>

      {/* CONTACT INFO & FORM GRID */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          
          {/* Left Info Column (5 cols) */}
          <div className="lg:col-span-5 space-y-6 text-left">
            <div className="glass-card rounded-2xl p-6 border border-slate-800 space-y-4">
              <h3 className="text-lg font-bold text-white">Direct Communication Channels</h3>

              <div className="space-y-4 pt-2">
                <a
                  href="https://wa.me/919876543210?text=Hi%20Mann%20Jain,%20I%20would%20like%20to%20inquire%20about%20Sixth%20Sense%20Investments%20services."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-start gap-3 p-3.5 rounded-xl bg-emerald-500/10 border border-emerald-500/20 hover:bg-emerald-500/20 transition-colors group"
                >
                  <MessageSquare className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
                  <div>
                    <span className="text-xs font-bold text-white group-hover:text-emerald-300">WhatsApp Advisory Desk</span>
                    <p className="text-[11px] text-slate-300 mt-0.5">+91 98765 43210 (Instant Response)</p>
                  </div>
                </a>

                <div className="flex items-start gap-3 p-3.5 rounded-xl bg-slate-900/80 border border-slate-800">
                  <Mail className="w-5 h-5 text-amber-400 shrink-0 mt-0.5" />
                  <div>
                    <span className="text-xs font-bold text-white">Direct Advisory Inquiries</span>
                    <p className="text-[11px] text-slate-400 mt-0.5">advisory@sixthsenseinvestments.com</p>
                  </div>
                </div>

                <div className="flex items-start gap-3 p-3.5 rounded-xl bg-slate-900/80 border border-slate-800">
                  <MapPin className="w-5 h-5 text-amber-400 shrink-0 mt-0.5" />
                  <div>
                    <span className="text-xs font-bold text-white">Office Locations</span>
                    <p className="text-[11px] text-slate-400 mt-0.5">
                      Palghar Commercial Hub & Mumbai Corporate Branch, Maharashtra
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3 p-3.5 rounded-xl bg-slate-900/80 border border-slate-800">
                  <Clock className="w-5 h-5 text-slate-400 shrink-0 mt-0.5" />
                  <div>
                    <span className="text-xs font-bold text-white">Trading Hours & Desk Availability</span>
                    <p className="text-[11px] text-slate-400 mt-0.5">Monday – Friday: 9:00 AM – 6:00 PM IST</p>
                  </div>
                </div>
              </div>
            </div>

            {/* SEBI Compliance Card */}
            <div className="glass-panel rounded-2xl p-6 border border-slate-800 space-y-2">
              <div className="flex items-center gap-2 text-xs font-bold text-emerald-400">
                <ShieldCheck className="w-4 h-4" />
                <span>Regulatory Fiduciary Commitment</span>
              </div>
              <p className="text-xs text-slate-400 leading-relaxed">
                We strictly adhere to SEBI code of conduct for Research Analysts and Portfolio Managers. 
                Zero hidden commissions, direct client custody via Aditya Birla Capital.
              </p>
            </div>
          </div>

          {/* Right Column: Lead Form (7 cols) */}
          <div className="lg:col-span-7">
            <LeadForm />
          </div>

        </div>
      </section>

      {/* FAQ SECTION */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 space-y-8">
        <div className="text-center space-y-2">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-slate-900 text-amber-400 text-xs font-bold">
            <HelpCircle className="w-3.5 h-3.5" />
            <span>Frequently Asked Questions</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
            Common Inquiries
          </h2>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, idx) => (
            <div key={idx} className="glass-card rounded-2xl p-6 border border-slate-800 text-left space-y-2">
              <h3 className="text-sm font-bold text-white flex items-center gap-2">
                <span className="text-amber-400 font-extrabold">Q.</span>
                <span>{faq.q}</span>
              </h3>
              <p className="text-xs text-slate-300 pl-5 leading-relaxed">
                {faq.a}
              </p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};
