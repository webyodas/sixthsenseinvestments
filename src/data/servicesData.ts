import { ServiceItem } from '../types';

export const SERVICES: ServiceItem[] = [
  {
    id: 'equity-trading',
    title: 'Equity Trading & Execution',
    tagline: 'Precision Intraday, Swing & Positional Execution',
    description: 'High-conviction market execution backed by deep volume profile, liquidity hunting, and disciplined risk-to-reward parameters. Designed to extract consistent edge in dynamic markets.',
    icon: 'TrendingUp',
    features: [
      'Pre-session institutional level marking and order-flow triggers',
      'Intraday momentum and multi-day swing setups',
      'Strict capital protection with pre-defined max daily drawdowns',
      'Daily post-market breakdown and trade audit'
    ],
    idealFor: 'Active market participants seeking systematic alpha with institutional risk management.',
    badge: 'High Alpha'
  },
  {
    id: 'pms-wealth',
    title: 'Portfolio Management Services (PMS)',
    tagline: 'Institutional Wealth Creation with Aditya Birla Capital',
    description: 'Bespoke high-net-worth portfolio management combining quantitative equity selection with institutional custodial transparency through Aditya Birla Capital.',
    icon: 'Briefcase',
    features: [
      'Institutional channel partnership with Aditya Birla Capital',
      'Direct client custody and SEBI-regulated fiduciary management',
      'Dynamic allocation between large-cap anchors and high-growth midcaps',
      'Quarterly rebalancing and audited performance metrics'
    ],
    idealFor: 'HNIs and family offices seeking capital preservation and compounded wealth.',
    badge: 'Aditya Birla Partner'
  },
  {
    id: 'research-analyst',
    title: 'Research Analyst (R.A.) Calls',
    tagline: 'SEBI-Compliant High Conviction Advisory',
    description: 'Rigorous fundamental and technical research by SEBI Registered Research Analyst Mann Jain. Data-backed actionable recommendations with defined entry, targets, and invalidations.',
    icon: 'Search',
    features: [
      'SEBI Registered Research Analyst advisory (INZXXXXX8032)',
      'High-probability swing setups with 1:3+ risk-to-reward ratios',
      'Comprehensive research notes and thesis explanation',
      'Real-time WhatsApp & app alert notifications'
    ],
    idealFor: 'Retail and institutional investors looking for audited, compliant research intelligence.',
    badge: 'SEBI Registered'
  },
  {
    id: 'ipo-distribution',
    title: 'IPO Distribution & Registrar Facility',
    tagline: 'Primary Market Allocations & Advisory',
    description: 'Strategic participation in Initial Public Offerings (IPOs) with institutional allocation insights, RTA transfer coordination, and listing day profit-booking frameworks.',
    icon: 'FileText',
    features: [
      'Deep dive valuation reports on upcoming mainboard and SME IPOs',
      'Retail and HNI bidding syndicate assistance',
      'Registrar & Transfer Agent (RTA) documentation support',
      'Listing day exit and long-term hold matrix'
    ],
    idealFor: 'Investors seeking early-stage equity allocations with measured listing gains.',
    badge: 'Primary Markets'
  },
  {
    id: 'risk-management',
    title: 'Securities Operations & Risk Management',
    tagline: 'Institutional Capital Defense Architecture',
    description: 'NISM Series VII certified risk protocols ensuring portfolio solvency, position sizing controls, and derivative hedging overlays during extreme volatility.',
    icon: 'ShieldCheck',
    features: [
      'NISM Series VII certified operational standards',
      'Portfolio beta hedging using index futures and option collars',
      'Max loss containment and volatility adjustment filters',
      'Brokerage and counterparty audit'
    ],
    idealFor: 'Treasuries, corporate surplus managers, and high-capital traders.',
    badge: 'NISM Series VII'
  },
  {
    id: 'retirement-wealth',
    title: 'Retirement & Long-Term Wealth Advisory',
    tagline: 'Multi-Generational Financial Independence',
    description: 'Personalized financial roadmaps designed to generate inflation-adjusted passive cashflow, protect real purchasing power, and secure multi-generational wealth continuity.',
    icon: 'Landmark',
    features: [
      'Retirement corpus calculation factoring India-specific inflation rates',
      'Tax-efficient asset structuring and annuity optimization',
      'Emergency liquidity buffers and sovereign gold bond strategies',
      'Estate planning and smooth nominee transition support'
    ],
    idealFor: 'Professionals, business owners, and retirees seeking financial sovereignty.',
    badge: 'Life Goals'
  },
  {
    id: 'algo-trading',
    title: 'Quantitative Algo Trading',
    tagline: 'Rule-Based Execution with Zero Emotional Friction',
    description: 'Automated quantitative algorithms running on high-speed infrastructure. Removes cognitive bias, executes at tick speed, and captures micro-structural market inefficiencies.',
    icon: 'Cpu',
    features: [
      'Backtested algorithmic models across 5+ years of tick data',
      'API integration with top institutional brokers',
      'Automated trailing stop-losses and gamma scalping logic',
      'Real-time latency monitoring and kill-switch safeguards'
    ],
    idealFor: 'Systematic traders and investors who demand strictly disciplined automated execution.',
    badge: 'FinTech'
  },
  {
    id: 'stock-market-classes',
    title: 'Stock Market Academy & Mentorship',
    tagline: 'From Beginner to Institutional Pro | Real Funded Capital',
    description: 'Intensive offline masterclasses, live trading desk sessions, and national competition training. Learn how to trade real markets with real money under direct supervision.',
    icon: 'GraduationCap',
    features: [
      'Exclusive offline classes in Palghar & Mumbai with live market execution',
      'Funded trading account challenges (e.g. Dehradun National Trading League)',
      'Price action, institutional liquidity concepts, and psychological mastery',
      'Lifetime community access to Mann Jain’s daily watchlist'
    ],
    idealFor: 'Aspiring traders and professionals committed to mastering financial markets as a serious career.',
    badge: 'Funded Challenges'
  }
];
