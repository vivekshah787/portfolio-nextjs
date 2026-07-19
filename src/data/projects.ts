export type GalleryImg = { file: string; label: string };
export type Project = {
  num: string;
  name: string;
  tagline: string;
  tags: string[];
  year: string;
  cat: string;
  slug: string;
  role: string;
  duration: string;
  overview: string;
  problem: string;
  approach: string;
  highlights: string[];
  gallery: GalleryImg[];
};

export const PROJECTS: Project[] = [
  {
    num: '01', name: 'CygnetTax', tagline: 'Tax compliance suite — landing, dashboard, listing & login flows',
    tags: ['SaaS', 'Tax', 'Compliance'], year: '2026', cat: 'web saas compliance', slug: 'cygnettax',
    role: 'Senior Product Designer', duration: '130 weeks',
    overview: 'CygnetTax is an enterprise GST and indirect-tax management platform. The redesign covered the full surface of the product — from the public landing page through to daily-use dashboards.',
    problem: 'Tax compliance software tends to overwhelm users with dense tables and jargon. The challenge was to make a genuinely complex domain feel navigable without hiding the depth power users rely on.',
    approach: 'I structured the dashboard around clear information hierarchy — summary first, detail on demand — and rebuilt the marketing site to speak to enterprise buyers in plain, confident language.',
    highlights: [
      'Marketing site rebuilt around clear enterprise messaging',
      'Dashboard hierarchy: summary first, detail on demand',
      'Consistent listing, login, and dashboard design system',
    ],
    gallery: [
      { file: 'Cygnettax-landingpage.png', label: 'Landing Page' },
      { file: 'Dashboard.png', label: 'Dashboard' },
      { file: 'Listing.png', label: 'Listing' },
      { file: 'Login.png', label: 'Login' },
    ],
  },
  {
    num: '02', name: 'Cygnature', tagline: 'E-signature platform — dashboard & login with full RTL support',
    tags: ['SaaS', 'E-Signature', 'RTL'], year: '2026', cat: 'web saas compliance', slug: 'cygnature',
    role: 'Senior Product Designer', duration: '80 weeks',
    overview: 'Cygnature is an e-signature and document workflow platform built for enterprise compliance teams, including full right-to-left (RTL) support for Middle East markets.',
    problem: 'Signature workflows need to feel fast and unambiguous — every extra click in a signing flow is a point of drop-off — while also supporting a mirrored RTL layout without compromising usability.',
    approach: 'I designed a dashboard and login experience with a consistent, mirrored RTL layout system, keeping visual hierarchy and interaction patterns identical across both directions.',
    highlights: [
      'Full LTR/RTL design parity across dashboard and login',
      'Streamlined document workflow states',
      'Consistent componentised design system',
    ],
    gallery: [
      { file: 'LandingPage.png', label: 'Landing Page' },
      { file: 'Dashboard.png', label: 'Dashboard' },
      { file: 'Dashboard_RTL.png', label: 'Dashboard (RTL)' },
      { file: 'Login.png', label: 'Login' },
      { file: 'Login_RTL.png', label: 'Login (RTL)' },
    ],
  },
  {
    num: '03', name: 'R7 VAT — GCC', tagline: 'VAT compliance dashboard for the GCC region, with RTL support',
    tags: ['SaaS', 'VAT', 'RTL'], year: '2026', cat: 'web saas compliance', slug: 'r7vat-gcc',
    role: 'Product Designer', duration: '80 weeks',
    overview: 'The GCC edition of R7 VAT extends the same compliance dashboard to Gulf-region businesses, with a fully mirrored RTL experience for Arabic-speaking users.',
    problem: 'The product needed to feel native to RTL users, not like an LTR interface mirrored as an afterthought.',
    approach: 'I built out matching RTL layouts for both login and dashboard, validating that hierarchy, spacing, and interaction patterns held up in both directions.',
    highlights: [
      'Fully mirrored RTL login and dashboard',
      'Consistent hierarchy across LTR and RTL',
      'Shared design system with the Europe edition',
    ],
    gallery: [
      { file: 'Login.png', label: 'Login' },
      { file: 'Login_RTL.png', label: 'Login (RTL)' },
      { file: 'Dashboard.png', label: 'Dashboard' },
      { file: 'Dashboard_RTL.png', label: 'Dashboard (RTL)' },
    ],
  },
  {
    num: '04', name: 'Cygnet Billing Solution', tagline: 'Billing & invoicing suite — registration through dashboard flow',
    tags: ['SaaS', 'Billing', 'Compliance'], year: '2026', cat: 'web saas compliance', slug: 'cygnet-billing-solution',
    role: 'Product Designer', duration: '80 weeks',
    overview: 'Cygnet Billing Solution manages enterprise billing and invoicing at scale. This case study covers the full journey from first landing, through registration, into daily dashboard use.',
    problem: 'Billing software touches finance teams with very different needs — new customers need a confident first impression, daily users need speed and clarity.',
    approach: 'I designed a coherent flow from landing to registration to dashboard, keeping visual language consistent so the transition from "considering the product" to "using the product" feels seamless.',
    highlights: [
      'End-to-end flow from landing to daily dashboard use',
      'Simplified registration with clear progressive steps',
      'Consistent listing and dashboard patterns',
    ],
    gallery: [
      { file: 'LandingPage.png', label: 'Landing Page' },
      { file: 'Registration.png', label: 'Registration' },
      { file: 'Login.png', label: 'Login' },
      { file: 'Dashboard.png', label: 'Dashboard' },
      { file: 'Listing.png', label: 'Listing' },
    ],
  },
  {
    num: '05', name: 'Cygnet Global E-Invoicing Solution', tagline: 'Global e-invoicing platform — country-wise compliance dashboards',
    tags: ['SaaS', 'E-Invoicing', 'Compliance'], year: '2026', cat: 'web saas compliance', slug: 'cygnet-global-e-invoicing',
    role: 'Senior Product Designer', duration: '100 weeks',
    overview: 'This platform helps multinational businesses stay compliant with e-invoicing regulations across multiple countries at once, each with its own rules and formats.',
    problem: 'Every country has different e-invoicing requirements. Users needed to compare and manage compliance status across regions without the dashboard turning into a wall of tables.',
    approach: 'I designed a country-wise dashboard view that lets teams drill from a global summary into the specifics of any single market, keeping the mental model consistent at every level.',
    highlights: [
      'Country-wise compliance dashboard views',
      'Consistent drill-down from global to local detail',
      'Clear listing and login experience across markets',
    ],
    gallery: [
      { file: 'Login.png', label: 'Login' },
      { file: 'Dashboard.png', label: 'Dashboard' },
      { file: 'Dashboard-Country-Wise.png', label: 'Dashboard (Country-wise)' },
      { file: 'Listing.png', label: 'Listing' },
    ],
  },
  {
    num: '06', name: 'Cygnet Vendor Postbox', tagline: 'Vendor communication portal — listing & dashboard experience',
    tags: ['SaaS', 'Vendor Portal', 'Compliance'], year: '2026', cat: 'web saas compliance', slug: 'cygnet-vendor-postbox',
    role: 'Product Designer', duration: '300 weeks',
    overview: 'Cygnet Vendor Postbox is a communication and document portal connecting enterprises with their vendor networks for compliance-related exchanges.',
    problem: 'Vendors needed a simple, reliable way to send and track compliance documents without needing deep product training.',
    approach: 'I focused on a plain, task-first dashboard and listing experience so vendors — who may only log in occasionally — can immediately understand what needs their attention.',
    highlights: [
      'Task-first dashboard for infrequent users',
      'Clear document listing and status tracking',
      'Low-friction login built for external vendors',
    ],
    gallery: [
      { file: 'Login.png', label: 'Login' },
      { file: 'Dashboard.png', label: 'Dashboard' },
      { file: 'Listing.png', label: 'Listing' },
    ],
  },
  {
    num: '07', name: 'R7 VAT — Europe', tagline: 'VAT compliance dashboard built for the European market',
    tags: ['SaaS', 'VAT', 'Compliance'], year: '2026', cat: 'web saas compliance', slug: 'r7vat-europe',
    role: 'Product Designer', duration: '80 weeks',
    overview: 'R7 VAT Europe helps businesses manage VAT compliance and reporting across European jurisdictions from a single dashboard.',
    problem: 'VAT reporting involves recurring, detail-heavy tasks; the interface needed to reduce repetitive effort without hiding necessary detail.',
    approach: 'I designed a dashboard-first experience with a clean login entry point, prioritising the recurring tasks compliance teams return to most often.',
    highlights: [
      'Dashboard structured around recurring VAT tasks',
      'Clear, low-friction login flow',
      'Consistent visual language with the wider R7 VAT product family',
    ],
    gallery: [
      { file: 'Login.png', label: 'Login' },
      { file: 'Dashboard.png', label: 'Dashboard' },
    ],
  },
  
  {
    num: '08', name: 'DocDoc', tagline: 'Healthcare booking platform — end-to-end patient journey redesign',
    tags: ['SaaS', 'Healthcare', 'UI/UX'], year: '2023', cat: 'web saas', slug: 'docdoc',
    role: 'Product Designer', duration: '10 weeks',
    overview: 'DocDoc helps patients find, book, and manage appointments with doctors and clinics online. The goal of this project was to make that journey feel effortless — from the first search to the final confirmation.',
    problem: 'The existing flow buried booking behind too many steps, and patients often dropped off before confirming an appointment. Trust signals — doctor credentials, availability, reviews — were scattered and hard to scan.',
    approach: 'I redesigned the landing experience around a clear, single search entry point, brought trust signals closer to the decision point, and simplified the booking flow down to a few unambiguous steps with visible progress at every stage.',
    highlights: [
      'Simplified search-to-booking flow',
      'Clearer doctor profiles with trust signals up front',
      'Consistent, accessible login and account experience',
    ],
    gallery: [
      { file: 'LandingPage.png', label: 'Landing Page' },
      { file: 'Login.png', label: 'Login' },
    ],
  },
  {
    num: '09', name: 'Spring Money', tagline: 'Fintech platform — investment dashboards & onboarding flows',
    tags: ['SaaS', 'Fintech', 'Dashboard'], year: '2023', cat: 'web saas', slug: 'springmoney',
    role: 'Product Designer', duration: '5 weeks',
    overview: 'Spring Money is a fintech platform for personal investing. The redesign focused on making financial information — often dense and intimidating — feel approachable and clear for first-time investors.',
    problem: 'New users were unsure where to start, and dashboards leaned heavily on jargon and dense tables that were intimidating rather than informative.',
    approach: 'I reframed the landing page around outcomes people care about (goals, growth, security) rather than product features, and laid the groundwork for a dashboard structure that prioritises the numbers that matter most first.',
    highlights: [
      'Outcome-led landing narrative for first-time investors',
      'Simplified visual hierarchy for financial data',
      'Consistent design language across marketing and product',
    ],
    gallery: [
      { file: 'LandingPage.png', label: 'Landing Page' },
    ],
  },
  {
    num: '10', name: 'Reece Safety', tagline: 'B2B e-commerce — product catalogue & procurement UX',
    tags: ['E-Commerce', 'B2B'], year: '2022', cat: 'web ecommerce', slug: 'reece-safety',
    role: 'UI Designer', duration: '20 weeks',
    overview: 'Reece Safety sells industrial and workplace safety equipment to procurement teams. This project focused on making bulk browsing and repeat ordering faster for professional buyers.',
    problem: 'B2B buyers typically know exactly what they need, but the storefront experience was built around casual browsing rather than fast, repeatable procurement.',
    approach: 'I designed a catalogue layout optimised for scanning large product sets quickly, with clearer filtering and category structure suited to how procurement teams actually shop.',
    highlights: [
      'Catalogue layout built for fast scanning',
      'Clearer category and filter structure',
      'Consistent product card system at scale',
    ],
    gallery: [
      { file: 'LandingPage.png', label: 'Landing Page' },
    ],
  },
  {
    num: '11', name: 'Trueself', tagline: 'Wellness & personal development — calm, trust-first visual identity',
    tags: ['Wellness', 'Branding'], year: '2021', cat: 'web branding', slug: 'trueself',
    role: 'UI/Visual Designer', duration: '10 weeks',
    overview: 'Trueself is a personal development and wellness brand. The brief was to design a calm, trustworthy landing experience that feels human rather than clinical.',
    problem: 'Wellness products live or die on trust and tone — anything too "salesy" or clinical undermines the message before a visitor reads a word of copy.',
    approach: 'I leaned into soft colour, generous whitespace, and warm imagery to build a landing page that feels like a calm conversation rather than a pitch.',
    highlights: [
      'Warm, restrained visual identity',
      'Landing page built around a single calm narrative',
      'Typography and spacing tuned for a slower reading pace',
    ],
    gallery: [
      { file: 'LandingPage.png', label: 'Landing Page' },
    ],
  },
  
  {
    num: '12', name: 'Cygnet Audit Tool', tagline: 'Audit management dashboard — streamlined login & workspace UX',
    tags: ['SaaS', 'Audit', 'Compliance'], year: '2020', cat: 'web saas compliance', slug: 'cygnet-audit-tool',
    role: 'Product Designer', duration: '10 weeks',
    overview: 'Cygnet Audit Tool helps enterprise teams manage and track compliance audits in one workspace. The focus was a clean entry point and a workspace that scales with large audit datasets.',
    problem: 'Audit workflows involve many stakeholders and long-running processes; the existing experience made it hard to see status at a glance.',
    approach: 'I designed a focused login experience and a dashboard workspace that surfaces audit status and priority items immediately on entry.',
    highlights: [
      'Clear, low-friction login experience',
      'Status-first dashboard layout',
      'Scalable workspace structure for large audit sets',
    ],
    gallery: [
      { file: 'Login.png', label: 'Login' },
      { file: 'Dashboard.png', label: 'Dashboard' },
    ],
  },
  
];

export const FILTERS = ['all', 'saas', 'compliance', 'ecommerce', 'branding'];

export const imgSrc = (p: Project, file: string) => `/images/portfolio/${p.slug}/${file}`;

export const getProjectBySlug = (slug: string) => PROJECTS.find((p) => p.slug === slug);
