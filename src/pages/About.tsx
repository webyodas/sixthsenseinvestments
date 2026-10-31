import React from 'react';
import { ArrowRight, ChevronRight, ShieldCheck } from 'lucide-react';

interface AboutProps {
  onOpenBooking: () => void;
  onNavigate: (page: string) => void;
}

interface ImageCardItem {
  src: string;
  title: string;
  category: string;
  caption: string;
  partnerLogo?: string;
}

export const About: React.FC<AboutProps> = ({ onOpenBooking, onNavigate }) => {
  const certifications = [
    {
      series: 'NISM Series XV & XV-B',
      title: 'SEBI Research Analyst Certification',
      desc: 'Mandatory statutory credential authorizing independent equity research, valuation modeling, and issuing investment recommendations under SEBI (Research Analysts) Regulations, 2014.'
    },
    {
      series: 'NISM Series XXI (A & B)',
      title: 'Portfolio Managers Certification',
      desc: 'Comprehensive qualification in equity portfolio construction, asset allocation, alpha-beta decomposition, performance attribution, and regulatory compliance under SEBI (Portfolio Managers) Regulations.'
    },
    {
      series: 'NISM Series VII',
      title: 'Securities Operations and Risk Management',
      desc: 'Specialized certification covering end-to-end trade lifecycle, clearing and settlement mechanisms, margin requirements, liquidity safeguards, and systemic risk mitigation.'
    },
    {
      series: 'NISM Series X (A & B)',
      title: 'Investment Adviser Certification (Level 1 & 2)',
      desc: 'Statutory fiduciary credentials for comprehensive financial planning, retirement advisory, and personal risk profiling.'
    },
    {
      series: 'NISM Series V(B)',
      title: 'Mutual Fund Foundation Certification',
      desc: 'In-depth mastery of pooled investment vehicles, NAV calculations, debt fund credit analysis, and equity index replication.'
    }
  ];

  const tradingDeskImages: ImageCardItem[] = [
    { 
      src: '/assets/images/img_3.jpg', 
      title: 'Aditya Birla Capital Strategic Partnership',
      category: 'Corporate Alliance',
      partnerLogo: '/assets/images/aditya_birla_capital.png',
      caption: 'Official partner announcement featuring Founder Mann Jain in formal attire with Aditya Birla Capital Stocks & Securities.' 
    },
    { 
      src: '/assets/images/img_18.jpg', 
      title: 'Union Budget Day Multi-Monitor Terminal',
      category: 'Live Intraday Desk',
      caption: 'Multi-screen execution workstation on Union Budget Day where ₹4,15,522.50 net intraday profit was booked under strict risk rules.' 
    },
    { 
      src: '/assets/images/img_20.jpg', 
      title: 'Dehradun 2026 Competition Announcement',
      category: 'National League Squad',
      caption: 'Mann Jain at the proprietary quantitative desk announcing the elite 5-member funded delegation for Dehradun.' 
    },
    { 
      src: '/assets/images/img_2.jpg', 
      title: 'Educational Series: Trade Like Us',
      category: 'Mentorship Content',
      caption: 'Video masterclass thumbnail with Mann Jain outlining the journey from zero retail knowledge to institutional strategy.' 
    },
    { 
      src: '/assets/images/img_6.jpg', 
      title: 'Desk Market Briefing & Risk Governance',
      category: 'Executive Commentary',
      caption: 'Founder Mann Jain conducting a live strategy walkthrough and risk breakdown from his Palghar office.' 
    },
    { 
      src: '/assets/images/img_5.jpg', 
      title: 'Beyond the Desk: GT 650 Night Ride',
      category: 'Founder Life & Passions',
      caption: 'Mann Jain with his Royal Enfield Continental GT 650 cafe racer, balancing high-stakes execution with personal discipline.' 
    }
  ];

  const communitySponsorshipImages: ImageCardItem[] = [
    { 
      src: '/assets/images/img_12.jpg', 
      title: 'Taal Raas Palghar Title Sponsor Banner',
      category: 'Event Exhibition',
      caption: 'Giant official banner featuring Founder Mann Jain with office contact lines (+91 91123 99843) alongside local festival participants.' 
    },
    { 
      src: '/assets/images/img_4.jpg', 
      title: 'Bajrang Dandiya Raas Palghar',
      category: 'Festival Sponsorship',
      caption: 'Event attendee photographed at the official Sixth Sense Investments & Aditya Birla Capital sponsor backdrop wall.' 
    },
    { 
      src: '/assets/images/img_21.jpg', 
      title: 'Palghar Navratri Pavilion',
      category: 'Community Presence',
      caption: 'Youth participants celebrating at the Sixth Sense Investments cultural festival sponsor stage.' 
    },
    { 
      src: '/assets/images/img_9.jpg', 
      title: 'Cultural Festival Celebration',
      category: 'Regional Engagement',
      caption: 'Festival attendee dancing at the Palghar Dandiya arena co-sponsored by Sixth Sense Investments.' 
    },
    { 
      src: '/assets/images/img_17.jpg', 
      title: 'Taal Raas Community Celebrations',
      category: 'Cultural Sponsorship',
      caption: 'Garba evening celebrations sponsored by Sixth Sense Investments to support local community tradition in Palghar.' 
    },
    { 
      src: '/assets/images/img_11.jpg', 
      title: 'Palghar Youth Community Night',
      category: 'Community Festival',
      caption: 'Youth festival crowd gathered under the festive canopy at the Sixth Sense Investments sponsored Garba night.' 
    }
  ];

  return (
    <div className="pt-36 pb-24 space-y-24 text-left">
      {/* HEADER */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="space-y-4 max-w-3xl">
          <p className="text-xs text-[#d4af37] font-medium tracking-wide">
            Firm history & governance
          </p>
          <h1 className="font-serif text-4xl sm:text-6xl text-[#f1f4f8] leading-[1.08] tracking-tight">
            Bridging retail trading with institutional precision.
          </h1>
          <p className="text-base sm:text-lg text-[#8b9bb4] leading-relaxed font-normal">
            Founded by Mann Jain, Sixth Sense Investments operates on an uncompromising fiduciary philosophy: capital preservation first, mechanical execution, and verifiable compliance under SEBI regulations.
          </p>
        </div>
      </section>

      {/* FOUNDER DEEP DIVE */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          <div className="lg:col-span-5 space-y-3">
            <div className="aspect-[3/4] rounded-xl overflow-hidden bg-[#121720]">
              <img 
                src="/assets/images/img_3.jpg" 
                alt="Mann Jain, Founder & Research Analyst" 
                className="w-full h-full object-cover object-top"
              />
            </div>
            <p className="text-xs text-[#8b9bb4]">
              Mann Jain · SEBI Registered Research Analyst · Founder, Sixth Sense Investments
            </p>
          </div>

          <div className="lg:col-span-7 space-y-6">
            <h2 className="font-serif text-3xl sm:text-4xl text-[#f1f4f8]">
              The journey from screen hours to institutional rigor
            </h2>

            <div className="space-y-4 text-sm text-[#8b9bb4] leading-relaxed">
              <p>
                "We started with zero knowledge, just like everyone else. But through thousands of hours observing real market auction dynamics, testing hypotheses, and establishing strict loss boundaries, we mastered the science of asymmetric risk."
              </p>
              <p>
                Operating across Palghar, Mumbai, and pan-India client networks, Mann Jain has trained dozens of proprietary traders and advised investors across varied wealth brackets.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 pt-4">
              <div className="space-y-1">
                <span className="text-xs text-[#d4af37] font-medium">01 · Methodical</span>
                <p className="text-xs text-[#8b9bb4]">Pre-market scenarios dictate every execution. Emotion has no seat at the desk.</p>
              </div>
              <div className="space-y-1">
                <span className="text-xs text-[#d4af37] font-medium">02 · Fiduciary</span>
                <p className="text-xs text-[#8b9bb4]">Direct institutional custody with full statutory transparency under SEBI rules.</p>
              </div>
              <div className="space-y-1">
                <span className="text-xs text-[#d4af37] font-medium">03 · Asymmetric</span>
                <p className="text-xs text-[#8b9bb4]">Never risk ₹1 to make ₹1. We target minimum 1:3 reward-to-risk setups.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* STRATEGIC ALLIANCE: ADITYA BIRLA CAPITAL */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="bg-[#121720] rounded-xl p-8 sm:p-12 space-y-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-6">
            <div className="space-y-2">
              <p className="text-xs text-[#d4af37] font-medium">Authorized channel alliance</p>
              <h2 className="font-serif text-2xl sm:text-3xl text-[#f1f4f8]">
                Aditya Birla Capital institutional partnership
              </h2>
            </div>
            <div className="text-xs text-[#8b9bb4]">
              Direct demat custody and depository clearing
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-sm text-[#8b9bb4]">
            <div className="space-y-2">
              <h3 className="text-base font-serif text-[#f1f4f8]">Institutional order execution</h3>
              <p className="leading-relaxed">
                Sixth Sense Investments clients utilize high-speed routing engines, institutional liquidity pools, and advanced depository operations powered by Aditya Birla Capital.
              </p>
            </div>
            <div className="space-y-2">
              <h3 className="text-base font-serif text-[#f1f4f8]">Regulated PMS frameworks</h3>
              <p className="leading-relaxed">
                Portfolio Management Services follow strict regulatory boundaries, independent accounting audits, and segregation of client holdings into individual demat accounts.
              </p>
            </div>
            <div className="space-y-2">
              <h3 className="text-base font-serif text-[#f1f4f8]">Primary market syndicate</h3>
              <p className="leading-relaxed">
                Direct access to IPO distribution pipelines and direct liaison for physical share conversions via institutional Registrar & Transfer Agent desks.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* REGULATORY CERTIFICATIONS (NISM & SEBI) */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 space-y-8">
        <div className="space-y-2 max-w-2xl">
          <p className="text-xs text-[#d4af37] font-medium">Compliance matrix</p>
          <h2 className="font-serif text-3xl sm:text-4xl text-[#f1f4f8]">
            Statutory NISM certifications
          </h2>
          <p className="text-sm text-[#8b9bb4]">
            Official qualifications verified under the National Institute of Securities Markets and SEBI guidelines.
          </p>
        </div>

        <div className="space-y-6">
          {certifications.map((cert, idx) => (
            <div key={idx} className="py-6 grid grid-cols-1 md:grid-cols-12 gap-4 items-start">
              <div className="md:col-span-4 space-y-1">
                <span className="text-xs text-[#d4af37] font-medium">{cert.series}</span>
                <h3 className="font-serif text-lg text-[#f1f4f8]">{cert.title}</h3>
              </div>
              <div className="md:col-span-8">
                <p className="text-sm text-[#8b9bb4] leading-relaxed">{cert.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 1. INSTITUTIONAL TRADING DESK & MEDIA */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 space-y-8">
        <div className="space-y-2">
          <p className="text-xs text-[#d4af37] font-medium">Operations & Research Desk</p>
          <h2 className="font-serif text-3xl sm:text-4xl text-[#f1f4f8]">
            Live Trading Terminals & Strategic Media
          </h2>
          <p className="text-sm text-[#8b9bb4]">
            Photographic record of live market execution, official corporate alliances, and proprietary mentorship releases.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {tradingDeskImages.map((img, idx) => (
            <figure key={idx} className="space-y-2.5 bg-[#121720] p-4 rounded-xl">
              <div className="aspect-[4/3] rounded-lg overflow-hidden bg-[#090c10]">
                <img 
                  src={img.src} 
                  alt={img.title} 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="space-y-1">
                <div className="flex items-center justify-between">
                  <span className="text-[10px] text-[#d4af37] font-medium uppercase tracking-wider">{img.category}</span>
                  {img.partnerLogo && (
                    <img src={img.partnerLogo} alt="Partner Logo" className="h-3.5 w-auto object-contain" />
                  )}
                </div>
                <h3 className="font-serif text-base text-[#f1f4f8]">{img.title}</h3>
                <figcaption className="text-xs text-[#8b9bb4] leading-relaxed">
                  {img.caption}
                </figcaption>
              </div>
            </figure>
          ))}
        </div>
      </section>

      {/* 2. REGIONAL PALGHAR SPONSORSHIP & COMMUNITY PRESENCE */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 space-y-8">
        <div className="space-y-2">
          <p className="text-xs text-[#d4af37] font-medium">Regional Presence</p>
          <h2 className="font-serif text-3xl sm:text-4xl text-[#f1f4f8]">
            Palghar Community & Cultural Sponsorship
          </h2>
          <p className="text-sm text-[#8b9bb4] max-w-3xl leading-relaxed">
            Sixth Sense Investments is proudly rooted in Palghar, Maharashtra. As title and associate sponsors alongside Aditya Birla Capital, our firm actively supports major cultural initiatives, regional youth events, and community festivals including Taal Raas Palghar and Bajrang Dandiya Raas.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {communitySponsorshipImages.map((img, idx) => (
            <figure key={idx} className="space-y-2.5 bg-[#121720] p-4 rounded-xl">
              <div className="aspect-[4/3] rounded-lg overflow-hidden bg-[#090c10]">
                <img 
                  src={img.src} 
                  alt={img.title} 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="space-y-1">
                <div className="flex items-center justify-between">
                  <span className="text-[10px] text-[#d4af37] font-medium uppercase tracking-wider">{img.category}</span>
                  {img.partnerLogo && (
                    <img src={img.partnerLogo} alt="Partner Logo" className="h-3.5 w-auto object-contain" />
                  )}
                </div>
                <h3 className="font-serif text-base text-[#f1f4f8]">{img.title}</h3>
                <figcaption className="text-xs text-[#8b9bb4] leading-relaxed">
                  {img.caption}
                </figcaption>
              </div>
            </figure>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 pt-10">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
          <div className="space-y-2">
            <h2 className="font-serif text-2xl sm:text-3xl text-[#f1f4f8]">
              Ready to evaluate your portfolio structure?
            </h2>
            <p className="text-sm text-[#8b9bb4]">
              Schedule a direct consultation with Founder Mann Jain.
            </p>
          </div>
          <button
            onClick={onOpenBooking}
            className="px-8 py-3.5 bg-[#d4af37] hover:bg-[#e5c158] text-[#090c10] font-medium rounded text-sm transition-colors flex items-center gap-2 self-start md:self-auto"
          >
            <span>Book consultation</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </section>
    </div>
  );
};
