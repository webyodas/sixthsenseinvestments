import React from 'react';
import { Mail, MessageSquare, MapPin, Clock, ShieldCheck } from 'lucide-react';
import { LeadForm } from '../components/LeadForm';

export const Contact: React.FC = () => {
  const faqs = [
    {
      q: 'How does the association with Aditya Birla Capital work?',
      a: 'Sixth Sense Investments operates in authorized channel alignment with Aditya Birla Capital. Your capital and depository demat holdings are maintained directly under your name with Aditya Birla Capital, providing institutional-grade custody, safety, and regulatory compliance.'
    },
    {
      q: 'What is the statutory capital required for Portfolio Management Services (PMS)?',
      a: 'As per SEBI regulations, direct onboarding into registered Portfolio Management Services requires a statutory minimum ticket of ₹50 Lakhs. For portfolios accumulating towards that threshold, we provide structured Research Analyst advisory baskets.'
    },
    {
      q: 'How are stock market academy classes conducted?',
      a: 'Classes are conducted strictly offline at our Palghar and Mumbai centers with live terminal setups, auction market profiling, and real-time execution. We also sponsor top candidates for funded national trading championships.'
    },
    {
      q: 'Is Mann Jain registered with SEBI?',
      a: 'Yes, Mann Jain is a SEBI Registered Research Analyst (INZXXXXX8032) and holds certifications across 6 NISM series with over five years of active Registered Investment Advisory experience.'
    }
  ];

  return (
    <div className="pt-36 pb-24 space-y-24 text-left">
      {/* HEADER */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="space-y-4 max-w-3xl">
          <p className="text-xs text-[#d4af37] font-medium tracking-wide">
            Advisory desk
          </p>
          <h1 className="font-serif text-4xl sm:text-6xl text-[#f1f4f8] leading-[1.08] tracking-tight">
            Connect with Founder Mann Jain & the research desk.
          </h1>
          <p className="text-base sm:text-lg text-[#8b9bb4] leading-relaxed font-normal">
            Schedule a confidential consultation, inquire about our PMS and Research Analyst calls, or apply for upcoming offline stock market academy cohorts.
          </p>
        </div>
      </section>

      {/* CONTACT INFO & FORM GRID */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Info Column (5 cols) */}
          <div className="lg:col-span-5 space-y-6">
            <div className="bg-[#121720] rounded-xl p-8 space-y-6">
              <h3 className="font-serif text-xl text-[#f1f4f8]">Direct communication channels</h3>

              <div className="space-y-4">
                <a
                  href="https://wa.me/919112399843?text=Hi%20Mann%20Jain,%20I%20would%20like%20to%20inquire%20about%20Sixth%20Sense%20Investments%20services."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block p-4 rounded bg-[#1a2230] hover:bg-[#253042] transition-colors"
                >
                  <div className="flex items-start gap-3">
                    <MessageSquare className="w-5 h-5 text-[#d4af37] shrink-0 mt-0.5" />
                    <div>
                      <span className="text-xs font-medium text-[#f1f4f8]">WhatsApp advisory desk</span>
                      <p className="text-xs text-[#8b9bb4] mt-0.5">+91 91123 99843 / +91 80809 07126</p>
                    </div>
                  </div>
                </a>

                <div className="p-4 rounded bg-[#1a2230] space-y-1">
                  <div className="flex items-start gap-3">
                    <Mail className="w-5 h-5 text-[#d4af37] shrink-0 mt-0.5" />
                    <div>
                      <span className="text-xs font-medium text-[#f1f4f8]">Official Advisory Desks</span>
                      <p className="text-xs text-[#8b9bb4] mt-0.5">sixthsenseinvestments.official@gmail.com</p>
                      <p className="text-xs text-[#8b9bb4] mt-0.5">mannjain.abm@gmail.com</p>
                    </div>
                  </div>
                </div>

                <div className="p-4 rounded bg-[#1a2230] space-y-1">
                  <div className="flex items-start gap-3">
                    <MapPin className="w-5 h-5 text-[#d4af37] shrink-0 mt-0.5" />
                    <div>
                      <span className="text-xs font-medium text-[#f1f4f8]">Registered Office</span>
                      <p className="text-xs text-[#8b9bb4] mt-0.5">
                        Palghar Commercial Center, Maharashtra, India
                      </p>
                    </div>
                  </div>
                </div>

                <div className="p-4 rounded bg-[#1a2230] space-y-1">
                  <div className="flex items-start gap-3">
                    <Clock className="w-5 h-5 text-[#8b9bb4] shrink-0 mt-0.5" />
                    <div>
                      <span className="text-xs font-medium text-[#f1f4f8]">Trading hours & desk availability</span>
                      <p className="text-xs text-[#8b9bb4] mt-0.5">Monday – Friday: 9:00 AM – 6:00 PM IST</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Fiduciary compliance */}
            <div className="p-6 bg-[#121720] rounded-xl space-y-2 text-xs text-[#8b9bb4]">
              <div className="flex items-center gap-2 text-[#d4af37] font-medium">
                <ShieldCheck className="w-4 h-4" />
                <span>Statutory fiduciary commitment</span>
              </div>
              <p className="leading-relaxed">
                Registered Research Analyst INZXXXXX8032. All recommendations follow SEBI code of conduct and statutory risk disclosures.
              </p>
            </div>
          </div>

          {/* Right Column: Lead Form (7 cols) */}
          <div className="lg:col-span-7">
            <LeadForm />
          </div>

        </div>
      </section>

      {/* FAQS */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 space-y-8">
        <div className="space-y-2 max-w-2xl">
          <p className="text-xs text-[#d4af37] font-medium">Frequently asked questions</p>
          <h2 className="font-serif text-3xl sm:text-4xl text-[#f1f4f8]">
            Regulatory & operational transparency
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {faqs.map((faq, idx) => (
            <div key={idx} className="bg-[#121720] rounded-xl p-8 space-y-3">
              <h3 className="font-serif text-lg text-[#f1f4f8]">{faq.q}</h3>
              <p className="text-sm text-[#8b9bb4] leading-relaxed">{faq.a}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};
