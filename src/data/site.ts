// Sitedeki bütün kişisel bilgi ve rakamlar burada; bileşenlerde sabit yazılmaz.
// Rakamların kaynağı: DusAssistant/dus-backend/eval/README.md (2026-10-01 … 2026-10-06 ölçümleri).

export const person = {
  name: 'Ilhan Altunbas',
  role: 'Junior AI Engineer',
  location: 'Hainaut, Belgium',
  relocation: 'Open to relocating to Brussels',
  availability: 'Available immediately',
  languages: 'English (fluent) · French (B1, improving) · Turkish (native)',
  email: 'ilhanaltunbas.01@gmail.com',
  github: 'https://github.com/IlhanAltunbas',
  linkedin: 'https://www.linkedin.com/in/IlhanAltunbas',
  cv: '/cv/Ilhan_Altunbas_CV.pdf',
};

// Çerezsiz ziyaretçi sayacı (GoatCounter). Boşsa betik eklenmez.
export const analytics = {
  goatcounter: 'https://ilhanaltunbas.goatcounter.com/count',
};

export const repos = {
  dus: 'https://github.com/IlhanAltunbas/DusAssistant',
  dusEval: 'https://github.com/IlhanAltunbas/DusAssistant/blob/main/dus-backend/eval/README.md',
  t88: 'https://github.com/IlhanAltunbas/T88Controller',
  divvy: 'https://github.com/IlhanAltunbas/DivvyDrive',
  fileReader: 'https://github.com/IlhanAltunbas/File-Reader',
};

// Öne çıkan rakamlar (chain = sabit RAG zinciri, agent = LangGraph agent, son prompt).
export const headline = [
  { value: '42% → 72%', label: 'fully correct answers', note: 'chain vs. agent, 28-question eval, 3 runs each' },
  { value: '26% → 4%', label: 'answerable questions refused', note: 'the agent searches again in the other language' },
  { value: '77%', label: 'answers fully supported by sources', note: 'back from 64% after a prompt fix (chain: 79%)' },
  { value: '12 → 3', label: 'LLM calls per failing request', note: 'retries consolidated in the SDK layer' },
  { value: '€0', label: 'fixed infrastructure cost', note: 'scale-to-zero container, free tiers' },
];

// Grafik verisi: üç yapılandırma × üç ölçü (yüzde).
export const evalSeries = [
  { key: 'chain', name: 'Fixed RAG chain', short: 'Chain' },
  { key: 'agent1', name: 'Agent, first prompt', short: 'Agent v1' },
  { key: 'agent2', name: 'Agent, final prompt', short: 'Agent v2' },
] as const;

export const evalMetrics = [
  { label: 'Fully correct', better: 'higher', values: { chain: 42, agent1: 71, agent2: 72 } },
  { label: 'Faithful to sources*', better: 'higher', values: { chain: 79, agent1: 64, agent2: 77 } },
  { label: 'Answerable but refused', better: 'lower', values: { chain: 26, agent1: 3, agent2: 4 } },
] as const;

// Sohbet demosunda önerilen sorular: eval setindeki İngilizce, cevabı İngilizce kitaplarda olan sorular
// + kaynaklarda olmayan bir soru (reddetmesi beklenir).
export const demoQuestions = [
  'Where do the minerals that harden plaque into calculus come from, and is the source the same above and below the gum line?',
  'Roughly what fraction of epileptic patients taking phenytoin end up with enlarged gums?',
  'What can happen to the bone and gum tissue when a crown margin is placed so deep that it invades the zone of attachment just above the bone crest?',
  'Does vaping with e-cigarettes raise the risk of periodontitis as much as smoking regular cigarettes?',
];

export const experience = [
  {
    org: 'MrHolo',
    role: 'Software Developer (Kotlin Multiplatform), intern',
    period: 'Jul – Aug 2026',
    text: 'Delivered T88Controller from R&D to release in two months: one Kotlin Multiplatform codebase for Android and iOS, bidirectional sync with audio hardware over TCP, Codemagic CI/CD for APK and IPA builds.',
  },
  {
    org: 'DivvyDrive',
    role: 'Android Developer, intern',
    period: 'Jul – Aug 2025',
    text: 'Designed the MVVM architecture and network layer of two Android apps (Hilt, Coroutines), integrating 16 REST endpoints with ticket-based authorisation and chunked uploads for large files.',
  },
  {
    org: 'Çukurova University, Central Library',
    role: 'IT Technician, part-time',
    period: '2022 – 2024',
    text: 'Developed and maintained the library websites for 18 months alongside full-time studies, adding multilingual support.',
  },
];

export const education = {
  degree: 'Computer Engineering degree (4-year programme)',
  school: 'Çukurova University, Turkey',
  year: '2026',
  courses: 'Machine Learning, Computer Vision, Pattern Recognition',
};
